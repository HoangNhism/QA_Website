# 🎓 Graduation Congratulations Website

A beautiful, animated static website to celebrate your friend's graduation! Built with HTML, CSS, and JavaScript animations.

## ✨ Features

- **Animated Confetti**: Canvas-based confetti animation that triggers on load and button clicks
- **Twinkling Stars**: Animated background stars for a celebratory feel
- **Message Cards**: Customizable congratulation messages from friends
- **Photo Gallery**: Display graduation photos with 3D flip animations
- **Timeline Section**: Visual timeline of the graduation journey
- **Responsive Design**: Looks great on mobile, tablet, and desktop
- **Modern Glassmorphism UI**: Trendy frosted glass effects with gradients
- **Interactive Elements**: Hover effects, button glows, and smooth transitions

## 🚀 How to Customize

### 1. Edit Messages
Open `index.html` and find the messages section. Replace the example messages with real ones:

```html
<div class="message flip-in">
  <p class="message-text">"Your custom message here!"</p>
  <p class="message-author">— Your Name</p>
</div>
```

### 2. Add Photos
Create an `images/` folder in the project root and add your photos (`.jpg`, `.png`, etc.):
```
QA_Website/
├── images/
│   ├── photo1.jpg
│   ├── photo2.jpg
│   ├── photo3.jpg
│   └── photo4.jpg
├── index.html
├── styles.css
└── README.md
```

The website will automatically display images with placeholder text if files are missing.

### 3. Change the Graduate's Name & Year
Edit the main title in `index.html`:
```html
<h1 class="brand bounce-in">🎓 Congratulations, [Friend's Name]! 🎓</h1>
```

### 4. Customize Colors (Optional)
Edit the CSS variables in `styles.css`:
```css
:root {
  --accent: #6BCB77;        /* Green */
  --accent-2: #4D96FF;      /* Blue */
  --accent-3: #FF6B9D;      /* Pink */
}
```

## 📤 Deploy to GitHub Pages

### Option 1: User/Organization Site (Easiest)
1. Create a new repository named `<your-username>.github.io`
2. Push this code to the `main` branch
3. The site is instantly live at `https://<your-username>.github.io`

### Option 2: Project Site
1. Create a repository with any name (e.g., `graduation-site`)
2. Go to **Settings** → **Pages**
3. Select `main` branch as the source
4. Click **Save**
5. Site will be live at `https://<your-username>.github.io/graduation-site`

### Quick Setup Commands (PowerShell)
```powershell
# Initialize git repo (if not already done)
git init

# Add and commit all files
git add .
git commit -m "Add graduation celebration website"

# Set main branch
git branch -M main

# Add remote (replace with your repo URL)
git remote add origin https://github.com/<your-username>/<repo-name>.git

# Push to GitHub
git push -u origin main
```

## 🎬 Animation Details

- **Confetti**: Launches automatically on page load and when clicking buttons
- **Stars**: Gentle twinkling effect across the background
- **Messages**: Flip-in animation with staggered timing
- **Photos**: 3D pop animation with rotation and hover zoom
- **Timeline**: Slide-in animations with gradient line
- **Buttons**: Glow pulse effect on primary CTA button

## 🛠 Technologies

- **HTML5**: Semantic markup
- **CSS3**: Grid, Flexbox, Gradients, Animations, Backdrop-filter
- **JavaScript**: Canvas API for confetti, DOM manipulation

## 📱 Browser Support

- Chrome/Edge 88+
- Firefox 87+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 💡 Tips

- Keep image file sizes under 500KB for fast loading
- Use JPG for photos, PNG for graphics
- Test on mobile before sharing the final link
- Share the link via email, social media, or QR code

## 🎊 Make It Your Own

- Change the background gradient in `styles.css`
- Add more messages or timeline items in `index.html`
- Include a form or GitHub Issues for comment functionality
- Add music with an `<audio>` tag
- Customize button colors and text

## 📝 License

Feel free to use and modify this for your celebrations!

---

**Made with ❤️ to celebrate achievements! Share the joy!** 🎉
