@echo off
title S&R CoreSync Solutions - Local Server & Edge
chcp 65001 >nul
cd /d "%~dp0"

echo ======================================================================
echo   S&R CoreSync Solutions - تشغيل السيرفر المحلي والمنفذ في Edge
echo ======================================================================
echo.
echo [1] فحص السيرفر على المنفذ: http://localhost:3000
echo [2] تشغيل Microsoft Edge تلقائياً...
echo.

:: فتح الرابط المحلي في متصفح Microsoft Edge
start msedge http://localhost:3000/index.html

:: تشغيل السيرفر المحلي عبر Python أو PowerShell
where python >nul 2>&1
if %errorlevel% equ 0 (
    echo [✓] تشغيل السيرفر المحلي عبر Python على المنفذ 3000...
    python serve.py
) else (
    echo [✓] تشغيل السيرفر المحلي عبر PowerShell على المنفذ 3000...
    powershell -NoProfile -ExecutionPolicy Bypass -Command "$port = 3000; $listener = New-Object System.Net.HttpListener; $listener.Prefixes.Add('http://localhost:' + $port + '/'); try { $listener.Start(); Write-Host '[✓] يعمل الآن على: http://localhost:'$port -ForegroundColor Green; while ($listener.IsListening) { $ctx = $listener.GetContext(); $p = $ctx.Request.Url.LocalPath.TrimStart('/'); if ([string]::IsNullOrEmpty($p)) { $p = 'index.html' }; $f = Join-Path (Get-Location).Path $p; if (Test-Path $f -PathType Leaf) { $b = [System.IO.File]::ReadAllBytes($f); $ext = [System.IO.Path]::GetExtension($f).ToLower(); $m = switch ($ext) { '.html' {'text/html; charset=utf-8'} '.css' {'text/css'} '.js' {'application/javascript'} '.json' {'application/json'} '.svg' {'image/svg+xml'} default {'application/octet-stream'} }; $ctx.Response.ContentType = $m; $ctx.Response.ContentLength64 = $b.Length; $ctx.Response.OutputStream.Write($b, 0, $b.Length) } else { $ctx.Response.StatusCode = 404 }; $ctx.Response.OutputStream.Close() } } catch { Write-Host 'المنفذ يعمل بالفعل أو مشغول.' }"
)
pause
