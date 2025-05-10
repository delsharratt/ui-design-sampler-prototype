import BrowserMockup from "@/components/ui/daisy/BrowserMockup";

export default function Hero({ }: React.HTMLAttributes<HTMLElement> & {}) {
    return (
        <div className="hero">
            <div className="hero-content text-center gap-[48px]">
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
    );
}