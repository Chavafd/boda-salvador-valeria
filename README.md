# 💍 Wedding Website - Full-Stack Web Application

> **Live Demo**: [https://chavafd.github.io/boda-salvador-valeria/](https://chavafd.github.io/boda-salvador-valeria/)

A modern, elegant, and fully-featured wedding website built with cutting-edge web technologies. This project demonstrates advanced front-end development skills, responsive design, animation techniques, and deployment automation.

![Next.js](https://img.shields.io/badge/Next.js-14.0-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![React](https://img.shields.io/badge/React-18.0-61DAFB?style=for-the-badge&logo=react)
![TailwindCSS](https://img.shields.io/badge/Tailwind-3.0-38B2AC?style=for-the-badge&logo=tailwind-css)

---

## 🚀 Technical Stack

### **Core Technologies**
- **Next.js 14** - React framework with App Router, Server Components, and Static Site Generation (SSG)
- **TypeScript** - Type-safe development with strict type checking
- **React 18** - Modern React with hooks, context, and functional components
- **Node.js** - JavaScript runtime environment

### **Styling & UI**
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **Framer Motion** - Advanced animation library for smooth, performant animations
- **React Icons** - Comprehensive icon library (Font Awesome, Material Design)
- **Custom CSS** - Hand-crafted animations and magnetic hover effects

### **Advanced Features**
- **QR Code Generation** - Dynamic QR code creation for personalized guest invitations
- **Particles.js** - Interactive particle background animations
- **Date-fns** - Modern date manipulation and formatting
- **iCalendar (.ics)** - Programmatic calendar event generation

### **Development Tools**
- **ESLint** - Code quality and consistency enforcement
- **PostCSS** - CSS processing and optimization
- **Autoprefixer** - Automatic vendor prefix handling
- **Git** - Version control and collaboration

### **Deployment & CI/CD**
- **GitHub Pages** - Static site hosting
- **GitHub Actions** - Automated build and deployment pipeline
- **Static Export** - Optimized production builds

---

## 💡 Key Programming Skills Demonstrated

### **1. Modern React Development**
- ✅ Functional components with React Hooks (`useState`, `useEffect`, `useCallback`)
- ✅ Client-side and server-side rendering strategies
- ✅ Component composition and reusability
- ✅ State management and data flow
- ✅ Event handling and user interactions

### **2. TypeScript Proficiency**
- ✅ Strong typing for components, props, and functions
- ✅ Interface definitions and type safety
- ✅ Generic types and utility types
- ✅ Type inference and type guards

### **3. Advanced CSS & Animations**
- ✅ Responsive design (mobile-first approach)
- ✅ CSS Grid and Flexbox layouts
- ✅ Custom animations and transitions
- ✅ Framer Motion declarative animations
- ✅ Magnetic hover effects
- ✅ Particle system integration

### **4. API Integration**
- ✅ Third-party form integration (Tally)
- ✅ External link handling (Google Photos, WhatsApp)
- ✅ Calendar event generation (iCalendar format)

### **5. Performance Optimization**
- ✅ Static site generation for optimal load times
- ✅ Image optimization and lazy loading
- ✅ Code splitting and bundle optimization
- ✅ Asset prefix configuration for CDN-ready deployment

### **6. DevOps & Deployment**
- ✅ GitHub Actions workflow configuration
- ✅ Automated CI/CD pipeline
- ✅ Environment-specific configurations
- ✅ Production build optimization

### **7. User Experience (UX)**
- ✅ Countdown timer with real-time updates
- ✅ Interactive timeline component
- ✅ Photo gallery with smooth transitions
- ✅ Mobile-responsive navigation
- ✅ Accessibility considerations
- ✅ Loading states and animations

### **8. Data Management**
- ✅ Guest data structure and management
- ✅ Base64 encoding for personalized invites
- ✅ Local storage for RSVP tracking
- ✅ CSV export functionality

---

## 🎨 Features & Functionality

### **Core Features**
- 🎯 **Personalized Guest Invitations** - Unique URLs with encoded guest data
- ⏱️ **Live Countdown Timer** - Real-time countdown to the wedding date
- 📅 **Calendar Integration** - Download .ics file for all calendar apps
- 📸 **Photo Gallery** - Elegant image showcase with animations
- 💌 **RSVP System** - Integrated with Tally forms
- 🎁 **Gift Registry** - Links to Amazon and Liverpool registries
- 📱 **WhatsApp Integration** - Direct link to event group
- 🔗 **Social Sharing** - Google Photos album integration

### **Advanced Features**
- 🎨 **Particle Background** - Interactive animated particles
- 🧲 **Magnetic Hover Effects** - Smooth cursor-following animations
- 📊 **Admin Dashboard** - Guest management and tracking (`/admin` route)
- 🎫 **QR Code Generation** - Unique QR codes for each guest
- 📱 **Apple Wallet Integration** - Save event to Apple Wallet
- 🌐 **Multi-page Navigation** - Smooth scrolling and section anchors
- ⚡ **Loading Screen** - Elegant initial loading animation

---

## 📂 Project Structure

```
boda-salvador-valeria/
├── app/                      # Next.js App Router
│   ├── admin/               # Admin dashboard page
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Home page
├── components/              # React components
│   ├── AppleWalletButton.tsx
│   ├── EventButtons.tsx
│   ├── Footer.tsx
│   ├── Gallery.tsx
│   ├── GiftRegistry.tsx
│   ├── Hero.tsx
│   ├── LoadingScreen.tsx
│   ├── OurStory.tsx
│   ├── ParticlesBackground.tsx
│   ├── PersonalizedWelcome.tsx
│   ├── RSVP.tsx
│   ├── ScrollIndicator.tsx
│   ├── Timeline.tsx
│   └── Venue.tsx
├── lib/                     # Utility functions and data
│   └── guest-data.ts        # Guest list and data structure
├── public/                  # Static assets
├── .github/workflows/       # CI/CD configuration
├── next.config.js           # Next.js configuration
├── tailwind.config.js       # Tailwind CSS configuration
└── tsconfig.json            # TypeScript configuration
```

---

## 🛠️ Installation & Setup

### **Prerequisites**
- Node.js 18+ installed
- npm or yarn package manager
- Git

### **Local Development**

```bash
# Clone the repository
git clone https://github.com/chavafd/boda-salvador-valeria.git

# Navigate to project directory
cd boda-salvador-valeria

# Install dependencies
npm install

# Run development server
npm run dev

# Open browser at http://localhost:3000
```

### **Build for Production**

```bash
# Create optimized production build
npm run build

# Test production build locally
npm start
```

---

## 🚀 Deployment

This project uses **GitHub Actions** for automated deployment to **GitHub Pages**.

### **Automatic Deployment**
Every push to the `main` branch triggers:
1. Dependency installation
2. TypeScript compilation
3. Production build generation
4. Static export creation
5. Deployment to GitHub Pages

### **Manual Deployment**
```bash
# Build and export static site
npm run build

# Deploy to GitHub Pages (handled by GitHub Actions)
```

---

## 🎓 Learning Outcomes

This project demonstrates proficiency in:
- ✅ Modern JavaScript/TypeScript ecosystem
- ✅ React and Next.js best practices
- ✅ Responsive web design principles
- ✅ Animation and interaction design
- ✅ Third-party API integration
- ✅ Git workflow and version control
- ✅ CI/CD pipeline configuration
- ✅ Performance optimization techniques
- ✅ Accessibility and UX considerations

---

## 📧 Contact

**Salvador Fernández**
- 📧 Email: chavafd@outlook.com
- 📱 Phone: (984) 104-6650
- 📸 Instagram: [@chavafdz_r](https://instagram.com/chavafdz_r)
- 💼 GitHub: [@chavafd](https://github.com/chavafd)

---

## 📄 License

This project is open source and available for educational purposes.

---

**Built with ❤️ using Next.js, TypeScript, and modern web technologies**
