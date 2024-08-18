import { useQuery } from "@tanstack/react-query"
import { Building, ChevronDown, LogOut } from "lucide-react"

import { getManagedRestaurant } from "@/api/get-managed-restaurant"
import { getProfile } from "@/api/get-profile"

import { Button } from "./ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"

export function AccountMenu() {
  const { data: profile } = useQuery({
    queryKey: ["profile"], // identification for the same request in different places
    queryFn: getProfile,
  })
  const { data: managedRestaurant } = useQuery({
    queryKey: ["managed-restaurant"], // identification for the same request in different places
    queryFn: getManagedRestaurant,
  })

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="flex select-none items-center gap-2"
        >
          {managedRestaurant?.name}
          <ChevronDown size={16}></ChevronDown>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-56"
      >
        <DropdownMenuLabel className="flex flex-col">
          <span>Rui Neto</span>
          <span className="text-xs font-normal text-muted-foreground">
            ruiverganineto@gmail.com
          </span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Building className="mr-2 h-4 w-4"></Building>
          <span>Shop Profile</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="text-rose-500 dark:text-rose-400">
          <LogOut className="mr-2 h-4 w-4"></LogOut>
          <span>Exit</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
