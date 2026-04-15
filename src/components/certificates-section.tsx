'use client';

import { useTranslations } from 'next-intl';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Award } from 'lucide-react';

export default function CertificatesSection() {
  const t = useTranslations('Certificates');
  const programKeys = ['maganghub', 'mbkm'] as const;

  return (
    <section id="certificates" className="bg-secondary/30 py-16 lg:py-24">
      <div className="container">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="mb-4 font-headline text-3xl font-semibold md:text-4xl">
            {t('title')}
          </h2>
          <p className="text-lg text-muted-foreground">{t('description')}</p>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
          {programKeys.map((key) => (
            <Card
              key={key}
              className="flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <div className="flex-grow">
                    <CardTitle className="text-xl">
                      {t(`items.${key}.title`)}
                    </CardTitle>
                    <CardDescription className="mt-1 text-base">
                      {t(`items.${key}.organizer`)} &bull;{' '}
                      {t(`items.${key}.date`)}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">
                  {t(`items.${key}.description`)}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
