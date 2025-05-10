/* 
See documentation https://daisyui.com/components/mockup-browser/
*/
export default function BrowserMockup({
  theme = 'light',
  layout,
  children,
  ...props
}: React.HTMLAttributes<HTMLElement> & {
  theme?: 'light' | 'dark';
  layout?: string;
  children?: HTMLElement[]
}) {
  return (
    <div className="mockup-browser border border-base-300 w-full">
      <div className="mockup-browser-toolbar">
        <div className="input">https://your-app.com</div>
      </div>
      <div className="grid place-content-center h-80">
      </div>
    </div>
  );
}