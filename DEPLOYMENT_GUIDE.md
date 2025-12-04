# Deployment Guide

## Vercel Deployment (Recommended)

### Method 1: GitHub Integration

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Vercel will auto-detect Next.js and deploy

### Method 2: Vercel CLI

```bash
npm install -g vercel
vercel login
vercel
```

## NGINX Deployment

### Step 1: Build Static Export

```bash
npm install
npm run export
```

This creates an `out/` directory with static files.

### Step 2: Upload to Server

```bash
scp -r out/* user@your-server:/var/www/portfolio/out/
```

### Step 3: Configure NGINX

Copy the provided `nginx.conf` to your NGINX configuration:

```bash
sudo cp nginx.conf /etc/nginx/sites-available/portfolio
sudo ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/
```

Edit the configuration:
```bash
sudo nano /etc/nginx/sites-available/portfolio
```

Update `server_name` with your domain.

### Step 4: Test and Restart NGINX

```bash
sudo nginx -t
sudo systemctl restart nginx
```

### Step 5: SSL Certificate (Optional but Recommended)

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

## Environment Variables

If you add EmailJS or other services, create `.env.local`:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_USER_ID=your_user_id
```

## Performance Optimization

### Vercel
- Automatic CDN
- Edge caching
- Image optimization
- Zero configuration

### NGINX
- Gzip compression (included in nginx.conf)
- Static asset caching (included in nginx.conf)
- Consider using Cloudflare for CDN

## Troubleshooting

### Vercel Issues

**Build fails:**
- Check `next.config.js` configuration
- Ensure all dependencies are in `package.json`
- Check build logs in Vercel dashboard

**404 on routes:**
- Verify `output: 'export'` in `next.config.js`
- Check `vercel.json` rewrites

### NGINX Issues

**404 errors:**
- Verify `try_files` directive in nginx.conf
- Check file permissions: `chmod -R 755 /var/www/portfolio/out`

**Styles not loading:**
- Check asset paths in browser console
- Verify NGINX is serving static files correctly

**NGINX won't start:**
- Test configuration: `sudo nginx -t`
- Check error logs: `sudo tail -f /var/log/nginx/error.log`

## Monitoring

### Vercel
- Built-in analytics dashboard
- Real-time logs
- Performance insights

### NGINX
- Access logs: `/var/log/nginx/access.log`
- Error logs: `/var/log/nginx/error.log`
- Consider using monitoring tools like Grafana or New Relic

## Updates

### Vercel
Push to GitHub - automatic deployment

### NGINX
```bash
npm run export
scp -r out/* user@your-server:/var/www/portfolio/out/
```

## Domain Configuration

1. **Add DNS records:**
   - A record: `@` → Your server IP
   - A record: `www` → Your server IP

2. **Wait for DNS propagation** (up to 48 hours)

3. **Verify:**
   ```bash
   dig yourdomain.com
   ```

## Security Checklist

- ✅ HTTPS enabled (SSL certificate)
- ✅ Security headers configured (in nginx.conf)
- ✅ Regular updates
- ✅ Firewall configured
- ✅ No sensitive data in client-side code

## Support

For issues or questions:
- Check Next.js documentation: [nextjs.org/docs](https://nextjs.org/docs)
- Vercel support: [vercel.com/support](https://vercel.com/support)
- NGINX documentation: [nginx.org/en/docs](https://nginx.org/en/docs/)
