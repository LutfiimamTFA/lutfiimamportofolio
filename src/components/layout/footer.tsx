'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Code2, Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const tFooter = useTranslations('Footer');
  const tHeader = useTranslations('Header');
  const name = tHeader('name');

  const navLinks = [
    { name: tFooter('nav.home'), href: '#hero' },
    { name: tFooter('nav.about'), href: '#about' },
    { name: tFooter('nav.projects'), href: '#projects' },
    { name: tFooter('nav.certificates'), href: '#certificates' },
    { name: tFooter('nav.contact'), href: '#contact' },
  ];

  const socials = [
    { name: 'Email', url: 'mailto:lutfiimam81@gmail.com', icon: Mail, label: 'lutfiimam81@gmail.com' },
    { name: 'GitHub', url: 'https://github.com/LutfiimamTFA', icon: Github, label: 'GitHub' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/lutfi-imam-tauchid-faried-akbar-6633b2371/', icon: Linkedin, label: 'LinkedIn' },
  ];

  return (
    <footer className="border-t border-border/40 bg-card">
      <div className="container grid grid-cols-1 gap-12 py-12 text-center md:grid-cols-3 md:text-left">
        {/* Column 1: Identity */}
        <div className="flex flex-col items-center gap-4 md:items-start">
          <Link href="/" className="flex items-center gap-2">
            <Code2 className="h-6 w-6 text-primary" />
            <span className="font-bold">{name}</span>
          </Link>
          <p className="text-sm text-muted-foreground">
            {tFooter('copyright', { name, year: new Date().getFullYear() })}
          </p>
        </div>

        {/* Column 2: Quick Navigation */}
        <div>
          <h3 className="mb-4 font-semibold text-foreground">{tFooter('nav_title')}</h3>
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary hover:underline underline-offset-4"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Contact */}
        <div>
          <h3 className="mb-4 font-semibold text-foreground">{tFooter('contact_title')}</h3>
          <ul className="space-y-3">
            {socials.map((social) => (
              <li key={social.name}>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-3 text-sm text-muted-foreground transition-colors hover:text-primary md:justify-start"
                >
                  <social.icon className="h-5 w-5" />
                  <span>{social.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
