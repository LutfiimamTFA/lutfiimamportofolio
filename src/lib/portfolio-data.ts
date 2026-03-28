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
    title: string;
    description: string;
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
  name: "John Doe",
  navLinks: [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ],
  hero: {
    role: "Full Stack Developer",
    description: "I build efficient, scalable, and user-friendly web applications. From task management systems to government procurement platforms, I turn complex requirements into elegant digital solutions.",
    cta1: "View My Work",
    cta2: "Hire Me",
  },
  about: {
    p1: "As a Computer Science graduate, I gained hands-on experience as a Web Developer intern at PT Environesia Global Saraya through a government-sponsored program.",
    p2: "During my studies, I also participated in the MBKM program, where I developed a procurement system website for the Blitar Regency's Livestock and Fisheries Service.",
    p3: "I am experienced in developing web applications and thrive in team environments using Agile methodologies.",
    p4: "I leverage AI-powered tools to accelerate development, analyze solutions, and boost efficiency, always ensuring that code quality and structure remain top priorities.",
  },
  projects: [
    {
      title: "CBDMS Workspace",
      description: "A web-based task management system with an interactive Kanban board, task dependencies, and a real-time dashboard.",
      tech: ["Firebase", "Firestore", "React"],
      role: "Full Stack Development",
      imageId: "project-1",
      link: "#"
    },
    {
      title: "HR Platform System",
      description: "An HR system to manage recruitment, employee data, and multi-level approval processes.",
      tech: ["Web App", "Database System"],
      role: "Backend Development",
      imageId: "project-2",
      link: "#"
    },
    {
      title: "CRM WhatsApp Integration",
      description: "A CRM system connected with WhatsApp (using WAHA) for monitoring sales activity and performance.",
      tech: ["WAHA", "API Integration", "Node.js"],
      role: "System Integration",
      imageId: "project-3",
      link: "#"
    },
    {
      title: "Goods Procurement System",
      description: "A website for the Blitar Regency to manage data and transactions for public procurement.",
      tech: ["PHP", "MySQL", "Web App"],
      role: "Full Stack Development",
      imageId: "project-4",
      link: "#"
    },
    {
      title: "WordPress Development",
      description: "Created and managed websites and landing pages using Elementor for content and event marketing.",
      tech: ["WordPress", "Elementor", "PHP"],
      role: "Development & Content",
      imageId: "project-5",
      link: "#"
    },
    {
      title: "E-Commerce Platform",
      description: "A complete e-commerce solution with product management, shopping cart, and payment gateway integration.",
      tech: ["Next.js", "Stripe", "PostgreSQL"],
      role: "Full Stack Development",
      imageId: "project-6",
      link: "#"
    }
  ],
  skills: [
    {
      category: "Backend",
      technologies: ["Laravel", "PHP", "Node.js", "Express"],
    },
    {
      category: "Frontend",
      technologies: ["React", "Next.js", "Tailwind CSS", "WordPress"],
    },
    {
      category: "Database & Cloud",
      technologies: ["MySQL", "Firebase", "Firestore"],
    },
    {
      category: "Tools & Methods",
      technologies: ["Git", "Docker", "Agile", "n8n"],
    },
    {
      category: "Expertise",
      technologies: ["API Integration", "AI-assisted development"],
    },
  ],
  approach: {
    title: "My Working Approach",
    description: "My approach to every project ensures high-quality, efficient results.",
    p1: "I focus not just on coding, but on how the system addresses real-world user needs.",
    p2: "I build applications with a structured approach, considering efficiency, usability, and scalability.",
    p3: "I utilize AI to speed up the development process, assist in solution exploration, and boost overall productivity.",
  },
  contact: {
    title: "Get In Touch",
    description: "I'm always open to discussing new projects, collaborations, or employment opportunities. Feel free to reach out.",
  },
  socials: [
      { name: 'Email', url: 'mailto:john.doe@example.com', icon: Mail },
      { name: 'GitHub', url: 'https://github.com', icon: Github },
      { name: 'LinkedIn', url: 'https://linkedin.com', icon: Linkedin },
  ]
};
