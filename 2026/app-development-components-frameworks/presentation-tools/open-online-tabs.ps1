[CmdletBinding()]
param(
    [ValidatePattern('^[a-z0-9-]+$')]
    [string]$CodespaceName,
    [switch]$ListOnly
)

$ErrorActionPreference = 'Stop'

$tabs = @(
    [pscustomobject]@{
        Name = 'Published slides'
        Url = 'https://saschabrunnerch.github.io/esri-presentations/2026/app-development-components-frameworks/#/1'
    }
)

if ($CodespaceName) {
    $tabs += [pscustomobject]@{
        Name = 'Codespaces editor'
        Url = "https://$CodespaceName.github.dev"
    }
    $demos = @(
        @{ Name = 'Starting HTML app'; Port = 5180 }
        @{ Name = 'Vite app'; Port = 5181 }
        @{ Name = 'React app'; Port = 5182 }
        @{ Name = 'TypeScript app'; Port = 5183 }
        @{ Name = 'Encapsulation app'; Port = 5184 }
    )
    foreach ($demo in $demos) {
        $tabs += [pscustomobject]@{
            Name = $demo.Name
            Url = "https://$CodespaceName-$($demo.Port).app.github.dev/"
        }
    }
} else {
    $tabs += [pscustomobject]@{
        Name = 'Open or create a Codespace'
        Url = 'https://github.com/codespaces'
    }
}

$tabs += @(
    [pscustomobject]@{ Name = 'Calcite documentation'; Url = 'https://developers.arcgis.com/calcite-design-system/' }
    [pscustomobject]@{ Name = 'SDK documentation'; Url = 'https://developers.arcgis.com/javascript/latest/' }
    [pscustomobject]@{ Name = 'System requirements'; Url = 'https://developers.arcgis.com/javascript/latest/system-requirements/' }
    [pscustomobject]@{ Name = 'Getting started'; Url = 'https://developers.arcgis.com/javascript/latest/get-started/' }
    [pscustomobject]@{ Name = 'App templates'; Url = 'https://github.com/Esri/jsapi-resources' }
    [pscustomobject]@{ Name = 'Package registry'; Url = 'https://www.npmjs.com/' }
    [pscustomobject]@{ Name = 'SDK assets'; Url = 'https://developers.arcgis.com/javascript/latest/working-with-assets/' }
    [pscustomobject]@{ Name = 'Vite documentation'; Url = 'https://vite.dev/guide/' }
    [pscustomobject]@{ Name = 'React documentation'; Url = 'https://react.dev/learn' }
    [pscustomobject]@{ Name = 'TypeScript documentation'; Url = 'https://www.typescriptlang.org/docs/' }
    [pscustomobject]@{ Name = 'Angular integration'; Url = 'https://developers.arcgis.com/javascript/latest/angular/' }
)

if ($ListOnly) {
    $tabs
    return
}

$chromePaths = @(
    "$env:ProgramFiles\Google\Chrome\Application\chrome.exe"
    "${env:ProgramFiles(x86)}\Google\Chrome\Application\chrome.exe"
    "$env:LOCALAPPDATA\Google\Chrome\Application\chrome.exe"
)
$chrome = $chromePaths | Where-Object { Test-Path -LiteralPath $_ } | Select-Object -First 1
if (-not $chrome) {
    throw 'Google Chrome was not found. Install Chrome on Windows, then run this script again.'
}

$chromeArguments = @('--incognito', '--new-window') + @($tabs | ForEach-Object { $_.Url })
Start-Process -FilePath $chrome -ArgumentList $chromeArguments
Write-Host "Sent $($tabs.Count) online tabs to a new Windows Chrome incognito window."
if (-not $CodespaceName) {
    Write-Warning 'The app tabs need a running Codespace. Start it, then rerun with -CodespaceName and the name from its browser address.'
}
