import Link from 'next/link';
import { portfolioData } from '@/lib/portfolio-data';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="hero" className="relative h-[calc(100vh-4rem)] min-h-[500px]">
      <div className="container flex h-full flex-col items-center justify-center text-center">
        <div className="max-w-3xl">
          <h1 className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
            {portfolioData.hero.role}
          </h1>
          <p 
            className="mb-8 font-headline text-4xl font-semibold text-foreground md:text-5xl lg:text-6xl"
            style={{ animationDelay: '0.2s' }}
          >
            {portfolioData.hero.description}
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg">
              <Link href="#projects">{portfolioData.hero.cta1}</Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="#contact">{portfolioData.hero.cta2}</Link>
            </Button>
          </div>
        </div>
        <div className="absolute bottom-10 animate-bounce">
            <Link href="#about" aria-label="Scroll to about section">
                <ArrowDown className="h-8 w-8 text-muted-foreground" />
            </Link>
        </div>
      </div>
    </section>
  );
}
