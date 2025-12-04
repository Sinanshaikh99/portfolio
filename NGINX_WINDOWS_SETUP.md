# NGINX Windows Setup Guide

## Step 1: Download NGINX for Windows

1. Go to: https://nginx.org/en/download.html
2. Download the **Stable version** for Windows (e.g., nginx/Windows-1.24.0)
3. Extract the ZIP file to `C:\nginx`

## Step 2: Configure NGINX

The configuration file is already created at `nginx-windows.conf` in this project.

## Step 3: Copy Your Built Site

Run the provided batch script:
```
setup-nginx.bat
```

Or manually:
1. Copy the `out` folder contents to `C:\nginx\html\portfolio`

## Step 4: Start NGINX

Run:
```
start-nginx.bat
```

Or manually:
```
cd C:\nginx
start nginx
```

## Step 5: Access Your Site

Open your browser and go to:
- **http://localhost**
- **http://localhost:8080** (if port 80 is in use)

## Managing NGINX

**Stop NGINX:**
```
stop-nginx.bat
```
Or: `cd C:\nginx && nginx -s stop`

**Reload Configuration:**
```
cd C:\nginx && nginx -s reload
```

**Check if NGINX is running:**
```
tasklist /fi "imagename eq nginx.exe"
```

## Troubleshooting

**Port 80 already in use:**
- Edit `nginx-windows.conf` and change `listen 80;` to `listen 8080;`
- Access via `http://localhost:8080`

**NGINX won't start:**
- Check if port is available
- Run Command Prompt as Administrator
- Check logs: `C:\nginx\logs\error.log`

## For .org Domain Deployment

To deploy with a real .org domain:

1. **Purchase a domain** from registrars like Namecheap, GoDaddy, etc.

2. **Get a VPS/Server** (DigitalOcean, AWS, Linode, etc.)

3. **Point domain to server:**
   - Add A record: `@` → Your server IP
   - Add A record: `www` → Your server IP

4. **Upload files to server:**
   ```bash
   scp -r out/* user@your-server:/var/www/portfolio/
   ```

5. **Install NGINX on Linux server:**
   ```bash
   sudo apt update
   sudo apt install nginx
   ```

6. **Configure NGINX** (use the provided `nginx.conf`)

7. **Get SSL certificate:**
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d yourdomain.org -d www.yourdomain.org
   ```

## Local Testing with Custom Domain

Edit `C:\Windows\System32\drivers\etc\hosts` (as Administrator):
```
127.0.0.1 sinan-shaikh.local
```

Then access: `http://sinan-shaikh.local`
