export function DaisyThemeProvider({
  children,
  theme = 'dark' // Default theme
}: {
  children: React.ReactNode;
  theme?: string;
}) {
  return (
    <div data-theme={theme} className="min-h-screen">
      {children}
    </div>
  );
}
