'use client';

import React, { useEffect, useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { useRouter, usePathname } from 'next-intl/navigation';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { locales } from '@/i18n';
import { Skeleton } from '@/components/ui/skeleton';

// This component contains the hooks and will only be rendered on the client.
function LanguageSelector() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations('Language');

  const onSelectChange = (value: string) => {
    router.replace(pathname, { locale: value });
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
