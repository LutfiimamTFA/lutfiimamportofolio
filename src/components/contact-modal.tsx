'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Mail, MessageCircle } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Code2 } from 'lucide-react';

export function ContactModal({ children }: { children: React.ReactNode }) {
  const t = useTranslations('ContactModal');
  const tHeader = useTranslations('Header');
  const whatsappNumber = '6289680697803';
  const email = 'lutfiimam81@gmail.com';

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="items-center text-center">
          <div className="mb-4 flex flex-col items-center">
             <div className="mb-4 rounded-full bg-primary/10 p-3">
               <Code2 className="h-8 w-8 text-primary" />
             </div>
            <DialogTitle className="text-2xl font-bold">
              {t('title', { name: tHeader('name').split(' ')[0] })}
            </DialogTitle>
          </div>
          <DialogDescription className="px-4 text-base">
            {t('description')}
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-3 pt-4">
          <Button asChild size="lg">
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle /> {t('whatsapp_cta')}
            </a>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <a href={`mailto:${email}`}>
              <Mail /> {t('email_cta')}
            </a>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
