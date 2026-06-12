# Renders scripts/og-card.html to public/og-image.png at exactly 1200x630.
#
# Why the render-into-a-bigger-window-then-crop dance:
# headless Chrome's content viewport comes out a bit smaller than the
# requested --window-size (a phantom scrollbar/chrome gutter), so a card
# sized to 100vw/100vh never quite reaches the canvas edge and you get a
# white/flat strip on the right and bottom. Instead the card is a fixed
# 1200x630px box pinned top-left, rendered inside a roomier 1400x800
# window (magenta fills the slack), then cropped to the exact 1200x630
# box — guaranteeing the gradient bleeds cleanly to every edge.
#
# Usage:  powershell -ExecutionPolicy Bypass -File scripts/render-og-card.ps1

$ErrorActionPreference = "Stop"
$root   = Split-Path $PSScriptRoot -Parent
$html   = Join-Path $root "scripts/og-card.html"
$raw    = Join-Path $root "public/og-raw.png"
$out    = Join-Path $root "public/og-image.png"
$chrome = "C:\Program Files\Google\Chrome\Application\chrome.exe"

& $chrome --headless=new --disable-gpu --no-sandbox --hide-scrollbars `
  --force-device-scale-factor=1 --window-size=1400,800 `
  --default-background-color=ff00ffff --virtual-time-budget=3000 `
  --screenshot="$raw" "file:///$($html -replace '\\','/')" | Out-Null

Add-Type -AssemblyName System.Drawing
$src  = [System.Drawing.Image]::FromFile($raw)
$crop = New-Object System.Drawing.Bitmap 1200, 630
$g    = [System.Drawing.Graphics]::FromImage($crop)
$rect = New-Object System.Drawing.Rectangle 0, 0, 1200, 630
$g.DrawImage($src, $rect, $rect, [System.Drawing.GraphicsUnit]::Pixel)
$g.Dispose()
$crop.Save($out, [System.Drawing.Imaging.ImageFormat]::Png)
$crop.Dispose(); $src.Dispose()
Remove-Item $raw -Force
Write-Host "Wrote $out (1200x630)"
