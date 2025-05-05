'use client';

export default function MaterialLibrary({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <h1 className="text-2xl font-bold">Material UI</h1>
            <div>{children}</div>
        </div>
    );
}