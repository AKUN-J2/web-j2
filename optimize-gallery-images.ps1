param(
    [ValidateRange(320, 2400)]
    [int]$MaxDimension = 900,
    [ValidateRange(40, 95)]
    [int]$Quality = 78
)

$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.Drawing

$galleryRoot = Join-Path $PSScriptRoot 'gambar'
$optimizedRoot = Join-Path $galleryRoot 'optimized'
$galleryFolders = @('kls 10', 'kls 11', 'kls 12', 'random')
$jpegEncoder = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() |
    Where-Object { $_.MimeType -eq 'image/jpeg' } |
    Select-Object -First 1
$encoderParameters = New-Object System.Drawing.Imaging.EncoderParameters(1)
$encoderParameters.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter(
    [System.Drawing.Imaging.Encoder]::Quality,
    [long]$Quality
)
$totalSourceBytes = 0L
$totalOutputBytes = 0L
$totalImages = 0

foreach ($folder in $galleryFolders) {
    $sourceFolder = Join-Path $galleryRoot $folder
    $outputFolder = Join-Path $optimizedRoot $folder

    if (-not (Test-Path -LiteralPath $sourceFolder -PathType Container)) {
        continue
    }

    New-Item -ItemType Directory -Path $outputFolder -Force | Out-Null

    foreach ($sourceFile in Get-ChildItem -LiteralPath $sourceFolder -File -Filter '*.jpeg' |
        Where-Object { $_.BaseName -match '^\d+$' }) {
        $image = [System.Drawing.Image]::FromFile($sourceFile.FullName)
        $bitmap = $null
        $graphics = $null

        try {
            if ($image.PropertyIdList -contains 0x0112) {
                $orientation = [int]$image.GetPropertyItem(0x0112).Value[0]
                $rotateFlip = switch ($orientation) {
                    2 { [System.Drawing.RotateFlipType]::RotateNoneFlipX }
                    3 { [System.Drawing.RotateFlipType]::Rotate180FlipNone }
                    4 { [System.Drawing.RotateFlipType]::Rotate180FlipX }
                    5 { [System.Drawing.RotateFlipType]::Rotate90FlipX }
                    6 { [System.Drawing.RotateFlipType]::Rotate90FlipNone }
                    7 { [System.Drawing.RotateFlipType]::Rotate270FlipX }
                    8 { [System.Drawing.RotateFlipType]::Rotate270FlipNone }
                    default { [System.Drawing.RotateFlipType]::RotateNoneFlipNone }
                }
                $image.RotateFlip($rotateFlip)
            }

            $scale = [Math]::Min(1.0, [Math]::Min(
                $MaxDimension / [double]$image.Width,
                $MaxDimension / [double]$image.Height
            ))
            $width = [Math]::Max(1, [int][Math]::Round($image.Width * $scale))
            $height = [Math]::Max(1, [int][Math]::Round($image.Height * $scale))
            $bitmap = New-Object System.Drawing.Bitmap(
                $width,
                $height,
                [System.Drawing.Imaging.PixelFormat]::Format24bppRgb
            )
            $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
            $graphics.Clear([System.Drawing.Color]::White)
            $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
            $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
            $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
            $graphics.DrawImage($image, 0, 0, $width, $height)

            $outputPath = Join-Path $outputFolder $sourceFile.Name
            $bitmap.Save($outputPath, $jpegEncoder, $encoderParameters)
            $totalSourceBytes += $sourceFile.Length
            $totalOutputBytes += (Get-Item -LiteralPath $outputPath).Length
            $totalImages++
        }
        finally {
            if ($graphics) { $graphics.Dispose() }
            if ($bitmap) { $bitmap.Dispose() }
            $image.Dispose()
        }
    }
}

$savedPercent = if ($totalSourceBytes -gt 0) {
    [Math]::Round((1 - ($totalOutputBytes / [double]$totalSourceBytes)) * 100, 1)
} else {
    0
}

Write-Output "Optimized $totalImages gallery images at ${MaxDimension}px, JPEG quality $Quality."
Write-Output "Source: $([Math]::Round($totalSourceBytes / 1MB, 2)) MB; thumbnails: $([Math]::Round($totalOutputBytes / 1MB, 2)) MB; reduction: $savedPercent%."