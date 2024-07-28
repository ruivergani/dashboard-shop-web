import { Outlet } from "react-router-dom"

export function AuthLayout() {
  return (
    <>
      <h1>Autenticacao</h1>
      <div>
        <Outlet />
      </div>
    </>
  )
}
