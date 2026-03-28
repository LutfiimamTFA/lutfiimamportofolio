import React from 'react';

type Props = {
  children: React.ReactNode;
};

// The root layout is required for the app to work correctly.
// The main layout with <html> and <body> is in [locale]/layout.tsx.
export default function RootLayout({ children }: Props) {
  return <>{children}</>;
}
