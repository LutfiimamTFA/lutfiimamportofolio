'use client';

import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { ContactModal } from '@/components/contact-modal';

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
            <ContactModal>
              <Button size="lg">{t('cta')}</Button>
            </ContactModal>
          </div>
        </div>
      </div>
    </section>
  );
}
