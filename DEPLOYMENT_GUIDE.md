# ClickSkill Website Deployment Guide

## Overview
This Next.js application can be deployed in multiple ways. Here are your options:

## Option 1: Vercel (Recommended - Easiest)
1. Push your code to GitHub
2. Connect your GitHub repo to Vercel
3. Vercel will automatically build and deploy
4. Custom domain setup available in Vercel dashboard

## Option 2: Traditional Hosting (InMotionHosting.com)

### Requirements
- Node.js 18+ support
- Static file hosting capability

### Steps:
1. **Build the application locally:**
   \`\`\`bash
   npm install
   npm run build
   npm run export  # This creates a static version
   \`\`\`

2. **Upload the `out` folder contents to your hosting:**
   - The `out` folder contains all static files
   - Upload contents to your domain's public_html folder

### Important Notes for Traditional Hosting:
- This creates a static export (no server-side features)
- Contact forms won't work without additional setup
- Some dynamic features may be limited

## Option 3: VPS/Dedicated Server
1. Install Node.js 18+
2. Upload code and run:
   \`\`\`bash
   npm install
   npm run build
   npm start
   \`\`\`
3. Use PM2 for process management
4. Set up reverse proxy with Nginx

## Email Functionality Setup
The consultation form requires email service integration:

### Option A: Resend (Recommended)
1. Sign up at resend.com
2. Add environment variable: `RESEND_API_KEY`
3. Update the consultation action to use Resend

### Option B: SendGrid
1. Sign up at sendgrid.com
2. Add environment variable: `SENDGRID_API_KEY`
3. Update the consultation action

### Option C: SMTP (Traditional hosting)
1. Get SMTP credentials from your hosting provider
2. Use nodemailer with SMTP configuration

## Environment Variables Needed
\`\`\`
RESEND_API_KEY=your_resend_key
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
\`\`\`

## Recommended Deployment: Vercel
For the best experience with all features working:
1. Push to GitHub
2. Deploy on Vercel
3. Add custom domain
4. Set up email service (Resend)

This ensures all dynamic features work perfectly!
