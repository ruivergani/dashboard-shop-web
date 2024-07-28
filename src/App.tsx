import "./global.css"

import { RouterProvider } from "react-router-dom"

import { router } from "./routes"
import { Helmet, HelmetProvider } from "react-helmet-async"

export function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | Pizza Web Shop" />
      <RouterProvider router={router} />
    </HelmetProvider>
  )
}