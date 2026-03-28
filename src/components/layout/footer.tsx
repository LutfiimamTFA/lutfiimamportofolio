import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Code2, Github, Linkedin, Mail } from 'lucide-react';

const socials = [
  { name: 'Email', url: 'mailto:john.doe@example.com', icon: Mail },
  { name: 'GitHub', url: 'https://github.com', icon: Github },
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: Linkedin },
];

export default function Footer() {
  const t = useTranslations();
  const name = t('Header.name');

  return (
    <footer className="border-t border-border/40">
      <div className="container flex flex-col items-center justify-between gap-4 py-6 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Code2 className="h-6 w-6 text-primary hidden md:block" />
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            {t('Footer.copyright', { name, year: new Date().getFullYear() })}
          </p>
        </div>
        <div className="flex items-center gap-2">
          {socials.map((social) => (
            <Button asChild key={social.name} variant="ghost" size="icon">
              <Link href={social.url} target="_blank" rel="noreferrer">
                <social.icon className="h-5 w-5" />
                <span className="sr-only">{social.name}</span>
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </footer>
  );
}
