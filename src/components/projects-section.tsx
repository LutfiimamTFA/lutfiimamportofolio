import Image from 'next/image';
import { portfolioData } from '@/lib/portfolio-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function ProjectsSection() {
  const getImageById = (id: string) => {
    return PlaceHolderImages.find((img) => img.id === id);
  };

  return (
    <section id="projects" className="scroll-mt-20 bg-secondary/30 py-20 lg:py-32">
      <div className="container">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="mb-4 font-headline text-3xl font-semibold md:text-4xl">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground">
            Berikut adalah beberapa proyek pilihan yang telah saya kerjakan.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {portfolioData.projects.map((project, index) => {
            const image = getImageById(project.imageId);
            return (
              <Card
                key={project.title}
                className="group flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative h-52 w-full overflow-hidden">
                  {image && (
                    <Image
                      src={image.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      data-ai-hint={image.imageHint}
                    />
                  )}
                  {project.link && (
                    <Link href={project.link} target="_blank" rel="noopener noreferrer" className="absolute right-3 top-3 rounded-full bg-background/70 p-2 text-foreground backdrop-blur-sm transition-colors hover:bg-primary hover:text-primary-foreground">
                      <ArrowUpRight className="h-5 w-5" />
                    </Link>
                  )}
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription className="text-base">{project.role}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col">
                    <p className="flex-1 text-muted-foreground">{project.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                        <Badge key={tech} variant="secondary">
                            {tech}
                        </Badge>
                        ))}
                    </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
