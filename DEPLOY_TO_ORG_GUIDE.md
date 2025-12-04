# Complete Guide: Deploy to .org Domain

## 🎯 What You Need

### 1. Domain Name (.org)
**Cost:** $10-15/year

**Where to buy:**
- **Namecheap** (Recommended): https://www.namecheap.com
- **GoDaddy**: https://www.godaddy.com
- **Google Domains**: https://domains.google

**Suggested domains:**
- sinanshaikh.org
- sinandev.org
- shaikhsinan.org

### 2. VPS Server
**Cost:** $5-10/month

**Recommended providers:**
- **DigitalOcean** (Easiest): https://www.digitalocean.com
  - $6/month for basic droplet
  - Simple interface
  - Great documentation
  
- **Linode**: https://www.linode.com
  - $5/month
  
- **Vultr**: https://www.vultr.com
  - $5/month

## 📋 Step-by-Step Deployment

### STEP 1: Buy Domain Name

1. Go to Namecheap.com
2. Search for your desired .org domain
3. Add to cart and purchase
4. You'll receive login credentials via email

### STEP 2: Create VPS Server

**Using DigitalOcean (Recommended):**

1. Sign up at https://www.digitalocean.com
2. Click "Create" → "Droplets"
3. Choose:
   - **Image:** Ubuntu 22.04 LTS
   - **Plan:** Basic ($6/month)
   - **CPU:** Regular (1GB RAM)
   - **Datacenter:** Closest to your location
4. Add SSH key or use password
5. Click "Create Droplet"
6. **Note your server IP address** (e.g., 123.45.67.89)

### STEP 3: Point Domain to Server

1. Log in to Namecheap (or your domain registrar)
2. Go to Domain List → Manage
3. Click "Advanced DNS"
4. Add these records:

```
Type    Host    Value               TTL
A       @       YOUR_SERVER_IP      Automatic
A       www     YOUR_SERVER_IP      Automatic
```

Replace `YOUR_SERVER_IP` with your actual server IP.

**DNS propagation takes 1-48 hours** (usually 15 minutes)

### STEP 4: Connect to Your Server

**Windows (using PowerShell):**
```powershell
ssh root@YOUR_SERVER_IP
```

Enter password when prompted.

**Or use PuTTY:**
- Download: https://www.putty.org
- Enter your server IP
- Click "Open"
- Login as: root

### STEP 5: Setup Server (Copy & Paste These Commands)

Once connected to your server, run these commands one by one:

```bash
# Update system
apt update && apt upgrade -y

# Install NGINX
apt install nginx -y

# Install Certbot for SSL
apt install certbot python3-certbot-nginx -y

# Create directory for website
mkdir -p /var/www/portfolio

# Set permissions
chmod -R 755 /var/www/portfolio
```

### STEP 6: Upload Your Website

**From your Windows computer, run:**

```powershell
cd C:\Users\patel\OneDrive\Desktop\portfolio
scp -r out/* root@YOUR_SERVER_IP:/var/www/portfolio/
```

Replace `YOUR_SERVER_IP` with your actual IP.

**Alternative: Use WinSCP (GUI method):**
1. Download WinSCP: https://winscp.net
2. Connect to your server
3. Navigate to `/var/www/portfolio`
4. Upload all files from your `out` folder

### STEP 7: Configure NGINX on Server

On your server, create NGINX config:

```bash
nano /etc/nginx/sites-available/portfolio
```

Paste this configuration (replace `yourdomain.org` with your actual domain):

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name yourdomain.org www.yourdomain.org;
    
    root /var/www/portfolio;
    index index.html;

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml+rss application/json image/svg+xml;

    # Cache static assets
    location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Handle Next.js routing
    location / {
        try_files $uri $uri.html $uri/ /index.html;
    }

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
}
```

**Save and exit:**
- Press `Ctrl + X`
- Press `Y`
- Press `Enter`

**Enable the site:**
```bash
ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/
rm /etc/nginx/sites-enabled/default
nginx -t
systemctl restart nginx
```

### STEP 8: Get Free SSL Certificate (HTTPS)

```bash
certbot --nginx -d yourdomain.org -d www.yourdomain.org
```

Follow the prompts:
- Enter your email
- Agree to terms
- Choose option 2 (Redirect HTTP to HTTPS)

**SSL auto-renews!** Certbot sets up automatic renewal.

### STEP 9: Test Your Website

Open your browser and visit:
- **http://yourdomain.org** (should redirect to HTTPS)
- **https://yourdomain.org** ✅

## 🎉 You're Live!

Your portfolio is now deployed at your .org domain with:
- ✅ Custom domain
- ✅ HTTPS/SSL encryption
- ✅ Fast NGINX server
- ✅ Gzip compression
- ✅ Optimized caching

## 🔄 Updating Your Website

When you make changes:

1. **Rebuild locally:**
   ```bash
   cd portfolio
   npm run build
   ```

2. **Upload to server:**
   ```powershell
   scp -r out/* root@YOUR_SERVER_IP:/var/www/portfolio/
   ```

3. **Clear NGINX cache (on server):**
   ```bash
   systemctl reload nginx
   ```

## 🛠️ Server Management Commands

**Check NGINX status:**
```bash
systemctl status nginx
```

**Restart NGINX:**
```bash
systemctl restart nginx
```

**View error logs:**
```bash
tail -f /var/log/nginx/error.log
```

**View access logs:**
```bash
tail -f /var/log/nginx/access.log
```

## 💰 Cost Breakdown

| Item | Cost | Provider |
|------|------|----------|
| .org Domain | $10-15/year | Namecheap |
| VPS Server | $5-10/month | DigitalOcean |
| SSL Certificate | FREE | Let's Encrypt |
| **Total** | **~$70-135/year** | |

## 🆓 Free Alternatives

If you want to deploy for FREE:

### Option 1: Vercel (Recommended)
```bash
npm install -g vercel
vercel
```
- Free custom domain
- Free SSL
- Global CDN
- Zero configuration

### Option 2: Netlify
1. Go to https://netlify.com
2. Drag & drop your `out` folder
3. Free .netlify.app domain
4. Can add custom domain

### Option 3: GitHub Pages
1. Push to GitHub
2. Enable GitHub Pages
3. Free .github.io domain

## 📞 Need Help?

**Common Issues:**

**Domain not working?**
- Wait 24 hours for DNS propagation
- Check DNS: `nslookup yourdomain.org`

**502 Bad Gateway?**
- Check NGINX: `systemctl status nginx`
- Check logs: `tail -f /var/log/nginx/error.log`

**SSL not working?**
- Run: `certbot renew --dry-run`
- Check firewall: `ufw allow 'Nginx Full'`

## 🚀 Performance Tips

1. **Enable Cloudflare** (Free CDN):
   - Sign up at cloudflare.com
   - Add your domain
   - Change nameservers
   - Free DDoS protection + CDN

2. **Monitor uptime:**
   - UptimeRobot.com (free)
   - Monitors your site 24/7

3. **Backup regularly:**
   ```bash
   tar -czf portfolio-backup.tar.gz /var/www/portfolio
   ```

---

**Built by Sinan Shaikh**
Portfolio: https://yourdomain.org (soon!)
GitHub: https://github.com/Sinanshaikh99
