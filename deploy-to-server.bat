@echo off
echo ========================================
echo Deploy Portfolio to Server
echo ========================================
echo.

set /p SERVER_IP="Enter your server IP address: "
set /p USERNAME="Enter username (default: root): "
if "%USERNAME%"=="" set USERNAME=root

echo.
echo Uploading files to %USERNAME%@%SERVER_IP%...
echo.

scp -r out/* %USERNAME%@%SERVER_IP%:/var/www/portfolio/

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ========================================
    echo Upload Complete!
    echo ========================================
    echo.
    echo Your website has been uploaded to the server.
    echo.
    echo Next steps:
    echo 1. SSH into your server
    echo 2. Run: systemctl reload nginx
    echo 3. Visit your domain to see changes
    echo.
) else (
    echo.
    echo ERROR: Upload failed!
    echo.
    echo Make sure:
    echo - You have SSH access to the server
    echo - The server IP is correct
    echo - The /var/www/portfolio directory exists
    echo.
)

pause
