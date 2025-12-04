@echo off
echo Restarting NGINX...

cd /d C:\nginx
nginx -s stop

timeout /t 2 /nobreak >nul

start nginx

echo.
echo NGINX restarted successfully!
echo.
echo Your portfolio is available at: http://localhost
echo.
pause
