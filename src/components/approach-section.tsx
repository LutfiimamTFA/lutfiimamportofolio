import { useTranslations } from 'next-intl';
import { CheckCircle2 } from 'lucide-react';

export default function ApproachSection() {
  const t = useTranslations('Approach');
  const points = [t('p1'), t('p2'), t('p3')];

  const codeSnippet = `
// Sample code snippet
function greet(name) {
  console.log(\`Hello, \${name}!\`);
}

greet('World');
  `.trim();

  return (
    <section id="approach" className="bg-secondary/30 py-16 lg:py-24">
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-4 font-headline text-3xl font-semibold md:text-4xl">
              {t('title')}
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              {t('description')}
            </p>
            <ul className="space-y-4">
              {points.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-primary" />
                  <span className="text-lg text-muted-foreground">{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="overflow-hidden rounded-lg bg-card p-6 shadow-lg">
            <pre className="text-sm text-muted-foreground">
                <code className="font-code">{codeSnippet}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
