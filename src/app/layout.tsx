import Providers from '@/utils/provider';
import './globals.css'
import type { Metadata } from 'next'
import { Jost, Poppins } from 'next/font/google'

const jost = Jost({
  subsets: ['latin'],
  variable: '--font-jost'
});

const poppins = Poppins({
  weight: ['400', ],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${jost.variable} ${poppins.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
