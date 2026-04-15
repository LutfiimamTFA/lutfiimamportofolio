'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function CertificatesSection() {
  const t = useTranslations('Certificates');
  const programKeys = ['mbkm', 'maganghub'] as const;

  const mbkmPdfs = t.raw('items.mbkm.pdfs') as { title: string; url: string }[];
  const maganghubImages = t.raw('items.maganghub.images') as string[];

  const programs = programKeys.map((key) => ({
    key: key,
    title: t(`items.${key}.title`),
    organizer: t(`items.${key}.organizer`),
    date: t(`items.${key}.date`),
    description: t(`items.${key}.description`),
    badge: key === 'maganghub' ? t('items.maganghub.badge') : null,
  }));

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
          {programs.map((program) => (
            <Dialog key={program.key}>
              <Card className="flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex-shrink-0">
                      <Award className="h-8 w-8 text-primary" />
                    </div>
                    <div className="flex-grow">
                      <CardTitle className="text-xl">{program.title}</CardTitle>
                      <CardDescription className="mt-1 flex flex-wrap items-center gap-2 text-base">
                        <span>
                          {program.organizer} &bull; {program.date}
                        </span>
                        {program.badge && <Badge>{program.badge}</Badge>}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{program.description}</p>
                </CardContent>
                <CardFooter>
                  <DialogTrigger asChild>
                    <Button className="w-full">
                      {t('view_certificate_button')}
                    </Button>
                  </DialogTrigger>
                </CardFooter>
              </Card>

              {program.key === 'mbkm' ? (
                <DialogContent className="h-[90vh] max-w-4xl">
                  <DialogHeader>
                    <DialogTitle>{program.title}</DialogTitle>
                  </DialogHeader>
                  <Tabs
                    defaultValue={mbkmPdfs[0].url}
                    className="flex h-full flex-col"
                  >
                    <TabsList className="grid w-full grid-cols-3">
                      {mbkmPdfs.map((pdf, index) => (
                        <TabsTrigger key={index} value={pdf.url}>
                          {pdf.title}
                        </TabsTrigger>
                      ))}
                    </TabsList>
                    {mbkmPdfs.map((pdf, index) => (
                      <TabsContent
                        key={index}
                        value={pdf.url}
                        className="flex-grow"
                      >
                        <iframe
                          src={pdf.url}
                          className="h-full w-full border-0"
                          title={`${program.title} - ${pdf.title}`}
                          allow="fullscreen"
                        />
                      </TabsContent>
                    ))}
                  </Tabs>
                </DialogContent>
              ) : (
                <DialogContent className="max-w-4xl">
                  <DialogHeader>
                    <DialogTitle>{program.title}</DialogTitle>
                  </DialogHeader>
                  <Carousel className="w-full">
                    <CarouselContent>
                      {maganghubImages.map((img, index) => (
                        <CarouselItem key={index}>
                          <div className="relative aspect-video w-full">
                            <Image
                              src={img}
                              alt={`${program.title} - Image ${index + 1}`}
                              fill
                              className="rounded-lg object-contain"
                              sizes="(max-width: 768px) 90vw, 50vw"
                              loading="lazy"
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="ml-12" />
                    <CarouselNext className="mr-12" />
                  </Carousel>
                </DialogContent>
              )}
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}
