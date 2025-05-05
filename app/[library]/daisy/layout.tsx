'use client';

import Link from "next/link";

export default function DaisyLibrary({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <h1 className="text-2xl font-bold">Daisy UI</h1>
            <div className="mb-4 flex gap-4 border-b pb-2">
                <Link href="/daisy/button" className="capitalize">Button</Link>
                <Link href="/daisy/accordion" className="capitalize">Accordion</Link>
                <Link href="/daisy/toggle" className="capitalize">Toggle</Link>
                <Link href="/daisy/alert" className="capitalize">Alert</Link>
            </div>
            <div>{children}</div>
        </div>
    );
}