import BrowserMockup from "@/ui/BrowserMockup";
import CodeSnippet from "@/ui/CodeSnippet";
import ThemeController from "@/ui/ThemeController";
import Toggle from "@/ui/Toggle";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col row-start-2 items-center sm:items-start w-full p-8 pb-20 gap-16 sm:p-20">

        <div className="hero">
          <div className="hero-content text-center">
            <div className="flex flex-col gap-[32px]">
              <h1 className="text-5xl font-bold">UI Design Sampler</h1>
              <h2 className="text-xl font-medium tracking-widest">
                PREVIEWING... {" "}
                <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
                  daisyUI
                  {/* switch in logic when library can be swapped */}
                </code>
              </h2>

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

            <BrowserMockup />

          </div>
        </div>

        <div className="flex flex-col gap-4 items-center bg-neutral-800 p-8 w-full overflow-y-scroll">
          <ThemeController />
          <Toggle label={"Button Options"} />
          <CodeSnippet />
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>

      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  );
}
