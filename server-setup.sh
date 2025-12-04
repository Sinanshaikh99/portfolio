#!/bin/bash

# Portfolio Server Setup Script
# Run this on your Ubuntu server after connecting via SSH

echo "========================================="
echo "Sinan Shaikh Portfolio - Server Setup"
echo "========================================="
echo ""

# Update system
echo "Step 1: Updating system..."
apt update && apt upgrade -y

# Install NGINX
echo ""
echo "Step 2: Installing NGINX..."
apt install nginx -y

# Install Certbot for SSL
echo ""
echo "Step 3: Installing Certbot (for SSL)..."
apt install certbot python3-certbot-nginx -y

# Create website directory
echo ""
echo "Step 4: Creating website directory..."
mkdir -p /var/www/portfolio
chmod -R 755 /var/www/portfolio

# Configure firewall
echo ""
echo "Step 5: Configuring firewall..."
ufw allow 'Nginx Full'
ufw allow OpenSSH
echo "y" | ufw enable

# Get domain name
echo ""
read -p "Enter your domain name (e.g., sinanshaikh.org): " DOMAIN

# Create NGINX configuration
echo ""
echo "Step 6: Creating NGINX configuration..."
cat > /etc/nginx/sites-available/portfolio << EOF
server {
    listen 80;
    listen [::]:80;
    server_name $DOMAIN www.$DOMAIN;
    
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
        try_files \$uri \$uri.html \$uri/ /index.html;
    }

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
}
EOF

# Enable site
ln -sf /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/
rm -f /etc/nginx/sites-enabled/default

# Test NGINX configuration
echo ""
echo "Step 7: Testing NGINX configuration..."
nginx -t

if [ $? -eq 0 ]; then
    systemctl restart nginx
    echo ""
    echo "========================================="
    echo "Server Setup Complete!"
    echo "========================================="
    echo ""
    echo "Next steps:"
    echo "1. Upload your website files to /var/www/portfolio"
    echo "2. Make sure DNS is pointing to this server"
    echo "3. Run SSL setup:"
    echo "   certbot --nginx -d $DOMAIN -d www.$DOMAIN"
    echo ""
    echo "Your server IP: $(curl -s ifconfig.me)"
    echo ""
else
    echo ""
    echo "ERROR: NGINX configuration test failed!"
    echo "Please check the configuration."
fi
