import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HomePage from "./pages/home.jsx";
import Tasks from "./pages/TasksPage.jsx";
import TaskDetailsPage from "./pages/TaskDetails.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import TasksPage from "./pages/TasksPage.jsx";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/tasks",
    element: <TasksPage />,
  },
  {
    path: "/task/:taskId",
    element: <TaskDetailsPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* envolva o render com o queryclientprovider para a aplicação toda usufruir da lib react-query */}
    <QueryClientProvider client={queryClient}>
      <Toaster
        toastOptions={{
          style: {
            color: "#35383E",
          },
        }}
      />
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
);
