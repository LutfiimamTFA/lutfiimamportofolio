import { Github, Linkedin, Mail } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type SocialLink = {
  name: string;
  url: string;
  icon: LucideIcon;
};

type Project = {
  title: string;
  description: string;
  tech: string[];
  role: string;
  imageId: string;
  link?: string;
};

type SkillCategory = {
  category: string;
  technologies: string[];
};

type PortfolioData = {
  name: string;
  navLinks: { name: string; href: string }[];
  hero: {
    role: string;
    description: string;
    cta1: string;
    cta2: string;
  };
  about: {
    p1: string;
    p2: string;
    p3: string;
    p4: string;
  };
  projects: Project[];
  skills: SkillCategory[];
  approach: {
    p1: string;
    p2: string;
    p3: string;
  };
  contact: {
    title: string;
    description: string;
  };
  socials: SocialLink[];
};

export const portfolioData: PortfolioData = {
  name: "DevFolio",
  navLinks: [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ],
  hero: {
    role: "Web Developer",
    description: "Saya Web Developer dengan pengalaman membangun aplikasi berbasis web seperti sistem manajemen tugas, HR system, CRM, serta sistem pengadaan barang untuk instansi pemerintah. Fokus pada pengembangan sistem yang efisien, terstruktur, dan sesuai kebutuhan bisnis.",
    cta1: "Lihat Proyek Saya",
    cta2: "Hubungi Saya",
  },
  about: {
    p1: "Saya lulusan Teknik Informatika dengan pengalaman magang sebagai Web Developer di PT Environesia Global Saraya melalui program MagangHub Kementerian Ketenagakerjaan.",
    p2: "Selama masa kuliah, saya juga mengikuti program MBKM dengan mengembangkan website sistem pengadaan barang untuk Dinas Peternakan dan Perikanan Kabupaten Blitar.",
    p3: "Saya terbiasa mengembangkan aplikasi berbasis web dan bekerja dalam tim menggunakan metode Agile.",
    p4: "Dalam proses pengembangan, saya memanfaatkan AI sebagai tools untuk mempercepat pengerjaan, membantu analisis solusi, dan meningkatkan efisiensi, tanpa mengabaikan kualitas dan struktur kode.",
  },
  projects: [
    {
      title: "CBDMS Workspace",
      description: "Sistem manajemen tugas berbasis web dengan fitur Kanban interaktif, manajemen tugas, dependensi, dan dashboard real-time.",
      tech: ["Firebase", "Firestore", "Web App"],
      role: "Full Development",
      imageId: "project-1",
    },
    {
      title: "HR Platform System",
      description: "Sistem HR untuk mengelola rekrutmen, data karyawan, dan proses approval bertingkat.",
      tech: ["Web App", "Database System"],
      role: "Development",
      imageId: "project-2",
    },
    {
      title: "CRM WhatsApp Integration (WAHA)",
      description: "Sistem CRM yang terhubung dengan WhatsApp untuk monitoring aktivitas dan performa sales.",
      tech: ["WAHA", "API Integration"],
      role: "Build from scratch",
      imageId: "project-3",
    },
    {
      title: "Sistem Pengadaan Barang (MBKM)",
      description: "Website pengadaan barang untuk Dinas Peternakan dan Perikanan Kabupaten Blitar untuk membantu proses pengelolaan data dan transaksi pengadaan.",
      tech: ["Web App", "Database System"],
      role: "Development",
      imageId: "project-4",
    },
    {
      title: "WordPress Development",
      description: "Pembuatan website dan landing page menggunakan Elementor untuk kebutuhan konten dan event.",
      tech: ["WordPress", "Elementor"],
      role: "Development & Content Management",
      imageId: "project-5",
    },
  ],
  skills: [
    {
      category: "Backend",
      technologies: ["Laravel", "PHP", "MySQL"],
    },
    {
      category: "Frontend/Tools",
      technologies: ["WordPress", "Elementor"],
    },
    {
      category: "Database & Platform",
      technologies: ["Firebase"],
    },
    {
      category: "Tools",
      technologies: ["Git", "n8n"],
    },
    {
      category: "Additional",
      technologies: ["AI-assisted development"],
    },
  ],
  approach: {
    p1: "Saya tidak hanya fokus pada coding, tetapi juga pada bagaimana sistem digunakan dalam kebutuhan nyata.",
    p2: "Saya membangun aplikasi dengan pendekatan terstruktur, mempertimbangkan efisiensi, kemudahan penggunaan, dan skalabilitas.",
    p3: "Saya juga memanfaatkan AI untuk mempercepat proses development, membantu eksplorasi solusi, dan meningkatkan produktivitas kerja.",
  },
  contact: {
    title: "Hubungi Saya",
    description: "Saya terbuka untuk diskusi, kolaborasi, atau peluang kerja. Jangan ragu untuk menghubungi saya.",
  },
  socials: [
      { name: 'Email', url: 'mailto:developer@example.com', icon: Mail },
      { name: 'GitHub', url: '#', icon: Github },
      { name: 'LinkedIn', url: '#', icon: Linkedin },
  ]
};
