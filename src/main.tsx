import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AxiosInterceptor } from "./fetchers/axiosInstance.ts";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <AxiosInterceptor>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </AxiosInterceptor>
);
