import type { Metadata } from 'next';
import './globals.css';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="favicon" href="/images/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
