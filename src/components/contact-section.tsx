import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';

export default function ContactSection() {
  const t = useTranslations('Contact');

  return (
    <section id="contact" className="py-16 lg:py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 font-headline text-3xl font-semibold md:text-4xl">
            {t('title')}
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
            {t('description')}
          </p>
          <div className="flex justify-center">
             <Button asChild size="lg">
              <a href="mailto:john.doe@example.com">{t('cta')}</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
