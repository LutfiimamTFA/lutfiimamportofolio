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
  const projectKeys = ['cbdms', 'lsp', 'crm', 'hrp', 'hajatan', 'procurement'] as const;

  const projectImageIds: Record<typeof projectKeys[number], string> = {
    cbdms: 'project-1',
    lsp: 'project-2',
    crm: 'project-3',
    hrp: 'project-4',
    hajatan: 'project-5',
    procurement: 'project-6',
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
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2">
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
                      <CardTitle>{project.title}</CardTitle>
                      <CardDescription className="text-base">
                        {project.role}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-1 flex-col">
                      <p className="flex-1 text-muted-foreground">
                        {project.description}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <Badge key={tech} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                {key === 'cbdms' ? (
                  <DialogContent className="max-h-[90svh] max-w-6xl">
                    <DialogHeader>
                      <DialogTitle className="text-2xl">{project.modal.title}</DialogTitle>
                      <DialogDescription>{project.modal.description}</DialogDescription>
                    </DialogHeader>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 py-4">
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
                      <ScrollArea className="h-[60vh] -mr-6 pr-6">
                        <div className="space-y-6 text-sm">
                          <h3 className="text-lg font-semibold text-foreground">
                            {project.modal.highlights_title}
                          </h3>
                          <div className="space-y-4">
                            {project.modal.highlights.map((highlight, i) => (
                              <div key={i}>
                                <h4 className="font-semibold">{highlight.title}</h4>
                                <ul className="mt-2 list-disc space-y-1 pl-5 text-muted-foreground">
                                  {highlight.points.map((point, j) => (
                                    <li key={j}>{point}</li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                          
                          {project.modal.all_features && project.modal.all_features.length > 0 && (
                            <>
                              <Separator />
                              <h3 className="text-lg font-semibold text-foreground">
                                {project.modal.all_features_title}
                              </h3>
                              <div className="grid grid-cols-1 gap-x-6 gap-y-4">
                                {project.modal.all_features.map((feature, i) => (
                                  <div key={i}>
                                    <h4 className="font-semibold">{feature.title}</h4>
                                    <ul className="mt-2 list-disc space-y-1 pl-5 text-muted-foreground">
                                      {feature.points.map((point, j) => (
                                        <li key={j}>{point}</li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            </>
                          )}
                        </div>
                      </ScrollArea>
                    </div>
                    <DialogFooter className="sm:justify-end">
                      {project.liveLink && (
                        <Button asChild>
                          <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2" /> {t('visit_site')}
                          </a>
                        </Button>
                      )}
                      {project.githubLink && (
                        <Button asChild variant="secondary">
                          <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2" /> GitHub
                          </a>
                        </Button>
                      )}
                    </DialogFooter>
                  </DialogContent>
                ) : key === 'lsp' ? (
                  <DialogContent className="max-h-[90svh] max-w-4xl">
                    <DialogHeader>
                      <DialogTitle className="text-2xl">{project.modal.title}</DialogTitle>
                      <DialogDescription>{project.modal.description}</DialogDescription>
                    </DialogHeader>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 py-4">
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
                      <ScrollArea className="h-[60vh] -mr-6 pr-6">
                        <div className="space-y-6 text-sm">
                          <h3 className="text-lg font-semibold text-foreground">
                            {project.modal.highlights_title}
                          </h3>
                          <div className="space-y-4">
                            {project.modal.highlights.map((highlight, i) => (
                              <div key={i}>
                                <h4 className="font-semibold">{highlight.title}</h4>
                                <ul className="mt-2 list-disc space-y-1 pl-5 text-muted-foreground">
                                  {highlight.points.map((point, j) => (
                                    <li key={j}>{point}</li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>
                      </ScrollArea>
                    </div>
                    <DialogFooter className="sm:justify-end">
                      {project.liveLink && (
                        <Button asChild>
                          <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2" /> {t('visit_site')}
                          </a>
                        </Button>
                      )}
                      {project.githubLink && (
                        <Button asChild variant="secondary">
                          <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2" /> GitHub
                          </a>
                        </Button>
                      )}
                    </DialogFooter>
                  </DialogContent>
                ) : (
                  <DialogContent className="max-h-[90svh] max-w-4xl">
                    <DialogHeader className="pr-6">
                      <DialogTitle className="text-2xl">
                        {project.modal.title}
                      </DialogTitle>
                      <DialogDescription>
                        {project.modal.description}
                      </DialogDescription>
                    </DialogHeader>
                    <ScrollArea className="-mr-6 h-[60svh] pr-6">
                      <div className="space-y-6 text-sm">
                        <h3 className="text-lg font-semibold text-foreground">
                          {project.modal.highlights_title}
                        </h3>
                        <div className="space-y-4">
                          {project.modal.highlights.map((highlight, i) => (
                            <div key={i}>
                              <h4 className="font-semibold">{highlight.title}</h4>
                              <ul className="mt-2 list-disc space-y-1 pl-5 text-muted-foreground">
                                {highlight.points.map((point, j) => (
                                  <li key={j}>{point}</li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                        
                        {project.modal.all_features && project.modal.all_features.length > 0 && (
                          <>
                            <Separator />
                            <h3 className="text-lg font-semibold text-foreground">
                              {project.modal.all_features_title}
                            </h3>
                            <div className="grid grid-cols-1 gap-x-6 gap-y-4 md:grid-cols-2">
                              {project.modal.all_features.map((feature, i) => (
                                <div key={i}>
                                  <h4 className="font-semibold">{feature.title}</h4>
                                  <ul className="mt-2 list-disc space-y-1 pl-5 text-muted-foreground">
                                    {feature.points.map((point, j) => (
                                      <li key={j}>{point}</li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          </>
                        )}
                      </div>
                    </ScrollArea>
                    <DialogFooter className="sm:justify-end">
                      {project.liveLink && (
                        <Button asChild>
                          <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="mr-2" /> {t('visit_site')}
                          </a>
                        </Button>
                      )}
                      {project.githubLink && (
                        <Button asChild variant="secondary">
                          <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="mr-2" /> GitHub
                          </a>
                        </Button>
                      )}
                    </DialogFooter>
                  </DialogContent>
                )}
              </Dialog>
            );
          })}
        </div>
      </div>
    </section>
  );
}
