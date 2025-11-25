# Austine Ochieng - Portfolio

A modern, responsive portfolio website built with React and Vite, featuring a sleek dark theme design.

## 🚀 Features

- **Modern React Architecture** - Component-based design for maintainability
- **Dark Theme** - Professional dark color scheme with cyan accents
- **Fully Responsive** - Mobile-first design that works on all devices
- **Smooth Animations** - Engaging transitions and hover effects
- **EmailJS Integration** - Functional contact form
- **Comprehensive Skills Showcase** - Organized by categories with progress indicators
- **Project Portfolio** - Filterable project grid with live demos

## 🛠️ Tech Stack

- React 19.2.0
- Vite 7.2.4
- EmailJS
- React Icons
- CSS3 with Custom Properties

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## 🔧 Configuration

### EmailJS Setup

Create a `.env` file in the root directory:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## 📝 Customization

### Update Personal Information

1. **Profile Image**: Replace `src/assets/images/profile.jpg`
2. **Skills**: Edit `src/components/Skills.jsx` - Update the `skillsData` object
3. **Projects**: Edit `src/components/Projects.jsx` - Update the `projects` array
4. **About Section**: Edit `src/components/About.jsx`
5. **Social Links**: Update links in `Navbar.jsx`, `Contact.jsx`, and `Footer.jsx`

### Color Theme

Modify CSS custom properties in `src/index.css`:

```css
:root {
  --bg-primary: #0f172a;
  --bg-secondary: #1e293b;
  --accent-primary: #0ea5e9;
  /* ... */
}
```

## 📱 Sections

- **Home** - Hero section with introduction
- **About** - Professional bio and journey timeline
- **Skills** - Comprehensive tech stack with progress bars
- **Projects** - Portfolio of work with live demos
- **Contact** - Functional contact form with EmailJS
- **Footer** - Social links and navigation

## 🌐 Deployment

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload dist folder to Netlify
```

## 📄 License

© 2025 Austine Ochieng. All rights reserved.

## 🤝 Contact

- **Email**: austineochieng@example.com
- **LinkedIn**: [austine-john](https://www.linkedin.com/in/austine-john/)
- **GitHub**: [Austine-john](https://github.com/Austine-john)
