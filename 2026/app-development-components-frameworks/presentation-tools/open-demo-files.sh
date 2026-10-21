#!/usr/bin/env bash
set -euo pipefail

usage() {
  printf 'Usage: bash %s [--section all|foundations|frameworks] [--list]\n' "$0"
}

section=all
list_only=false
while [[ $# -gt 0 ]]; do
  case "$1" in
    --section)
      if [[ $# -lt 2 ]]; then
        usage >&2
        exit 1
      fi
      section="$2"
      shift 2
      ;;
    --list)
      list_only=true
      shift
      ;;
    --help|-h)
      usage
      exit 0
      ;;
    *)
      usage >&2
      exit 1
      ;;
  esac
done
case "$section" in
  all|foundations|frameworks) ;;
  *) usage >&2; exit 1 ;;
esac

presentation_dir=$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")/.." && pwd)
demo_dir="$presentation_dir/demo"
files=()

if [[ "$section" != frameworks ]]; then
  # Foundations, Vite, dependencies, build output, and assets (slides 1–24).
  files+=(
    "$demo_dir/0-vanilla/index.html"
    "$demo_dir/0-vanilla/main.js"
    "$demo_dir/1-javascript/README.md"
    "$demo_dir/1-javascript/package.json"
    "$demo_dir/1-javascript/index.html"
    "$demo_dir/1-javascript/src/main.js"
    "$demo_dir/1-javascript/pnpm-lock.yaml"
  )
  if [[ -f "$demo_dir/1-javascript/dist/index.html" ]]; then
    files+=("$demo_dir/1-javascript/dist/index.html")
    shopt -s nullglob
    chunks=("$demo_dir/1-javascript/dist/assets/FeatureLayer-"*.js)
    if [[ ${#chunks[@]} -gt 0 ]]; then
      files+=("${chunks[0]}")
    else
      printf '%s\n' 'No FeatureLayer build chunk found; opening the other files.' >&2
    fi
  else
    printf '%s\n' 'Build demo/1-javascript first to also open the generated HTML and JavaScript.' >&2
  fi
fi

if [[ "$section" != foundations ]]; then
  # React, TypeScript diagnostics, and component encapsulation (slides 25–39).
  files+=(
    "$demo_dir/2-react/README.md"
    "$demo_dir/2-react/package.json"
    "$demo_dir/2-react/vite.config.js"
    "$demo_dir/2-react/index.html"
    "$demo_dir/2-react/src/main.jsx"
    "$demo_dir/2-react/src/App.jsx"
    "$demo_dir/3-typescript/README.md"
    "$demo_dir/3-typescript/package.json"
    "$demo_dir/3-typescript/tsconfig.json"
    "$demo_dir/3-typescript/src/vite-env.d.ts"
    "$demo_dir/3-typescript/src/main.tsx"
    "$demo_dir/3-typescript/src/App.tsx"
    "$demo_dir/4-typescript-react-encapsulation/README.md"
    "$demo_dir/4-typescript-react-encapsulation/src/App.tsx"
    "$demo_dir/4-typescript-react-encapsulation/src/ElevationProfilePanel.tsx"
  )
fi

for file in "${files[@]}"; do
  if [[ ! -f "$file" ]]; then
    printf 'Required demo file not found: %s\n' "$file" >&2
    exit 1
  fi
done

if [[ "$list_only" == true ]]; then
  printf '%s\n' "${files[@]}"
  exit 0
fi

if ! command -v code >/dev/null; then
  printf '%s\n' 'Run this helper in the VS Code or Codespaces integrated terminal, where code is available.' >&2
  exit 1
fi

code --reuse-window "${files[@]}"
if [[ "$section" == frameworks ]]; then
  code --reuse-window --goto "$demo_dir/2-react/src/App.jsx:1"
  printf 'Opened %s demo files. The React component is selected.\n' "${#files[@]}"
else
  code --reuse-window --goto "$demo_dir/0-vanilla/index.html:8"
  printf 'Opened %s demo files. The baseline HTML is selected.\n' "${#files[@]}"
fi
