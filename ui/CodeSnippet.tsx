export default function CodeSnippet({
    theme = 'light',
    ...props
}: React.HTMLAttributes<HTMLElement> & {
    theme?: 'light' | 'dark';
}) {
    return (
        <div className="mockup-code w-full">
            <pre data-prefix="$"><code>npm i daisyui</code></pre>
            <pre data-prefix=">" className="text-warning"><code>installing...</code></pre>
            <pre data-prefix=">" className="text-success"><code>Done!</code></pre>
        </div>
    );
}