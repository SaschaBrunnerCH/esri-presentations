#!/usr/bin/env bash
set -euo pipefail

usage() {
  printf 'Usage: bash %s [--base-url DECK_URL] [--list]\n' "$0"
}

deck_base='http://localhost:3032/'
list_only=false
while [[ $# -gt 0 ]]; do
  case "$1" in
    --base-url)
      if [[ $# -lt 2 ]]; then usage >&2; exit 1; fi
      deck_base="$2"
      shift 2
      ;;
    --list) list_only=true; shift ;;
    --help|-h) usage; exit 0 ;;
    *) usage >&2; exit 1 ;;
  esac
done
if [[ ! "$deck_base" =~ ^https?://[^[:space:]\?\#]+$ ]]; then
  printf '%s\n' 'Use the deck base URL, starting with http:// or https://, without a query or slide number.' >&2
  exit 1
fi
deck_base="${deck_base%/}/"
script_dir="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
urls=()
names=()
while IFS=$'\t' read -r name url; do
  [[ "$name" == Name ]] && continue
  case "$url" in
    http://*|https://*) ;;
    ./) url="$deck_base" ;;
    *) url="${deck_base}${url}" ;;
  esac
  names+=("$name")
  urls+=("$url")
done < "$script_dir/tabs.tsv"

if [[ "$list_only" == true ]]; then
  for ((i=0; i<${#urls[@]}; i++)); do
    printf '%s\t%s\n' "${names[$i]}" "${urls[$i]}"
  done
  exit 0
fi
if [[ "$(uname -s)" != Darwin ]]; then
  printf '%s\n' 'Run this launcher on macOS. For Windows/WSL use open-presentation-tabs.ps1.' >&2
  exit 1
fi
chrome_app=
for candidate in '/Applications/Google Chrome.app' "$HOME/Applications/Google Chrome.app"; do
  if [[ -d "$candidate" ]]; then chrome_app="$candidate"; break; fi
done
if [[ -z "$chrome_app" ]]; then
  printf '%s\n' 'Install Google Chrome in /Applications or ~/Applications, then run this script again.' >&2
  exit 1
fi
open -n -a "$chrome_app" --args --incognito --new-window "${urls[@]}"
printf 'Sent %s session tabs to a new Chrome incognito window.\n' "${#urls[@]}"
