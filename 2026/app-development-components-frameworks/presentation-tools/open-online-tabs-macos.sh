#!/usr/bin/env bash
set -euo pipefail

usage() {
  printf 'Usage: bash %s [--codespace NAME] [--list]\n' "$0"
}

codespace_name=
list_only=false
while [[ $# -gt 0 ]]; do
  case "$1" in
    --codespace)
      if [[ $# -lt 2 || ! "$2" =~ ^[a-z0-9-]+$ ]]; then
        printf '%s\n' 'Use a Codespace name, not a URL.' >&2
        usage >&2
        exit 1
      fi
      codespace_name="$2"
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

urls=(
  'https://saschabrunnerch.github.io/esri-presentations/2026/app-development-components-frameworks/#/1'
)
if [[ -n "$codespace_name" ]]; then
  urls+=("https://$codespace_name.github.dev")
  for port in 5180 5181 5182 5183 5184; do
    urls+=("https://$codespace_name-$port.app.github.dev/")
  done
else
  urls+=('https://github.com/codespaces')
fi
urls+=(
  'https://developers.arcgis.com/calcite-design-system/'
  'https://developers.arcgis.com/javascript/latest/'
  'https://developers.arcgis.com/javascript/latest/system-requirements/'
  'https://developers.arcgis.com/javascript/latest/get-started/'
  'https://github.com/Esri/jsapi-resources'
  'https://www.npmjs.com/'
  'https://developers.arcgis.com/javascript/latest/working-with-assets/'
  'https://vite.dev/guide/'
  'https://react.dev/learn'
  'https://www.typescriptlang.org/docs/'
  'https://developers.arcgis.com/javascript/latest/angular/'
)

if [[ "$list_only" == true ]]; then
  printf '%s\n' "${urls[@]}"
  exit 0
fi

if [[ "$(uname -s)" != Darwin ]]; then
  printf '%s\n' 'Run this launcher on macOS. For Windows/WSL use open-online-tabs.ps1.' >&2
  exit 1
fi

chrome_app=
for candidate in '/Applications/Google Chrome.app' "$HOME/Applications/Google Chrome.app"; do
  if [[ -d "$candidate" ]]; then
    chrome_app="$candidate"
    break
  fi
done
if [[ -z "$chrome_app" ]]; then
  printf '%s\n' 'Install Google Chrome in /Applications or ~/Applications, then run this script again.' >&2
  exit 1
fi

open -n -a "$chrome_app" --args --incognito --new-window "${urls[@]}"
printf 'Sent %s online tabs to a new Chrome incognito window.\n' "${#urls[@]}"
if [[ -z "$codespace_name" ]]; then
  printf '%s\n' 'Start your Codespace, then rerun with --codespace NAME to open its app tabs.' >&2
fi
