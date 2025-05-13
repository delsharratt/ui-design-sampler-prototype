import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LibrarySelector from "@/components/ui/LibrarySelector";

// MUI Font Imports
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Link from "next/link";
import ThemeModeToggle from "@/components/ui/ThemeModeToggle";
import ThemeProvider from "@/components/shared/theme/ShadcnThemeProvider";

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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="flex flex-col w-full h-screen p-8 pb-20 gap-16 lg:p-20 overflow-hidden font-[family-name:var(--font-geist-sans)]">

            {/* Fixed in upper right corner */}
            <div className="fixed top-0 right-0 p-4 z-50">
              <ThemeModeToggle />
            </div>

            <div className="grid grid-cols-3 row-span-1 lg:row-span-2 h-full w-full gap-8 text-center">

              <div className="col-span-3 lg:col-span-1 h-full flex flex-col gap-4 items-center p-8">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">UI Design Sampler</h1>
                <h2 className="text-xl font-medium tracking-widest">
                  PREVIEWING... {" "}
                </h2>

                <LibrarySelector />

                <ol className="list-inside list-disc text-sm/6 text-center hidden sm:block font-[family-name:var(--font-geist-mono)] mt-4">
                  <li className="mb-2 tracking-[-.01em]">
                    UI Design Sampler is a tool intended to customize previews of elements and layouts using different UI libraries.
                  </li>
                  {/* <li className="mb-2 tracking-[-.01em]">
                    Customize selections below to preview changes in the "browser"
                  </li> */}
                  <li className="tracking-[-.01em]">
                    Built by <Link href="https://delsharratt.vercel.app/" className="text-blue-500 hover:text-blue-400">Del Sharratt</Link> using{" "}
                    <Link href="https://nextjs.org/" className="text-blue-500 hover:text-blue-400">Next.js</Link> and{" "}
                    <Link href="https://tailwindcss.com/" className="text-blue-500 hover:text-blue-400">Tailwind CSS</Link>.
                  </li>
                </ol>
              </div>

              <div className="col-span-3 lg:col-span-2 h-full flex flex-col border-2 border-neutral-500 rounded-md overflow-hidden">
                {children}
              </div>
            </div>

          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
