import { portfolioData } from '@/lib/portfolio-data';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-8 font-headline text-3xl font-semibold md:text-4xl">
            About Me
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>{portfolioData.about.p1}</p>
            <p>{portfolioData.about.p2}</p>
            <p>{portfolioData.about.p3}</p>
            <p>{portfolioData.about.p4}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
