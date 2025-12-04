@echo off
echo Stopping NGINX...

cd /d C:\nginx
nginx -s stop

timeout /t 2 /nobreak >nul

echo.
echo NGINX stopped successfully!
echo.
pause
