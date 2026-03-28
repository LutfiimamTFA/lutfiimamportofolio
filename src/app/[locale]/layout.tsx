import { getMessages, getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { Inter } from 'next/font/google';
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from '@/components/theme-provider';
import { locales } from '@/i18n';
import { NextIntlClientProvider } from 'next-intl';

import '../globals.css';

const inter = Inter({ subsets: ['latin'] });

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params: { locale } }: Props) {
  const t = await getTranslations({ locale, namespace: 'Metadata' });
  const header_t = await getTranslations({ locale, namespace: 'Header' });
  const name = header_t('name');

  return {
    title: t('title', { name }),
    description: t('description'),
  };
}

export default async function RootLayout({
  children,
  params: { locale },
}: Props) {
  unstable_setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Toaster />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
