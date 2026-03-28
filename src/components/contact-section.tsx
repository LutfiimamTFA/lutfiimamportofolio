import { portfolioData } from '@/lib/portfolio-data';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-20 py-20 lg:py-32">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 font-headline text-3xl font-semibold md:text-4xl">
            {portfolioData.contact.title}
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
            {portfolioData.contact.description}
          </p>
          <div className="flex justify-center gap-4">
            {portfolioData.socials.map((social) => (
              <Button asChild key={social.name} size="icon" variant="outline" className="h-14 w-14 rounded-full">
                <Link href={social.url} target="_blank" rel="noreferrer">
                  <social.icon className="h-7 w-7" />
                  <span className="sr-only">{social.name}</span>
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
