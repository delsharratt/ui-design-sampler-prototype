import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: 'UI Design Sampler',
    template: '%s | UI Design Sampler',
  },
  description: 'UI Design Sampler is a tool intended to customize previews of elements and layouts using different UI libraries',
  // openGraph: {
  //   title: 'UI Design Sampler',
  //   description:
  //     'UI Design Sampler is a tool intended to customize previews of elements and layouts using different UI libraries',
  //   images: [``],
  // },
  // twitter: {
  //   card: '',
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
