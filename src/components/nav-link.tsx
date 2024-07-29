import { Link, LinkProps, useLocation } from "react-router-dom"

export type NavLinkProps = LinkProps

export function NavLink(props: NavLinkProps) {
  const { pathname } = useLocation() // returns info about current route

  return (
    <Link
      data-current={pathname === props.to} // if route is equal to where the link goes -> active
      className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground data-[current=true]:text-foreground"
      {...props}
    ></Link>
  )
}
