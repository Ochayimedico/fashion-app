import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/extras/ErrorPage";
import Home from "./components/Home/Home";
import "./App.css";
import AuthPage from "./components/Auth/AuthPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  { path: "/auth-page", element: <AuthPage /> },
]);

// import Skeleton from "react-loading-skeleton";
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
export default App;
