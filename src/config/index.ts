// Configuration types for portfolio website content
export interface Experience {
  id: string;
  position: string;
  project: string;
  duration: string;
  achievements: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string; // Optional image
  technologies: string[];
  liveUrl?: string;
  sourceUrl?: string;
  featured: boolean;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface SiteConfig {
  name: string;
  email: string;
  location: string;
  specialization: string;
  summary: string;
  about: {
    description: string;
    image: string;
  };
  socialLinks: SocialLink[];
}

export interface SiteContent {
  experiences: Experience[];
  projects: Project[];
}

// Site configuration
export const siteConfig: SiteConfig = {
  name: "Sakti Indra Heradewa",
  email: "sakti787@gmail.com",
  location: "Yogyakarta, Indonesia",
  specialization: "Full-Stack Web Developer",
  summary: "Mahasiswa Teknik Informatika semester 5 yang passionate dalam pengembangan web full-stack dengan pengalaman membangun aplikasi menggunakan Next.js, Laravel, dan teknologi modern lainnya.",
  about: {
    description: "Saya adalah mahasiswa Teknik Informatika semester 5 yang bersemangat dalam menciptakan solusi digital yang efektif. Keahlian saya terasah melalui berbagai proyek menggunakan Next.js, Laravel, dan Supabase, dan memiliki beberapa sertifikasi di LinkedIn. Saya memiliki minat khusus pada DevOps dan self-hosting, yang memungkinkan saya memahami infrastruktur aplikasi secara mendalam.",
    image: "/images/profile/profile.jpg"
  },
  socialLinks: [
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/sakti-indra/",
      icon: "linkedin"
    },
    {
      platform: "GitHub",
      url: "https://github.com/sakti787",
      icon: "github"
    },
    {
      platform: "Instagram",
      url: "https://www.instagram.com/saktii787",
      icon: "instagram"
    }
  ]
};

