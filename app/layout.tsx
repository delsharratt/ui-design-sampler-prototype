import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LibrarySelector from "@/ui/LibrarySelector";
import Hero from "@/ui/Hero";

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
        <div className="w-full h-screen font-[family-name:var(--font-geist-sans)]">
          <main className="flex flex-col sm:items-start w-full h-full p-8 pb-20 gap-16 sm:p-20 overflow-hidden">

            <Hero />

            <div className="grid grid-cols-3 row-span-1 gap-8 items-stretch h-full w-full">
              <div className="col-span-1 h-full flex flex-col gap-4 items-center bg-neutral-800 p-8">
                <h1 className="text-2xl font-bold">Select Library:</h1>
                <LibrarySelector />
              </div>

              <div className="col-span-2 h-full flex flex-col gap-4 bg-neutral-800 p-8 overflow-y-auto">
                {children}
              </div>
            </div>

          </main>
        </div>
      </body>
    </html>
  );
}
