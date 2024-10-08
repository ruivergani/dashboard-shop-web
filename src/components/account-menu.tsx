import { useMutation, useQuery } from "@tanstack/react-query"
import { Building, ChevronDown, LogOut } from "lucide-react"
import { useNavigate } from "react-router-dom"

import { getManagedRestaurant } from "@/api/get-managed-restaurant"
import { getProfile } from "@/api/get-profile"
import { signOut } from "@/api/sign-out"

import { StoreProfileDialog } from "./store-profile-dialog"
import { Button } from "./ui/button"
import { Dialog, DialogTrigger } from "./ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"
import { Skeleton } from "./ui/skeleton"

export function AccountMenu() {
  const navigate = useNavigate()

  const { data: profile, isLoading: isLoadingProfile } = useQuery({
    queryKey: ["profile"], // identification for the same request in different places
    queryFn: getProfile,
  })
  const { data: managedRestaurant, isLoading: isLoadingManagedRestaurant } =
    useQuery({
      queryKey: ["managed-restaurant"], // identification for the same request in different places
      queryFn: getManagedRestaurant,
      staleTime: Infinity, // do not load this when return to screen focus
    })
  // Sign Out Function
  const { mutateAsync: signOutFn, isPending: isSigningOut } = useMutation({
    mutationFn: signOut,
    onSuccess: () => {
      navigate("/sign-in", { replace: true }) // substituir a rota evitando usuario clicar no botao de voltar e retornar para o dashboard
    },
  })

  return (
    <Dialog>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="flex select-none items-center gap-2"
          >
            {isLoadingManagedRestaurant ? (
              <Skeleton className="h-4 w-40" />
            ) : (
              managedRestaurant?.name
            )}
            <ChevronDown size={16}></ChevronDown>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          className="w-56"
        >
          <DropdownMenuLabel className="flex flex-col">
            {isLoadingProfile ? (
              <div className="space-y-1.5">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-3 w-24" />
              </div>
            ) : (
              <>
                <span>{profile?.name}</span>
                <span className="text-xs font-normal text-muted-foreground">
                  {profile?.email}
                </span>
              </>
            )}
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DialogTrigger asChild>
            <DropdownMenuItem>
              <Building className="mr-2 h-4 w-4"></Building>
              <span>Store Profile</span>
            </DropdownMenuItem>
          </DialogTrigger>
          <DropdownMenuItem
            className="text-rose-500 dark:text-rose-400"
            asChild
            disabled={isSigningOut}
          >
            <button
              onClick={() => signOutFn()}
              className="w-full"
            >
              <LogOut className="mr-2 h-4 w-4"></LogOut>
              <span>Exit</span>
            </button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <StoreProfileDialog />
    </Dialog>
  )
}
