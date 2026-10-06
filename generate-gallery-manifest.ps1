$root = Join-Path $PSScriptRoot 'gambar'
$folders = [ordered]@{
    class10 = Join-Path $root 'kls 10'
    class11 = Join-Path $root 'kls 11'
    class12 = Join-Path $root 'kls 12'
    random = Join-Path $root 'random'
}
$manifest = [ordered]@{}

foreach ($entry in $folders.GetEnumerator()) {
    if (-not (Test-Path -LiteralPath $entry.Value -PathType Container)) {
        throw "Folder not found: $($entry.Value)"
    }

    $manifest[$entry.Key] = @(
        Get-ChildItem -LiteralPath $entry.Value -File -Filter '*.jpeg' |
            Where-Object { $_.BaseName -match '^\d+$' } |
            Sort-Object { [int]$_.BaseName } |
            ForEach-Object { $_.Name }
    )
}

$outputPath = Join-Path $PSScriptRoot 'gallery-manifest.json'
$json = ConvertTo-Json -InputObject $manifest -Depth 3
[System.IO.File]::WriteAllText($outputPath, $json + [Environment]::NewLine, [System.Text.UTF8Encoding]::new($false))
Write-Output "Generated $outputPath"
