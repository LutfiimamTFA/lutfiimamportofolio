'use client';

import React, { useEffect, useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { locales, defaultLocale } from '@/i18n';
import { Skeleton } from '@/components/ui/skeleton';

// This component contains the hooks and will only be rendered on the client.
function LanguageSelector() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations('Language');

  const onSelectChange = (newLocale: string) => {
    // The `usePathname` hook from `next/navigation` returns the
    // an un-localized path for the default locale, and a localized path
    // for all other locales.
    const segments = pathname.split('/');
    if (locales.includes(segments[1])) {
      segments.splice(1, 1);
    }
    let newPath = segments.join('/');
    if (newPath === '') newPath = '/';

    if (newLocale !== defaultLocale) {
      newPath = `/${newLocale}${newPath === '/' ? '' : newPath}`;
    }

    router.replace(newPath);
  };

  return (
    <Select defaultValue={locale} onValueChange={onSelectChange}>
      <SelectTrigger className="w-28 border-0 bg-transparent text-muted-foreground focus:ring-0 focus:ring-offset-0">
        <SelectValue placeholder={t('placeholder')} />
      </SelectTrigger>
      <SelectContent>
        {locales.map((loc) => (
          <SelectItem key={loc} value={loc}>
            {loc.toUpperCase()}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

// This is the exported component. It ensures LanguageSelector is only rendered on the client.
export default function LanguageSwitcher() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient ? <LanguageSelector /> : <Skeleton className="h-10 w-28" />;
}
