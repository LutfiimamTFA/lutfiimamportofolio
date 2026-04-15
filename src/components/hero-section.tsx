'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import { ContactModal } from '@/components/contact-modal';
import * as React from 'react';
import { Skeleton } from '@/components/ui/skeleton';

export default function HeroSection() {
  const t = useTranslations('Hero');
  const header_t = useTranslations('Header');
  const avatarImage = PlaceHolderImages.find((img) => img.id === 'avatar');
  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section id="hero" className="relative flex items-center min-h-[calc(100vh-4rem)] py-16 lg:py-24">
      <div className="container">
        <div className="grid items-center gap-12 text-center md:grid-cols-2 md:text-left lg:gap-20">
          <div>
            <h1 className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
              {t('role')}
            </h1>
            <p 
              className="mb-8 max-w-2xl font-headline text-4xl font-semibold text-foreground md:text-5xl lg:text-6xl"
            >
              {t('description')}
            </p>
            <div className="flex justify-center gap-4 md:justify-start">
              <Button asChild size="lg">
                <Link href="#projects">{t('cta1')}</Link>
              </Button>
              {isClient ? (
                <ContactModal>
                  <Button size="lg" variant="secondary">{t('cta2')}</Button>
                </ContactModal>
              ) : (
                <Skeleton className="h-11 w-[120px]" />
              )}
            </div>
          </div>
          <div className="relative order-first mx-auto h-[18rem] w-[18rem] sm:h-[22rem] sm:w-[22rem] md:order-last md:h-[28rem] md:w-[28rem] lg:h-[32rem] lg:w-[32rem]">
            {avatarImage && (
              <Image 
                src={avatarImage.imageUrl}
                alt={header_t('name')}
                fill
                className="rounded-full object-cover"
                sizes="(max-width: 768px) 70vw, 40vw"
                priority
                data-ai-hint={avatarImage.imageHint}
              />
            )}
            <div className="absolute inset-0 rounded-full border-4 border-primary/50"></div>
            <div className="absolute inset-2 rounded-full border-4 border-accent/50"></div>
          </div>
        </div>
      </div>
       <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <Link href="#about" aria-label="Scroll to about section">
              <ArrowDown className="h-8 w-8 text-muted-foreground" />
          </Link>
      </div>
    </section>
  );
}
