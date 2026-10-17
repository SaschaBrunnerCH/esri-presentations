#!/usr/bin/env bash
set -euo pipefail

if [[ "${CODESPACES:-}" != true ]]; then
  printf '%s\n' 'Run this script inside GitHub Codespaces.' >&2
  exit 1
fi

demo_codespace_name="${CODESPACE_NAME:-${1:-}}"
if [[ ! "$demo_codespace_name" =~ ^[a-z0-9-]+$ ]]; then
  printf '%s\n' 'Pass the Codespace name as the first argument when running over SSH.' >&2
  exit 1
fi

presentation_dir=$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")/.." && pwd)
demo_state_dir="$HOME/.cache/esri-framework-demos"

if [[ ! -d "$presentation_dir/demo/0-vanilla" ]]; then
  printf 'Presentation demos not found at %s\n' "$presentation_dir" >&2
  exit 1
fi

supported_node() {
  command -v node >/dev/null && node -e '
    const [major, minor, patch] = process.versions.node.split(".").map(Number);
    process.exit(major > 22 || (major === 22 && (minor > 22 || (minor === 22 && patch >= 1))) ? 0 : 1);
  '
}

if ! supported_node; then
  if [[ -f "$HOME/.nvm/nvm.sh" ]]; then
    set +u
    source "$HOME/.nvm/nvm.sh"
    nvm install 24
    nvm use 24
    set -u
  else
    printf '%s\n' 'Install Node.js 22.22.1 or later in this Codespace, then rerun.' >&2
    exit 1
  fi
fi

for tool in npm python3 curl setsid; do
  command -v "$tool" >/dev/null || { printf 'Missing tool: %s\n' "$tool" >&2; exit 1; }
done

package_manager=$(node -p 'JSON.parse(require("node:fs").readFileSync(process.argv[1], "utf8")).packageManager' "$presentation_dir/demo/1-javascript/package.json")
if [[ ! "$package_manager" =~ ^pnpm@[0-9]+\.[0-9]+\.[0-9]+$ ]]; then
  printf 'Expected a pinned pnpm version; found %s\n' "$package_manager" >&2
  exit 1
fi
pnpm_command=(npm exec --yes "--package=$package_manager" -- pnpm)

for demo in 1-javascript 2-react 3-typescript 4-typescript-react-encapsulation; do
  printf '\nInstalling %s with %s\n' "$demo" "$package_manager"
  (cd "$presentation_dir/demo/$demo" && "${pnpm_command[@]}" install --frozen-lockfile)
done

mkdir -p "$demo_state_dir"

start_demo() {
  local demo_name="$1" demo_port="$2" demo_directory="$3"
  shift 3
  if curl -fsS --max-time 2 "http://127.0.0.1:$demo_port/" >/dev/null 2>&1; then
    printf '%s is already responding on port %s.\n' "$demo_name" "$demo_port"
    return
  fi
  (
    cd "$demo_directory"
    nohup setsid "$@" >"$demo_state_dir/$demo_port.log" 2>&1 </dev/null &
    printf '%s\n' "$!" >"$demo_state_dir/$demo_port.pid"
  )
  printf 'Starting %s on port %s.\n' "$demo_name" "$demo_port"
}

start_demo 'Starting HTML app' 5180 "$presentation_dir" python3 -m http.server 5180 --bind 0.0.0.0 --directory demo/0-vanilla

demo_names=(1-javascript 2-react 3-typescript 4-typescript-react-encapsulation)
demo_ports=(5181 5182 5183 5184)
for index in "${!demo_names[@]}"; do
  start_demo "${demo_names[$index]}" "${demo_ports[$index]}" "$presentation_dir/demo/${demo_names[$index]}" \
    env "__VITE_ADDITIONAL_SERVER_ALLOWED_HOSTS=$demo_codespace_name-${demo_ports[$index]}.app.github.dev" \
    "${pnpm_command[@]}" run dev --host 0.0.0.0 --port "${demo_ports[$index]}" --strictPort
done

for demo_port in 5180 5181 5182 5183 5184; do
  demo_ready=false
  for attempt in {1..90}; do
    if curl -fsS --max-time 2 "http://127.0.0.1:$demo_port/" >/dev/null 2>&1; then
      demo_ready=true
      break
    fi
    sleep 1
  done
  if [[ "$demo_ready" != true ]]; then
    printf 'Port %s did not become ready. See %s/%s.log\n' "$demo_port" "$demo_state_dir" "$demo_port" >&2
    exit 1
  fi
  printf 'HTTP ready: https://%s-%s.app.github.dev/\n' "$demo_codespace_name" "$demo_port"
done

printf '\nEditor: https://%s.github.dev\n' "$demo_codespace_name"
printf 'Server logs and process IDs: %s\n' "$demo_state_dir"
printf '%s\n' 'Forward ports 5180 through 5184 with Private visibility in Codespaces.'
printf '%s\n' 'Check the trail interactions in Chrome before presenting.'
