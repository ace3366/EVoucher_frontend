import "./App.css";
// Import lib
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// Import pages
import Home from "./pages/Home";
import Root from "./pages/Root";
import Vouchers from "./pages/Vouchers";
import VoucherSetRule from "./pages/VoucherSetRule";
import { ThemeProvider } from "@/components/ui/theme-provider";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: "/vouchers", element: <Vouchers /> },
      { path: "/voucher-set-rule", element: <VoucherSetRule /> },
    ],
  },
]);
function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
