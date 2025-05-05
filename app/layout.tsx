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
          <main className="flex flex-col w-full h-full p-8 pb-20 gap-16 lg:p-20 overflow-hidden">

            <div className="grid grid-cols-3 row-span-1 h-full w-full gap-8 text-center">

              <div className="col-span-3 md:col-span-1 h-full flex flex-col gap-8 items-center p-8">
                <h1 className="text-5xl font-bold">UI Design Sampler</h1>
                <h2 className="text-xl font-medium tracking-widest">
                  PREVIEWING... {" "}
                </h2>

                <LibrarySelector />

                <ol className="list-inside list-disc text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
                  <li className="mb-2 tracking-[-.01em]">
                    UI Design Sampler is a tool intended to customize previews of elements and layouts using different UI libraries in{" "}
                    <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
                      Next.js
                    </code>
                  </li>
                  <li className="tracking-[-.01em]">
                    Customize selections below to preview changes in the "browser"
                  </li>
                </ol>
              </div>

              <div className="col-span-3 md:col-span-2 h-full flex flex-col gap-4 border-2 border-neutral-500 rounded-md p-8 overflow-y-auto">
                {children}
              </div>
            </div>

          </main>
        </div>
      </body>
    </html>
  );
}
