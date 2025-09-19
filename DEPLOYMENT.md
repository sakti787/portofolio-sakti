# Deployment Guide - Portfolio Website

## 🚀 Deploying to Vercel (Recommended)

### Prerequisites
- GitHub account
- Vercel account (linked to GitHub)

### Steps

1. **Push to GitHub Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Portfolio website"
   git branch -M main
   git remote add origin https://github.com/[username]/portofolio-sakti.git
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Configure project settings:
     - Framework Preset: **Next.js**
     - Root Directory: `./`
     - Build Command: `npm run build`
     - Output Directory: `.next`

3. **Environment Variables (if needed)**
   - No environment variables required for this static portfolio

4. **Custom Domain (Optional)**
   - In Vercel dashboard, go to project settings
   - Add your custom domain
   - Update DNS records as instructed

### Build Commands
```bash
# Development
npm run dev

# Production build
npm run build
npm start

# Static export (if needed)
npm run build
```

## 🔧 Manual Deployment

### Static Hosting (Netlify, GitHub Pages, etc.)

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Export static files**
   Add to `next.config.ts`:
   ```typescript
   /** @type {import('next').NextConfig} */
   const nextConfig = {
     output: 'export',
     trailingSlash: true,
     images: {
       unoptimized: true
     }
   }
   
   export default nextConfig
   ```

3. **Build and export**
   ```bash
   npm run build
   ```

4. **Upload the `out` folder** to your hosting provider

## 📊 Post-Deployment Checklist

### SEO & Performance
- [ ] Test website on Google PageSpeed Insights
- [ ] Submit sitemap to Google Search Console
- [ ] Verify meta tags using Facebook Debugger
- [ ] Test Twitter Card using Twitter Card Validator

### Functionality Testing
- [ ] Navigation smooth scrolling works
- [ ] All social media links functional
- [ ] Contact email link works
- [ ] Mobile responsiveness verified
- [ ] Cross-browser compatibility checked

### Analytics Setup (Optional)
- [ ] Add Google Analytics
- [ ] Set up Google Search Console
- [ ] Configure performance monitoring

## 🔗 Important URLs After Deployment

Replace `your-domain.com` with your actual domain:

- **Website**: https://your-domain.com
- **Sitemap**: https://your-domain.com/sitemap.xml
- **Robots.txt**: https://your-domain.com/robots.txt
- **Manifest**: https://your-domain.com/manifest.json

## 🛠️ Maintenance

### Content Updates
- Edit `src/config/index.ts` for all content changes
- Commit and push changes for automatic deployment

### Adding New Projects
```typescript
// In src/config/index.ts
{
  id: "new-project",
  title: "Project Name",
  description: "Project description...",
  image: "/projects/project-image.png",
  technologies: ["Tech1", "Tech2"],
  liveUrl: "https://project-live-url.com",
  sourceUrl: "https://github.com/username/project-repo",
  featured: true // or false
}
```

### Performance Monitoring
- Monitor Vercel Analytics
- Check Google PageSpeed regularly
- Update dependencies monthly

## 🎯 Success Metrics

Track these metrics post-deployment:
- **Lighthouse Score**: Target 90+ for Performance, Accessibility, SEO
- **Page Load Time**: Target under 3 seconds
- **Mobile Usability**: 100% mobile-friendly
- **SEO Rankings**: Monitor keyword rankings

---

**Ready to deploy!** 🚀

Your portfolio website is optimized and ready for production deployment.