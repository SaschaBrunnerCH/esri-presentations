# Present online with GitHub Codespaces

Run the slides, editor, and five demo apps in the browser. You need a GitHub
account with Codespaces access, internet access, and Chrome on your computer.
Node.js and pnpm run inside Codespaces.

## Quick start

### 1. Start the apps — inside Codespaces

On GitHub, select **Code → Codespaces** and create or resume your own 2-core
Codespace. Choose the branch containing these helpers. Unpublished local changes
must be [copied first](#share-local-only-changes).

From the repository root in the Codespaces integrated terminal:

```bash
cd 2026/app-development-components-frameworks
bash presentation-tools/start-codespace-demos.sh
```

The helper installs dependencies and starts all five apps. In the **Ports** panel,
add **5180–5184** individually and keep them **Private**.

### 2. Prepare the editor — inside Codespaces

Choose **File → Open Workspace from File** and open
`2026/app-development-components-frameworks/presenter.code-workspace`.
This applies a light theme, 24 px code, and a 22 px terminal.

Open a new integrated terminal in the presentation folder. Check `node --version`;
use Node.js 22.22.1 or later. If needed, run `nvm install 24` and `nvm use 24`.

```bash
cd demo/1-javascript
npm exec --yes --package=pnpm@12.6.0 -- pnpm run build
cd ../..
bash presentation-tools/open-demo-files.sh
```

This opens the files for the whole session. To open only one part, use
`--section foundations` or `--section frameworks` instead. Add `--list` to preview.

### 3. Open the browser tabs — on your computer

Get a local copy of the same branch using **Code → Download ZIP** or:

```sh
git clone https://github.com/SaschaBrunnerCH/esri-presentations.git
cd esri-presentations
# If needed: git switch BRANCH-NAME
```

Run one command below from the local repository root. Replace
`YOUR-CODESPACE-NAME` with the name before `.github.dev` in your editor address.
The launcher opens 18 Chrome incognito tabs: slides, editor, five apps, and
reference pages. Sign in to GitHub in that window to access your private apps.

**Windows PowerShell**

```powershell
powershell.exe -NoProfile -ExecutionPolicy Bypass -File .\2026\app-development-components-frameworks\presentation-tools\open-online-tabs.ps1 -CodespaceName YOUR-CODESPACE-NAME
```

**WSL** — opens Windows Chrome through PowerShell:

```bash
powershell.exe -NoProfile -ExecutionPolicy Bypass -File "$(wslpath -w ./2026/app-development-components-frameworks/presentation-tools/open-online-tabs.ps1)" -CodespaceName YOUR-CODESPACE-NAME
```

**macOS — untested on a real Mac**

```bash
bash 2026/app-development-components-frameworks/presentation-tools/open-online-tabs-macos.sh --codespace YOUR-CODESPACE-NAME
```

The Mac launcher expects Chrome in `/Applications` or `~/Applications` and uses
built-in Bash. It needs no Homebrew, PowerShell, or local Node.js installation.

### 4. Check, present, and stop

Check that every map loads and selecting a trail shows an elevation profile and
popup. Confirm the editor size and theme on the presentation screen.

After rehearsal, **stop** the Codespace from [your dashboard](https://github.com/codespaces).
Closing the browser does not explicitly stop it. Running uses your Codespaces
allowance; stopped instances still use storage. Run the startup helper again
after resuming.

## Reference and troubleshooting

The startup and file helpers run in the **Codespaces integrated terminal**.
The Chrome launchers run **on your computer**. You can also open the addresses
printed by the startup helper manually.

| Port | Demo          | Directory                               |
| ---- | ------------- | --------------------------------------- |
| 5180 | Starting HTML | `demo/0-vanilla`                        |
| 5181 | Vite          | `demo/1-javascript`                     |
| 5182 | React         | `demo/2-react`                          |
| 5183 | TypeScript    | `demo/3-typescript`                     |
| 5184 | Encapsulation | `demo/4-typescript-react-encapsulation` |

| File selection            | Coverage                                             | Tabs                                     |
| ------------------------- | ---------------------------------------------------- | ---------------------------------------- |
| `--section foundations`   | Slides 1–24: HTML, Vite, dependencies, build, assets | 9 after building; 7 without build output |
| `--section frameworks`    | Slides 25–39: React, TypeScript, encapsulation       | 11; no build needed                      |
| `--section all` (default) | Both groups in demonstration order                   | 20 after building                        |

- **App unavailable:** check the Codespace is running, rerun the startup helper,
  and confirm its port is forwarded. Logs are in `~/.cache/esri-framework-demos/`,
  for example `tail -n 40 ~/.cache/esri-framework-demos/5181.log`.
- **Private URL asks for sign-in:** sign in to the account owning this Codespace
  inside incognito. Other people's private app URLs are not shared demo URLs.
- **Old Node.js in a new terminal:** select Node.js 24 there too. The startup
  helper's Node.js selection applies to its own processes.
- **Missing tools:** use the default Codespaces Linux image. The startup helper
  needs npm, Python 3, curl, and setsid; it can upgrade Node.js through nvm.
- **Preview browser tabs:** add `-ListOnly` on Windows/WSL or `--list` on macOS.
  Without a Codespace name, either launcher opens 13 tabs including the dashboard.
- **TypeScript diagnostics:** open `demo/3-typescript/src/App.tsx` and the Problems
  panel. Compare it with `demo/4-typescript-react-encapsulation/src/App.tsx`
  for encapsulation.

| Action             | Windows        | macOS         |
| ------------------ | -------------- | ------------- |
| Chrome full screen | F11            | Ctrl+Cmd+F    |
| VS Code Zen Mode   | Ctrl+K, then Z | Cmd+K, then Z |
| Problems panel     | Ctrl+Shift+M   | Cmd+Shift+M   |

Optional SSH startup requires a local GitHub CLI signed in with Codespaces access.
Pass the name explicitly because SSH may not set `CODESPACE_NAME`:

```bash
gh codespace ssh -c YOUR-CODESPACE-NAME -- 'bash /workspaces/esri-presentations/2026/app-development-components-frameworks/presentation-tools/start-codespace-demos.sh YOUR-CODESPACE-NAME'
```

For apps running on your own computer, see [Local setup](./LOCAL_SETUP.md).

## Share local-only changes

A clone or ZIP download does not include unpublished files on another computer.
To share them without a commit or push, create this archive from the repository
root containing the changes.

**Windows PowerShell**

```powershell
tar -czf "$env:TEMP\presentation-helpers.tar.gz" 2026/app-development-components-frameworks/presentation-tools 2026/app-development-components-frameworks/presenter.code-workspace 2026/app-development-components-frameworks/ONLINE_SETUP.md
```

**WSL or macOS Terminal**

```bash
tar -czf /tmp/presentation-helpers.tar.gz 2026/app-development-components-frameworks/presentation-tools 2026/app-development-components-frameworks/presenter.code-workspace 2026/app-development-components-frameworks/ONLINE_SETUP.md
```

Give the archive to the other person. They can extract it into their local
checkout for the browser launcher. For Codespaces, upload it to the repository
root using Explorer, then extract it in the integrated terminal at that root:

```bash
tar -xzf presentation-helpers.tar.gz
```

Continue with step 1. The archive contains the helpers, workspace settings, and
this guide; it excludes dependencies, build output, and recordings. Creating the
archive does not upload anything. The macOS workflow remains untested on a real Mac.
