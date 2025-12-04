@echo off
echo ========================================
echo NGINX Setup for Sinan Shaikh Portfolio
echo ========================================
echo.

REM Check if NGINX directory exists
if not exist "C:\nginx" (
    echo ERROR: NGINX not found at C:\nginx
    echo.
    echo Please download NGINX from: https://nginx.org/en/download.html
    echo Extract it to C:\nginx
    echo.
    pause
    exit /b 1
)

echo Step 1: Creating portfolio directory...
if not exist "C:\nginx\html\portfolio" mkdir "C:\nginx\html\portfolio"

echo Step 2: Copying built files...
xcopy /E /I /Y "out\*" "C:\nginx\html\portfolio\"

echo Step 3: Backing up original NGINX config...
if exist "C:\nginx\conf\nginx.conf" (
    copy "C:\nginx\conf\nginx.conf" "C:\nginx\conf\nginx.conf.backup"
)

echo Step 4: Copying custom NGINX config...
copy /Y "nginx-windows.conf" "C:\nginx\conf\nginx.conf"

echo.
echo ========================================
echo Setup Complete!
echo ========================================
echo.
echo Next steps:
echo 1. Run: start-nginx.bat
echo 2. Open browser: http://localhost
echo.
pause
