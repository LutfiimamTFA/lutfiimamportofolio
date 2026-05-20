
'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowUpRight, Github, ExternalLink } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';

export default function ProjectsSection() {
  const t = useTranslations('Projects');
  const projectKeys = ['cbdms', 'hrp', 'environesia', 'crm', 'lsp', 'hajatan', 'procurement'] as const;

  const projectImageIds: Record<string, string> = {
    cbdms: 'project-1',
    lsp: 'project-2',
    crm: 'project-3',
    hrp: 'project-4',
    hajatan: 'project-5',
    procurement: 'project-6',
    environesia: 'project-7'
  };

  const getImageById = (id: string) => {
    return PlaceHolderImages.find((img) => img.id === id);
  };

  type Highlight = { title: string; points: string[] };
  type AllFeatures = { title: string; points: string[] };

  return (
    <section id="projects" className="bg-secondary/30 py-16 lg:py-24">
      <div className="container">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="mb-4 font-headline text-3xl font-semibold md:text-4xl">
            {t('title')}
          </h2>
          <p className="text-lg text-muted-foreground">{t('description')}</p>
        </div>
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projectKeys.map((key) => {
            const project = {
              title: t(`items.${key}.title`),
              description: t(`items.${key}.description`),
              tech: t.raw(`items.${key}.tech`) as string[],
              role: t(`items.${key}.role`),
              imageId: projectImageIds[key],
              liveLink: t(`items.${key}.liveLink`),
              githubLink: t(`items.${key}.githubLink`),
              modal: {
                title: t(`items.${key}.modal.title`),
                description: t(`items.${key}.modal.description`),
                ai_description: t(`items.${key}.modal.ai_description`),
                intro: t(`items.${key}.modal.intro`),
                highlights_title: t(`items.${key}.modal.highlights_title`),
                all_features_title: t(
                  `items.${key}.modal.all_features_title`
                ),
                highlights: t.raw(
                  `items.${key}.modal.highlights`
                ) as Highlight[],
                all_features: t.raw(
                  `items.${key}.modal.all_features`
                ) as AllFeatures[],
              },
            };
            const image = getImageById(project.imageId);
            return (
              <Dialog key={project.title}>
                <DialogTrigger asChild>
                  <Card className="group flex cursor-pointer flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                    <div className="relative h-60 w-full overflow-hidden">
                      {image && (
                        <Image
                          src={image.imageUrl}
                          alt={project.title}
                          fill
                          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 50vw"
                          data-ai-hint={image.imageHint}
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 right-4 flex items-center gap-2 rounded-full bg-background/80 px-3 py-1 text-xs text-foreground backdrop-blur-sm opacity-0 transition-opacity group-hover:opacity-100">
                        {t('view_details')}
                        <ArrowUpRight className="h-4 w-4" />
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="line-clamp-1">{project.title}</CardTitle>
                      <CardDescription className="text-base line-clamp-1">
                        {project.role}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-1 flex-col">
                      <p className="flex-1 text-muted-foreground line-clamp-3">
                        {project.description}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.tech.slice(0, 3).map((tech) => (
                          <Badge key={tech} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                        {project.tech.length > 3 && (
                          <Badge variant="outline">+{project.tech.length - 3}</Badge>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                
                <DialogContent className="flex h-[95vh] w-[95vw] max-w-6xl flex-col p-0 sm:h-[90vh]">
                  <DialogHeader className="p-6 pb-2">
                    <DialogTitle className="text-2xl">{project.modal.title}</DialogTitle>
                    <DialogDescription>{project.modal.description}</DialogDescription>
                  </DialogHeader>
                  
                  <div className="flex-1 overflow-hidden">
                    <ScrollArea className="h-full px-6">
                      <div className="py-4">
                        {/* Layout grid based on project key */}
                        {key === 'cbdms' ? (
                          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                            <div className="group relative aspect-video w-full overflow-hidden rounded-lg shadow-lg">
                              <Image
                                src="https://drive.google.com/uc?export=view&id=1J_BfXc0RU628WtF6kTTgzoWimIwhmt8e"
                                alt="CBDMS Workspace Feature Preview"
                                fill
                                loading="lazy"
                                className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                                sizes="(max-width: 768px) 90vw, 45vw"
                              />
                            </div>
                            <div className="space-y-6 text-sm">
                              <h3 className="text-lg font-semibold text-foreground">{project.modal.highlights_title}</h3>
                              <div className="space-y-4">
                                {project.modal.highlights.map((highlight, i) => (
                                  <div key={i}>
                                    <h4 className="font-semibold">{highlight.title}</h4>
                                    <ul className="mt-2 list-disc space-y-1 pl-5 text-muted-foreground">
                                      {highlight.points.map((point, i) => <li key={i}>{point}</li>)}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                              {project.modal.all_features && project.modal.all_features.length > 0 && (
                                <>
                                  <Separator />
                                  <h3 className="text-lg font-semibold text-foreground">{project.modal.all_features_title}</h3>
                                  <div className="space-y-4">
                                    {project.modal.all_features.map((feature, i) => (
                                      <div key={i}>
                                        <h4 className="font-semibold">{feature.title}</h4>
                                        <ul className="mt-2 list-disc space-y-1 pl-5 text-muted-foreground">
                                          {feature.points.map((point, i) => <li key={i}>{point}</li>)}
                                        </ul>
                                      </div>
                                    ))}
                                  </div>
                                </>
                              )}
                            </div>
                          </div>
                        ) : key === 'environesia' ? (
                          <div className="space-y-8">
                            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                              <div className="group relative aspect-video w-full overflow-hidden rounded-lg shadow-md transition-all hover:shadow-xl">
                                <Image
                                  src="https://drive.google.com/uc?export=view&id=1_LfdBZYeeUs0L9zbJtdv5JR7-iwyiujz"
                                  alt="Environesia Desktop Preview"
                                  fill
                                  loading="lazy"
                                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                  sizes="(max-width: 768px) 90vw, 45vw"
                                />
                              </div>
                              <div className="group relative aspect-video w-full overflow-hidden rounded-lg shadow-md transition-all hover:shadow-xl">
                                <Image
                                  src="https://drive.google.com/uc?export=view&id=1q_Uy0COvHTIdOn1nL73kHHd2HVvscY4f"
                                  alt="Environesia Service Preview"
                                  fill
                                  loading="lazy"
                                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                  sizes="(max-width: 768px) 90vw, 45vw"
                                />
                              </div>
                            </div>
                            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                              <div>
                                <h3 className="text-lg font-semibold text-foreground mb-4">{project.modal.highlights_title}</h3>
                                <div className="space-y-4 text-sm">
                                  {project.modal.highlights.map((highlight, i) => (
                                    <div key={i}>
                                      <h4 className="font-semibold">{highlight.title}</h4>
                                      <ul className="mt-2 list-disc space-y-1 pl-5 text-muted-foreground">
                                        {highlight.points.map((point, i) => <li key={i}>{point}</li>)}
                                      </ul>
                                    </div>
                                  ))}
                                </div>
                              </div>
                              <div>
                                <h3 className="text-lg font-semibold text-foreground mb-4">{project.modal.all_features_title}</h3>
                                <div className="space-y-4 text-sm">
                                  {project.modal.all_features.map((feature, i) => (
                                    <div key={i}>
                                      <h4 className="font-semibold">{feature.title}</h4>
                                      <ul className="mt-2 list-disc space-y-1 pl-5 text-muted-foreground">
                                        {feature.points.map((point, i) => <li key={i}>{point}</li>)}
                                      </ul>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : key === 'hrp' ? (
                          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                            <div className="group relative aspect-video w-full overflow-hidden rounded-lg shadow-lg">
                              <Image
                                src="https://drive.google.com/uc?export=view&id=1E5rA_CySxUrP3DKsTDADUgIxqbfZcAA-"
                                alt="HRP Starter Kit Feature Preview"
                                fill
                                loading="lazy"
                                className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                                sizes="(max-width: 768px) 90vw, 45vw"
                              />
                            </div>
                            <div className="space-y-6 text-sm">
                              <h3 className="text-lg font-semibold text-foreground">{project.modal.highlights_title}</h3>
                              <div className="space-y-4">
                                {project.modal.highlights.map((highlight, i) => (
                                  <div key={i}>
                                    <h4 className="font-semibold">{highlight.title}</h4>
                                    <ul className="mt-2 list-disc space-y-1 pl-5 text-muted-foreground">
                                      {highlight.points.map((point, i) => <li key={i}>{point}</li>)}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                              {project.modal.all_features && project.modal.all_features.length > 0 && (
                                <>
                                  <Separator />
                                  <h3 className="text-lg font-semibold text-foreground">{project.modal.all_features_title}</h3>
                                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    {project.modal.all_features.map((feature, i) => (
                                      <div key={i}>
                                        <h4 className="font-semibold">{feature.title}</h4>
                                        <ul className="mt-2 list-disc space-y-1 pl-5 text-muted-foreground">
                                          {feature.points.map((point, i) => <li key={i}>{point}</li>)}
                                        </ul>
                                      </div>
                                    ))}
                                  </div>
                                </>
                              )}
                            </div>
                          </div>
                        ) : (
                          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                             <div className="space-y-4">
                                <div className="group relative aspect-video w-full overflow-hidden rounded-lg shadow-lg">
                                  {image && (
                                    <Image
                                      src={image.imageUrl}
                                      alt={project.title}
                                      fill
                                      loading="lazy"
                                      className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                                      sizes="(max-width: 768px) 90vw, 45vw"
                                    />
                                  )}
                                </div>
                                {project.modal.intro && <p className="text-sm text-muted-foreground">{project.modal.intro}</p>}
                             </div>
                             <div className="space-y-6 text-sm">
                                <h3 className="text-lg font-semibold text-foreground">{project.modal.highlights_title}</h3>
                                <div className="space-y-4">
                                  {project.modal.highlights.map((highlight, i) => (
                                    <div key={i}>
                                      <h4 className="font-semibold">{highlight.title}</h4>
                                      <ul className="mt-2 list-disc space-y-1 pl-5 text-muted-foreground">
                                        {highlight.points.map((point, i) => <li key={i}>{point}</li>)}
                                      </ul>
                                    </div>
                                  ))}
                                </div>
                             </div>
                          </div>
                        )}
                      </div>
                    </ScrollArea>
                  </div>

                  <DialogFooter className="border-t bg-background p-6 flex-row gap-2 sm:justify-end">
                    {project.liveLink && (
                      <Button asChild className="flex-1 sm:flex-none">
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" /> 
                          {key === 'environesia' ? t('visit_website') : t('visit_site')}
                        </a>
                      </Button>
                    )}
                    {project.githubLink && (
                      <Button asChild variant="secondary" className="flex-1 sm:flex-none">
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" /> GitHub
                        </a>
                      </Button>
                    )}
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            );
          })}
        </div>
      </div>
    </section>
  );
}
