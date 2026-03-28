import Link from 'next/link';
import Image from 'next/image';
import { portfolioData } from '@/lib/portfolio-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

export default function HeroSection() {
  const avatarImage = PlaceHolderImages.find((img) => img.id === 'avatar');

  return (
    <section id="hero" className="relative min-h-[calc(100vh-4rem)]">
      <div className="container grid h-full min-h-[calc(100vh-4rem)] items-center gap-8 py-10 md:grid-cols-2 md:py-20">
        <div className="max-w-3xl text-center md:text-left">
          <h1 className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
            {portfolioData.hero.role}
          </h1>
          <p 
            className="mb-8 font-headline text-4xl font-semibold text-foreground md:text-5xl lg:text-6xl"
          >
            {portfolioData.hero.description}
          </p>
          <div className="flex justify-center gap-4 md:justify-start">
            <Button asChild size="lg">
              <Link href="#projects">{portfolioData.hero.cta1}</Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="#contact">{portfolioData.hero.cta2}</Link>
            </Button>
          </div>
        </div>
        <div className="relative mx-auto h-80 w-80 md:h-96 md:w-96">
          {avatarImage && (
            <Image 
              src={avatarImage.imageUrl}
              alt="Portrait of John Doe"
              fill
              className="rounded-full object-cover"
              sizes="(max-width: 768px) 80vw, 40vw"
              priority
              data-ai-hint={avatarImage.imageHint}
            />
          )}
          <div className="absolute inset-0 rounded-full border-4 border-primary/50"></div>
          <div className="absolute inset-2 rounded-full border-4 border-accent/50"></div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <Link href="#about" aria-label="Scroll to about section">
                <ArrowDown className="h-8 w-8 text-muted-foreground" />
            </Link>
        </div>
      </div>
    </section>
  );
}
