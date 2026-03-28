'use client';

import * as React from 'react';
import { Link } from 'next-intl/navigation';
import { useTranslations } from 'next-intl';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import { Menu, Code2 } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';
import LanguageSwitcher from '@/components/language-switcher';

export default function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const t = useTranslations('Header');
  const navLinks = ['about', 'projects', 'skills', 'contact'] as const;

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLinks = () => (
    <>
      {navLinks.map((link) => (
        <Button asChild variant="link" key={link} onClick={() => setIsOpen(false)}>
          <Link
            href={`#${link}`}
            className="text-base text-muted-foreground transition-colors hover:text-foreground"
          >
            {t(`nav.${link}`)}
          </Link>
        </Button>
      ))}
    </>
  );

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        isScrolled ? 'border-b border-border/40 bg-background/80 backdrop-blur-lg' : 'bg-background/0'
      )}
    >
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center gap-2">
          <Code2 className="h-6 w-6 text-primary" />
          <span className="font-bold">{t('name')}</span>
        </Link>
        <nav className="hidden items-center gap-1 text-sm lg:flex">
          <NavLinks />
        </nav>
        <div className="flex flex-1 items-center justify-end gap-2">
          <div className="hidden items-center gap-2 md:flex">
            <ThemeToggle />
            <LanguageSwitcher />
          </div>
          <Button asChild>
            <Link href="#contact">{t('cta')}</Link>
          </Button>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
              <SheetDescription className="sr-only">A list of navigation links to explore the page.</SheetDescription>
              <Link href="/" className="mb-6 flex items-center gap-2" onClick={() => setIsOpen(false)}>
                <Code2 className="h-6 w-6 text-primary" />
                <span className="font-bold">{t('name')}</span>
              </Link>
              <nav className="flex flex-col items-start gap-2">
                <NavLinks />
              </nav>
               <div className="mt-6 flex items-center gap-2">
                <ThemeToggle />
                <LanguageSwitcher />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
