import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "./components/theme-provider";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme" attribute="class">
      <TooltipProvider>
        {/* Global animated 3D cyberpunk background */}
        <div className="fixed inset-0 -z-20 overflow-hidden bg-black">
          <div
            className="absolute inset-[-10%] animate-bg-3d"
            style={{
              backgroundImage: "url('/34131209423563.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              willChange: "transform",
            }}
          >
            {/* Subtle inner shadow/overlay on the moving image for depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
          </div>
        </div>

        {/* Global static dark overlay for legibility across all sections */}
        <div className="fixed inset-0 -z-10 bg-black/60 pointer-events-none" />

        <div className="relative min-h-screen">
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </div>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
