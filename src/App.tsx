import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "@/components/mode-toggle"

const App = () => {
  return (
    <ThemeProvider defaultTheme="system" storageKey="ui-theme">
      <div className="flex min-h-svh items-center justify-center bg-background p-6 text-foreground">
        <div className="absolute top-4 right-4">
          <ModeToggle />
        </div>
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
            <CardAction>Card Action</CardAction>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </div>
    </ThemeProvider>
  );
};

export default App;
