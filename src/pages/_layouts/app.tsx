import { Outlet } from "react-router-dom"

export function AppLayout() {
  return (
    <>
      <h1>Cabecalho</h1>
      <div>
        <Outlet />
      </div>
    </>
  )
}
