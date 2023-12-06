import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import MainRoute from "./Routes/MainRoute.jsx";
import { RouterProvider } from "react-router-dom";
import AuthContextProviders from "./Context/AuthContextProviders";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthContextProviders>
        <RouterProvider router={MainRoute} />
        <Toaster />
      </AuthContextProviders>
    </QueryClientProvider>
  </React.StrictMode>
);