// Site content
export const siteContent: SiteContent = {
  experiences: [

    {
      id: "helpdesk-realtime",
      position: "Full-Stack Developer (Independent Project)",
      project: "Helpdesk Realtime - Sistem Ticketing & Live Chat Berbasis Web",
      duration: "Februari 2026",
      achievements: [
        "Membangun aplikasi helpdesk full-stack dari nol menggunakan Laravel + Inertia.js + Vue 3 untuk menghasilkan pengalaman SPA yang cepat namun tetap server-driven dan mudah dikelola.",
        "Mengimplementasikan role-based access control (Admin/Agent/Customer) menggunakan middleware dan policy untuk memastikan setiap pengguna hanya dapat mengakses data serta fitur sesuai perannya.",
        "Mendesain dan mengembangkan modul ticketing end-to-end (create, assign/claim, status flow, resolve/close) lengkap dengan audit trail (ticket events) untuk kebutuhan tracking aktivitas.",
        "Mengintegrasikan realtime chat per-ticket menggunakan WebSocket/Broadcasting sehingga pesan dan update status dapat muncul tanpa refresh, meningkatkan responsivitas agent dan pengalaman pengguna.",
        "Membangun dashboard Agent Queue dengan filter status (unassigned/assigned) serta pencarian, dan menyusun struktur API endpoint yang rapi untuk integrasi atau pengembangan lanjutan."
      ]
    },
    {
      id: "uangsakti 2.0",
      position: "Full-Stack Developer (Independent Project)",
      project: "UangSakti - Aplikasi Pelacak Keuangan Pribadi Berbasis Web",
      duration: "Oktober 2025",
      achievements: [
        "Membangun aplikasi web full-stack dari nol dengan arsitektur Next.js App Router (Server & Client Components) untuk performa dan interaktivitas optimal.",
        "Mengamankan data multi-pengguna dengan Supabase Auth dan menerapkan kebijakan Row Level Security (RLS) yang ketat di PostgreSQL.",
        "Mendesain dan mengimplementasikan UI/UX modern (glassmorphism) yang responsif dengan Tailwind CSS, Shadcn UI, dan animasi kompleks menggunakan Framer Motion.",
        "Melakukan deployment self-hosted pada Proxmox VE (via Linux Container) dan mengamankan akses publik menggunakan Cloudflare Tunnel (prinsip Zero Trust).",
        "Meningkatkan performa secara drastis dengan memindahkan logika agregasi data yang kompleks ke server menggunakan Fungsi Database (RPC) PostgreSQL."
      ]
    },
    {
      id: "uangsakti",
      position: "Full-Stack Developer",
      project: "UangSakti - Aplikasi Manajemen Keuangan",
      duration: "September 2025",
      achievements: [
        "Mengembangkan aplikasi web manajemen keuangan personal menggunakan Next.js dan Supabase",
        "Mengimplementasikan fitur tracking income dan expense",
        "Mendesain dan membangun RESTful API untuk operasi CRUD data keuangan",
        "Menerapkan authentication dan authorization menggunakan Supabase Auth",]
    },
    {
      id: "infra",
      position: "Infrastruktur & Deployment",
      project: "Self-Hosting Aplikasi Web (uangsakti.my.id)",
      duration: "September 2025",
      achievements: [
        "Melakukan setup dan konfigurasi server Ubuntu dari nol di lingkungan non-cloud untuk production deployment.",
        "Mengkonfigurasi Nginx sebagai reverse proxy untuk mengarahkan traffic ke aplikasi Next.js yang berjalan dengan process manager PM2.",
        "Mengamankan dan mempublikasikan aplikasi web dari server lokal (non-cloud) menggunakan Cloudflare Tunnel, secara efektif menyembunyikan alamat IP asli server dan melindunginya dari serangan langsung.",
        "Membuat deployment script sederhana (Bash) untuk otomatisasi proses pull dari Git dan restart service aplikasi.",
        "Menerapkan monitoring dasar pada server untuk memantau penggunaan CPU dan memori secara real-time."
      ]
    },
    {
      id: "zonamovie",
      position: "Full-Stack Developer",
      project: "Zona Movie - Platform Streaming Film",
      duration: "Juli 2025",
      achievements: [
        "Membangun platform streaming film menggunakan Laravel dan MySQL",
        "Mengintegrasikan payment gateway untuk sistem subscription premium",
        "Mengelola database dengan lebih dari 1000+ data film dan metadata",
        "Menggunakan teknik caching untuk optimasi loading content"
      ]
    },
  ],
  projects: [
    {
      id: "muchu-petshop",
      title: "Muchu PetShop",
      description: "Website statis bertema calm & pet-friendly untuk Muchu PetShop di Wonosobo. Menampilkan profil toko, jam operasional, kategori produk, testimoni pelanggan, serta lokasi presisi dengan Google Maps embed dan tombol cepat WhatsApp/Telepon/Instagram.",
      image: "/projects/screenshots/website-petshop.png", // Ganti dengan path screenshot Muchu PetShop Anda
      technologies: ["Node.js", "Vite", "HTML", "CSS", "JavaScript"], // Sesuaikan jika Anda pakai framework lain
      liveUrl: "https://pet-shop-static.vercel.app/", // Ganti dengan URL live Anda
      sourceUrl: "https://github.com/sakti787/pet-shop-static", // Ganti dengan URL repository GitHub Anda
      featured: true
    },
    {
      id: "helpdesk-realtime",
      title: "Helpdesk Realtime (Ticketing + Chat)",
      description:
        "Platform helpdesk fullstack dengan alur kerja tiket dan obrolan waktu nyata untuk mengelola dukungan pelanggan. Termasuk akses berbasis peran (Admin/Agen/Pelanggan), antrian agen, alur status tiket, dan pengiriman pesan berbasis WebSocket.",
      image: "/projects/screenshots/website-helpdesk.png", // Opsional: taruh screenshot di public/projects/screenshots/
      technologies: ["Laravel", "PHP", "Inertia.js", "Vue 3", "Naive UI", "MySQL", "WebSockets", "REST API"],
      sourceUrl: "https://github.com/sakti787/helpdesk-realtime-laravel",
      featured: true
    },
    {
      id: "uangsakti 2.0",
      title: "uangsakti 2.0",
      description: "Aplikasi pelacak keuangan personal full-stack yang dirancang untuk audiens muda, menampilkan UI modern dengan animasi (glassmorphism), visualisasi data real-time, dan backend aman yang di-hosting secara mandiri (self-hosted) menggunakan virtualisasi container.",
      image: "/projects/screenshots/website-uangsakti2.png",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Shadcn UI",
        "Framer Motion",
        "Recharts",
        "Zustand",
        "Supabase",
        "PostgreSQL",
        "Proxmox VE",
        "Cloudflare Tunnel",
        "PM2"
      ],
      liveUrl: "https://uangsakti.my.id",
      sourceUrl: "https://github.com/sakti787/personal-finance-2.0",
      featured: true
    },
    {
      id: "airqu",
      title: "Airqu",
      description: "Aplikasi web untuk memantau kualitas udara secara real-time, menyediakan data polutan dan indeks kualitas udara (AQI) di berbagai lokasi.",
      image: "/projects/screenshots/website-airqu.png", // Ganti dengan path screenshot Airqu Anda
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Leaflet.js"], // Sesuaikan teknologinya
      liveUrl: "https://airqu.vercel.app/", // Ganti dengan URL live Airqu
      sourceUrl: "https://github.com/sakti787/AirQu", // Ganti dengan URL repository GitHub Airqu
      featured: true
    },
    {
      id: "uangsakti",
      title: "uangsakti",
      description: "Aplikasi web manajemen keuangan personal yang memungkinkan pengguna untuk melacak income, expense, dan merencanakan budget dengan interface yang intuitif.",
      image: "/projects/screenshots/website-uangsakti.png", // Menggunakan gambar yang ada
      technologies: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "Chart.js"],
      liveUrl: "https://finance-sakti.vercel.app/",
      sourceUrl: "https://github.com/sakti787/personal-finance",
      featured: true
    },
    {
      id: "zonamovie",
      title: "Zona Movie",
      description: "Platform streaming film dengan fitur subscription, playlist, dan history. Dilengkapi dengan payment gateway dan sistem manajemen konten yang komprehensif.",
      technologies: ["Laravel", "PHP", "MySQL", "Bootstrap", "Payment Gateway"],
      liveUrl: "https://github.com/sakti787/Zona-Movie",
      sourceUrl: "https://github.com/sakti787/Zona-Movie",
      featured: true
    },
    {
      id: "portfolio",
      title: "Portfolio Website",
      description: "Website portfolio personal yang dibangun dengan Next.js dan Tailwind CSS, menampilkan proyek dan pengalaman dengan desain yang clean dan responsif.",
      image: "/projects/screenshots/website-portfolio.png",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
      liveUrl: "https://portofolio-sakti.vercel.app/",
      sourceUrl: "https://github.com/sakti787/portofolio-sakti",
      featured: false
    },
  ]
};

// Navigation items
export const navigation = [
  { name: "Home", href: "#home" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" }
];

// Theme colors (sesuai PRD)
export const theme = {
  colors: {
    primary: "#5755ff",
    background: "#F8F9FA",
    text: "#212529",
    textSecondary: "#6c757d"
  }
};