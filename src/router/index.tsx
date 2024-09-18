import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

const App = lazy(() => import("../App"));
const ErrorPage = lazy(() => import("../pages/ErrorPage"));

export default createBrowserRouter([
  {
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<>Loading...</>}>
            <App />
          </Suspense>
        ),
        children: [],
      },
    ],
  },
]);
