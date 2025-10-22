import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import LandingPage from "./pages/LandingPage";
import { Toaster } from "@/components/ui/sonner"
// import Dashboard from "./pages/Dashboard";
// import Login from "./pages/Login";
// import Onboarding from "./pages/Onboarding";
// import Contacts from "./pages/Contacts";
// import Notifications from "./pages/Notifications";
// import Analytics from "./pages/Analytics";
// import Filters from "./pages/Filters";
// import Settings from "./pages/Settings";
// import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <TooltipProvider>
        <Toaster />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />

          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;