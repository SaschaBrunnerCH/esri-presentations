[CmdletBinding()]
param(
    [uri]$BaseUrl = 'http://localhost:3032/',
    [switch]$ListOnly
)

$ErrorActionPreference = 'Stop'
if (-not $BaseUrl.IsAbsoluteUri -or $BaseUrl.Scheme -notin @('http', 'https') -or $BaseUrl.Query -or $BaseUrl.Fragment) {
    throw 'Use the deck base URL, starting with http:// or https://, without a query or slide number.'
}
$deckBase = [uri]($BaseUrl.AbsoluteUri.TrimEnd('/') + '/')
$tabs = @(Import-Csv -LiteralPath (Join-Path $PSScriptRoot 'tabs.tsv') -Delimiter "`t" | ForEach-Object {
    [pscustomobject]@{
        Name = $_.Name
        Url = [uri]::new($deckBase, $_.Url).AbsoluteUri
    }
})

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
Write-Host "Sent $($tabs.Count) session tabs to a new Windows Chrome incognito window."
