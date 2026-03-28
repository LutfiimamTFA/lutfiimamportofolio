import { portfolioData } from '@/lib/portfolio-data';
import { CheckCircle2 } from 'lucide-react';

export default function ApproachSection() {
  const points = [
    { text: portfolioData.approach.p1 },
    { text: portfolioData.approach.p2 },
    { text: portfolioData.approach.p3 },
  ];

  return (
    <section id="approach" className="scroll-mt-20 bg-secondary/30 py-20 lg:py-32">
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-4 font-headline text-3xl font-semibold md:text-4xl">
              Working Approach
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Pendekatan saya dalam setiap proyek untuk memastikan hasil yang berkualitas dan efisien.
            </p>
            <ul className="space-y-4">
              {points.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-primary" />
                  <span className="text-lg text-muted-foreground">{point.text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative flex h-80 items-center justify-center lg:h-96">
            <div className="absolute h-full w-full rounded-2xl bg-gradient-to-r from-primary to-accent opacity-20 blur-3xl"></div>
            <p className="relative z-10 font-mono text-5xl font-bold text-foreground/80 md:text-7xl">
              {'<CODE>'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
