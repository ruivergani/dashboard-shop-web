import { Label } from "@radix-ui/react-label"
import { useMutation } from "@tanstack/react-query"
import { Helmet } from "react-helmet-async"
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "sonner"
import { z } from "zod"

import { registerRestaurant } from "@/api/register-restaurant"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const signUpForm = z.object({
  restaurantName: z.string(),
  managerName: z.string(),
  phone: z.string(),
  email: z.string().email(),
})
type signUpForm = z.infer<typeof signUpForm>

export function SignUp() {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<signUpForm>()

  const { mutateAsync: registerRestaurantFn } = useMutation({
    mutationFn: registerRestaurant,
  })
  async function handleSignUp(data: signUpForm) {
    try {
      await registerRestaurantFn({
        restaurantName: data.restaurantName,
        managerName: data.managerName,
        phone: data.phone,
        email: data.email,
      })
      toast.success("Restaurant registered successfully.", {
        action: {
          label: "Login",
          onClick: () => navigate(`/sign-in?email=${data.email}`),
        },
      })
    } catch {
      toast.error(
        "Error when registering you as our partner. Try again, unexpected error occured.",
      )
    }
  }

  return (
    <>
      <Helmet title="Register" />
      <div className="p-8">
        <Button
          asChild
          variant={"secondary"}
          className="absolute right-8 top-8"
        >
          <Link to="/sign-in">Sign In</Link>
        </Button>
        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tighter">
              Create free account
            </h1>
            <p className="text-sm text-muted-foreground">
              Be our partner and start your sales!
            </p>
          </div>
          <form
            action=""
            className="flex flex-col gap-4"
            onSubmit={handleSubmit(handleSignUp)}
          >
            <div className="space-y-2">
              <Label htmlFor="restaurantName">Restaurant Name</Label>
              <Input
                id="restaurantName"
                type="text"
                {...register("restaurantName")}
              ></Input>
            </div>
            <div className="space-y-2">
              <Label htmlFor="managerName">Your Name</Label>
              <Input
                id="managerName"
                type="text"
                {...register("managerName")}
              ></Input>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Your E-mail</Label>
              <Input
                id="email"
                type="email"
                {...register("email")}
              ></Input>
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Your Phone</Label>
              <Input
                id="phone"
                type="tel"
                {...register("phone")}
              ></Input>
            </div>
            <Button
              className="w-full"
              disabled={isSubmitting}
            >
              Complete Registration
            </Button>

            <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
              By continuing, you agree to our{" "}
              <a
                href=""
                className="underline underline-offset-4"
              >
                Terms of Service
              </a>{" "}
              and{" "}
              <a
                href=""
                className="underline underline-offset-4"
              >
                Privacy Policy
              </a>
              .
            </p>
          </form>
        </div>
      </div>
    </>
  )
}
