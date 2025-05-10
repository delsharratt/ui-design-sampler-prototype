/* 
See documentation https://daisyui.com/components/mockup-code/
*/
export default function CodeSnippet({ }: React.HTMLAttributes<HTMLElement> & {}) {

    type Code = CodeLine[];

    type CodeLine = {
        Line: string;
        Prefix?: DataPrefix;
    }

    enum DataPrefix {
        Shell = '$',
        Prompt = '>',
        None = ''
    }

    return (
        <div className="mockup-code w-full">
            <pre data-prefix="$"><code>npm i daisyui</code></pre>
            <pre data-prefix=">" className="text-warning"><code>installing...</code></pre>
            <pre data-prefix=">" className="text-success"><code>Done!</code></pre>
        </div>
    );
}