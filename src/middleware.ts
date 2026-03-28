import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n';

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'as-needed'
});

export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/_next` or `.` (e.g. `favicon.ico`)
  // - … the ones containing a dot (e.g. `sitemap.xml`)
  matcher: ['/((?!api|_next|.*\\..*).*)']
};
