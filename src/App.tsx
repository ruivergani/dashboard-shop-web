import "./global.css"

import { Helmet, HelmetProvider } from "react-helmet-async"
import { RouterProvider } from "react-router-dom"
import { Toaster } from "sonner"

import { ThemeProvider } from "./components/theme/theme-provider"
import { router } from "./routes"

export function App() {
  return (
    <ThemeProvider storageKey="pizzashop-theme">
      <HelmetProvider>
        <Helmet titleTemplate="%s | Pizza Web Shop" />
        <Toaster richColors />
        <RouterProvider router={router} />
      </HelmetProvider>
    </ThemeProvider>
  )
}
