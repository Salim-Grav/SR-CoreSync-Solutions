@echo off
title S&R CoreSync Solutions - Client Executive Presentation Launcher
chcp 65001 >nul
cd /d "%~dp0"

echo ==============================================================================
echo       S&R CORESYNC SOLUTIONS - حزمة العرض التقديمي للزبائن (Offline / Live)
echo ==============================================================================
echo.
echo [1] فحص السيرفر المحلي على المنفذ: http://localhost:3000 ...
echo [2] تجهيز وضع العرض التنفيذي المخصص (Executive App Mode) ...
echo.

:: تشغيل السيرفر في الخلفية إذا لم يكن قيد التشغيل
powershell -NoProfile -Command "$conn = Get-NetTCPConnection -LocalPort 3000 -ErrorAction SilentlyContinue; if (-not $conn) { Start-Process python -ArgumentList 'serve.py' -WindowStyle Hidden; Start-Sleep -Milliseconds 800 }"

:: فتح واجهة العرض التقديمي للديمو في نافذة تطبيق مستقلة وبدون شريط متصفح
echo [✓] تشغيل المنصة السحابية التجريبية بوضع التطبيق المستقل (Standalone Window)...
start msedge --app=http://localhost:3000/demo.html --start-maximized

:: خيار فتح الموقع الرئيسي للزبون أيضاً
echo [✓] تم فتح المنصة التجريبية بنجاح!
echo [i] لعرض الموقع الرئيسي أيضاً، اضغط أي مفتاح لفتحه في نافذة متصفح، أو أغلق هذه النافذة.
pause >nul

start msedge http://localhost:3000/index.html
