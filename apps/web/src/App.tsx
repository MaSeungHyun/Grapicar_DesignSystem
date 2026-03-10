import { Button } from "@grapicar-studio/design-system";
import { useTheme } from "./hooks/useTheme";
import { THEMES } from "./theme";

function App() {
  const { handleThemeChange } = useTheme();

  return (
    <main>
      <div className="bg-background-primary min-w-screen flex min-h-screen items-center justify-center bg-neutral-700">
        <div className="absolute left-5 top-5 flex gap-3">
          {THEMES.map((theme) => (
            <Button key={theme} onClick={() => handleThemeChange(theme)}>
              {theme}
            </Button>
          ))}
        </div>
        <Button>Click me</Button>
      </div>
    </main>
  );
}

export default App;
