'use client';

import * as React from 'react';
import Link from 'next/link';
import { portfolioData } from '@/lib/portfolio-data';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Code2 } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLinks = () => (
    <>
      {portfolioData.navLinks.map((link) => (
        <Button asChild variant="link" key={link.href} onClick={() => setIsOpen(false)}>
          <Link
            href={link.href}
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            {link.name}
          </Link>
        </Button>
      ))}
    </>
  );

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        isScrolled ? 'border-b border-border/40 bg-background/80 backdrop-blur-lg' : 'bg-transparent'
      )}
    >
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center gap-2">
          <Code2 className="h-6 w-6 text-primary" />
          <span className="font-bold">{portfolioData.name}</span>
        </Link>
        <nav className="hidden items-center gap-4 text-sm lg:flex">
          <NavLinks />
        </nav>
        <div className="flex flex-1 items-center justify-end gap-2">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <SheetDescription className="sr-only">A list of navigation links to explore the page.</SheetDescription>
              <Link href="/" className="mb-6 flex items-center gap-2" onClick={() => setIsOpen(false)}>
                <Code2 className="h-6 w-6 text-primary" />
                <span className="font-bold">{portfolioData.name}</span>
              </Link>
              <nav className="flex flex-col items-start gap-4">
                <NavLinks />
              </nav>
            </SheetContent>
          </Sheet>
          <Button asChild>
            <Link href="#contact">Hubungi Saya</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
