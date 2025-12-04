@echo off
echo Starting NGINX...

REM Check if NGINX is already running
tasklist /FI "IMAGENAME eq nginx.exe" 2>NUL | find /I /N "nginx.exe">NUL
if "%ERRORLEVEL%"=="0" (
    echo NGINX is already running!
    echo.
    echo To restart, run: stop-nginx.bat first
    echo.
    pause
    exit /b 0
)

REM Start NGINX
cd /d C:\nginx
start nginx

echo.
echo NGINX started successfully!
echo.
echo Your portfolio is now available at:
echo   http://localhost
echo.
echo To stop NGINX, run: stop-nginx.bat
echo.
pause
