import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"

import { getManagedRestaurant } from "@/api/get-managed-restaurant"
import { updateProfile } from "@/api/update-profile"

import { Button } from "./ui/button"
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Textarea } from "./ui/textarea"

const storeProfileSchema = z.object({
  name: z.string().min(1),
  description: z.string(),
})

type StoreProfileSchema = z.infer<typeof storeProfileSchema>

export function StoreProfileDialog() {
  const queryClient = useQueryClient()
  // API React Query
  const { data: managedRestaurant } = useQuery({
    queryKey: ["managed-restaurant"], // identification for the same request in different places
    queryFn: getManagedRestaurant,
    staleTime: Infinity, // do not load this when return to screen focus
  })

  // Form Validation
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<StoreProfileSchema>({
    resolver: zodResolver(storeProfileSchema),
    values: {
      name: managedRestaurant?.name ?? "",
      description: managedRestaurant?.description ?? "",
    },
  })

  // Update Profile function
  const { mutateAsync: updateProfileFn } = useMutation({
    mutationFn: updateProfile,
    // Cache manipulation with queryClient
    onSuccess(_, { name, description }) {
      const cached = queryClient.getQueryData(["managed-restaurant"]) // retrieves the current cached data for the managed restaurant
      if (cached) {
        // Updates the cached data by merging existing data with new name, and description.
        queryClient.setQueryData(["managed-restaurant"], {
          ...cached,
          name,
          description,
        })
      }
    },
  })

  async function handleUpdateProfile(data: StoreProfileSchema) {
    try {
      await updateProfileFn({
        name: data.name,
        description: data.description,
      })
      toast.success("Profile updated successfuly.")
    } catch {
      toast.error("Error when updating profile, try again.")
    }
  }

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Store Profile</DialogTitle>
        <DialogDescription>
          Update the information from your store visible to your client.
        </DialogDescription>
      </DialogHeader>

      <form onSubmit={handleSubmit(handleUpdateProfile)}>
        <div className="space-y-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label
              htmlFor="name"
              className="text-right"
            >
              Name
            </Label>
            <Input
              className="col-span-3"
              id="name"
              {...register("name")}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label
              htmlFor="description"
              className="text-right"
            >
              Description
            </Label>
            <Textarea
              className="col-span-3"
              id="description"
              {...register("description")}
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button
              variant="ghost"
              type="button"
            >
              Cancel
            </Button>
          </DialogClose>
          <Button
            type="submit"
            variant="success"
            disabled={isSubmitting}
          >
            Save
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  )
}
