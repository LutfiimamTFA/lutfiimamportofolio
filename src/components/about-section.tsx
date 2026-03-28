import { useTranslations } from 'next-intl';

export default function AboutSection() {
  const t = useTranslations('About');
  return (
    <section id="about" className="py-16 lg:py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-8 font-headline text-3xl font-semibold md:text-4xl">
            {t('title')}
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>{t('p1')}</p>
            <p>{t('p2')}</p>
            <p>{t('p3')}</p>
            <p>{t('p4')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
