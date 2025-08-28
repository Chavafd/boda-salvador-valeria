# Boda Salvador & Valeria - Wedding Website

Beautiful and elegant wedding website for Salvador & Valeria's special day.

## 🚀 Deployment to GitHub Pages

Follow these steps to deploy to your **personal** GitHub account:

### Step 1: Create a New Repository
1. Go to [github.com](https://github.com) and sign in with your **personal** account
2. Click "New repository" 
3. Name it `boda-salvador-valeria` (or any name you prefer)
4. Make it **Public** (required for GitHub Pages)
5. **DO NOT** initialize with README, .gitignore, or license

### Step 2: Update Configuration
Edit `next.config.js` and replace the repository name if different:
```javascript
// Line 12-13: Update with your repository name
basePath: process.env.NODE_ENV === 'production' ? '/your-repo-name' : '',
assetPrefix: process.env.NODE_ENV === 'production' ? '/your-repo-name' : '',
```

### Step 3: Initialize Git and Push
Run these commands in your project directory:

```bash
# Initialize git (if not already)
git init

# Add your personal GitHub repository as origin
git remote add origin https://github.com/YOUR-USERNAME/boda-salvador-valeria.git

# Add all files
git add .

# Commit
git commit -m "Initial commit - Wedding website"

# Push to main branch
git push -u origin main
```

### Step 4: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click on **Settings** tab
3. Scroll down to **Pages** section
4. Under **Build and deployment**:
   - Source: **GitHub Actions**

### Step 5: Wait for Deployment
1. Go to the **Actions** tab in your repository
2. You'll see the workflow running
3. Once complete (green checkmark), your site will be live at:
   ```
   https://YOUR-USERNAME.github.io/boda-salvador-valeria/
   ```

## 🔧 Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## 📝 Important Links to Update

Before deploying, make sure to update these placeholder links in `components/EventButtons.tsx`:

- **Line 62**: Google Photos album link (currently set to your link)
- **Line 85**: WhatsApp group invite link (currently set to your link)

## 🎨 Features

- Elegant countdown timer
- Interactive timeline
- Photo gallery
- RSVP form (Tally integration)
- Gift registry links
- Calendar download (.ics file)
- Mobile responsive design
- Beautiful animations

## 📱 Contact Information

Update your contact details in `components/Footer.tsx`:
- Phone: (984) 104-6650
- Email: chavafd@outlook.com
- Instagram: @chavafdz_r

## 🔐 Security Notes

- Never commit sensitive information
- The `.gitignore` file is configured to exclude sensitive files
- Keep your personal and work GitHub accounts separate

## 📅 Event Details

- **Date**: January 4, 2026
- **Time**: 5:00 PM - 11:00 PM
- **Location**: Quinta los Agapantos

---

Made with ❤️ for Salvador & Valeria's special day
