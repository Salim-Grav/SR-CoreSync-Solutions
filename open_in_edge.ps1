# S&R CoreSync Solutions - PowerShell Launcher for Microsoft Edge
Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host " S&R CoreSync Solutions - تشغيل الموقع والتطبيق في Edge" -ForegroundColor Yellow
Write-Host "==========================================================" -ForegroundColor Cyan

$port = 8080
$url = "http://localhost:$port/index.html"
$fileUrl = "file:///$($PSScriptRoot.Replace('\', '/'))/index.html"

# تحقق من وجود بايثون
if (Get-Command python -ErrorAction SilentlyContinue) {
    Write-Host "[✓] تم العثور على Python، بدء السيرفر المحلي على $url" -ForegroundColor Green
    Start-Process msedge $url
    python -m http.server $port
}
elseif (Get-Command npx -ErrorAction SilentlyContinue) {
    Write-Host "[✓] تم العثور على npx، بدء السيرفر المحلي..." -ForegroundColor Green
    Start-Process msedge "http://localhost:3000/index.html"
    npx -y serve -l 3000
}
else {
    Write-Host "[i] فتح الملف مباشرة في Microsoft Edge..." -ForegroundColor Green
    Start-Process msedge $fileUrl
}
