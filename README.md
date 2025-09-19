# Portfolio Website - Sakti Indra Heradewa

Website portfolio pribadi yang menampilkan pengalaman, proyek, dan kemampuan dalam pengembangan web full-stack.

## 🚀 Fitur

- **Modern Design**: Interface yang clean dan professional dengan color scheme sesuai branding
- **Responsive Layout**: Tampilan optimal di semua perangkat (desktop, tablet, mobile)
- **Single Page Application**: Navigasi smooth scroll antar section
- **SEO Optimized**: Meta tags lengkap untuk search engine optimization
- **Performance Focused**: Built dengan Next.js SSG untuk loading yang cepat
- **Accessibility**: Menggunakan semantic HTML dan ARIA labels

## 🛠️ Tech Stack

- **Framework**: Next.js 15 dengan TypeScript
- **Styling**: Tailwind CSS
- **Font**: Inter dari Google Fonts
- **Icons**: Heroicons dan custom SVG
- **Deployment**: Vercel (recommended)

## 📁 Struktur Project

```
src/
├── app/
│   ├── layout.tsx       # Root layout dengan metadata
│   ├── page.tsx         # Homepage utama
│   └── globals.css      # Global styles
├── components/
│   ├── Navigation.tsx   # Header navigation
│   ├── HeroSection.tsx  # Hero/landing section
│   ├── ExperienceSection.tsx # Timeline pengalaman
│   ├── ProjectsSection.tsx   # Gallery proyek
│   ├── AboutSection.tsx      # About me section
│   └── Footer.tsx       # Footer dengan contact info
└── config/
    └── index.ts         # Konfigurasi konten website
```

## 🎨 Sections

### 1. Hero Section
- Nama dan spesialisasi
- Ringkasan singkat
- Call-to-action buttons
- Social media links

### 2. Experience Section
- Timeline format dengan pengalaman proyek
- Achievements dalam setiap posisi
- Technologies & tools yang dikuasai

### 3. Projects Section
- **Flexible Project Cards**: Support projects dengan atau tanpa foto
- **Smart Emoji System**: Auto-generated icons berdasarkan project type
- **Featured vs Regular**: Categorized project display  
- **Live Demo & Source Links**: Direct access ke project demos dan repositories
- **Technology Stack Tags**: Visual representation dari tech used
- **Responsive Grid Layout**: Optimal di semua device sizes

### 4. About Section
- Deskripsi personal dan passion
- Key highlights
- Personal interests
- Contact CTA

### 5. Footer/Contact
- Contact information
- Social media links
- Quick navigation

## 🚀 Development

### Prerequisites
- Node.js 18+ 
- npm atau yarn

### Installation

1. Clone repository
```bash
git clone [repository-url]
cd portofolio-sakti
```

2. Install dependencies
```bash
npm install
```

3. Run development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in browser

## 📝 Content Management

Semua konten website dikelola melalui file `src/config/index.ts`. Update informasi berikut:

- **Personal Information**: Nama, email, lokasi, spesialisasi
- **Social Links**: URL ke profil LinkedIn, GitHub, Instagram
- **Experience**: Timeline pengalaman dengan achievements
- **Projects**: Detail proyek dengan teknologi dan links
- **About**: Deskripsi personal dan foto

## 🎯 SEO & Performance

- **Lighthouse Score Target**: 90+ untuk Performance, Accessibility, SEO
- **Meta Tags**: Open Graph, Twitter Cards, keywords
- **Semantic HTML**: Proper heading hierarchy dan ARIA labels
- **Image Optimization**: Next.js Image component untuk gambar
- **Font Optimization**: Google Fonts dengan display swap

## 🚀 Deployment

### Vercel (Recommended)
1. Push code ke GitHub repository
2. Connect repository ke Vercel
3. Deploy otomatis dari branch `main`

### Manual Build
```bash
npm run build
npm start
```

## 🔧 Customization

### Project Cards Configuration
Website mendukung **2 jenis project displays**:

#### **With Images** 🖼️
```typescript
{
  id: "project-name",
  title: "Project Title", 
  description: "Description...",
  image: "/projects/image.png", // ✅ Include image path
  technologies: ["Next.js", "TypeScript"],
  liveUrl: "https://demo.com",
  sourceUrl: "https://github.com/user/repo",
  featured: true
}
```

#### **Without Images** 🎨  
```typescript
{
  id: "project-name",
  title: "Chat Application", 
  description: "Real-time messaging app...",
  // image: "/path/image.png", // ❌ Omit or comment out
  technologies: ["Node.js", "Socket.io"],
  sourceUrl: "https://github.com/user/repo", 
  featured: false
}
```

**Smart Emoji System** automatically assigns relevant emojis:
- 💰 Finance/Money projects
- 🎬 Movie/Entertainment 
- 💬 Chat/Communication
- 🛒 E-commerce/Shopping
- 📝 Blog/Content
- 💻 General tech projects

### Color Scheme
Update warna primary di `src/app/globals.css`:
```css
:root {
  --primary: #5755ff;
  --primary-hover: #4c4ae6;
}
```

### Typography
Font dapat diubah di `src/app/layout.tsx`:
```tsx
import { Inter } from "next/font/google";
```

### Content
Semua konten dapat diubah di `src/config/index.ts` tanpa touching komponen.

## 📱 Responsive Design

- **Mobile First**: Design dimulai dari mobile kemudian scaled up
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Touch Friendly**: Button sizes dan spacing optimal untuk touch devices

## 📄 License

This project is open source dan tersedia under [MIT License](LICENSE).

## 👨‍💻 Author

**Sakti Indra Heradewa**
- Email: saktiindraheradewa@gmail.com
- LinkedIn: [Sakti Indra Heradewa](https://linkedin.com/in/sakti-indra-heradewa)
- GitHub: [sakti-indra-heradewa](https://github.com/sakti-indra-heradewa)

---

Built with ❤️ using Next.js & Tailwind CSS
