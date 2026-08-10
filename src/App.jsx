import { useState, useEffect } from "react";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "./context/ThemeContext";
import LoadingScreen from "./components/layout/LoadingScreen";
import AppRouter from "./routes/AppRouter";
import { siteConfig } from "./config/site.config";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { staleTime: 1000 * 60 * 5, retry: 1 },
  },
});

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <LoadingScreen isLoading={isLoading} />
          {!isLoading && <AppRouter />}
        </ThemeProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}
