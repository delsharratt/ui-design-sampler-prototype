import Accordion from "@/ui/daisy/Accordion";
import CodeSnippet from "@/ui/daisy/CodeSnippet";
import Dropdown from "@/ui/daisy/Dropdown";
import ThemeController from "@/ui/daisy/ThemeController";
import Toggle from "@/ui/daisy/Toggle";
import Hero from "@/ui/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-screen font-[family-name:var(--font-geist-sans)]">
      {/* <header className="h-[64px] bg-neutral-900 text-white"></header> */}

      <main className="flex flex-col sm:items-start w-full h-full p-8 pb-20 gap-16 sm:p-20 overflow-hidden">

        <Hero />

        <div className="grid grid-cols-3 row-span-1 gap-8 items-stretch w-full">
          <div className="col-span-1 h-full flex flex-col gap-4 items-center bg-neutral-800 p-8">
            <a
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
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
            >
              Read our docs
            </a>
          </div>

          <div className="col-span-2 h-full flex flex-col gap-4 bg-neutral-800 p-8 overflow-y-auto">

            <ThemeController />
            <Dropdown label={"Library"} />
            <Accordion label={"Library"} />
            <Toggle label={"Button Options"} />
            <CodeSnippet />
            <CodeSnippet />
            <CodeSnippet />
          </div>
        </div>
      </main>

      {/* <footer className="h-[48px] bg-gray-800 text-white"></footer> */}
    </div>
  );
}
