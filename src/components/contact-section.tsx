import { portfolioData } from '@/lib/portfolio-data';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 lg:py-32">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 font-headline text-3xl font-semibold md:text-4xl">
            {portfolioData.contact.title}
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
            {portfolioData.contact.description}
          </p>
          <div className="flex justify-center">
             <Button asChild size="lg">
              <a href={portfolioData.socials.find(s => s.name === 'Email')?.url}>{portfolioData.hero.cta2}</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
