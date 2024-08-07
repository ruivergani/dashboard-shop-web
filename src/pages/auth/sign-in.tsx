import { useMutation } from "@tanstack/react-query"
import { Helmet } from "react-helmet-async"
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import { toast } from "sonner"
import { z } from "zod"

import { signIn } from "@/api/sign-in.ts"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const signInForm = z.object({
  email: z.string().email(),
})
type signInForm = z.infer<typeof signInForm>

export function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<signInForm>()

  const { mutateAsync: authenticate } = useMutation({
    mutationFn: signIn,
  })

  async function handleSignIn(data: signInForm) {
    try {
      await authenticate({ email: data.email })
      
      toast.success("Sent an authentication link to your e-mail.", {
        action: {
          label: "Send again",
          onClick: () => handleSignIn(data),
        },
      })
    } catch {
      toast.error("Try again, unexpected error occured.")
    }
  }

  return (
    <>
      <Helmet title="Login" />
      <div className="p-8">
        <Button
          asChild
          variant={"secondary"}
          className="absolute right-8 top-8"
        >
          <Link to="/sign-up">New Shop</Link>
        </Button>
        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tighter">
              Access Dashboard
            </h1>
            <p className="text-sm text-muted-foreground">
              Track your sales through the partner dashboard!
            </p>
          </div>
          <form
            action=""
            className="flex flex-col gap-4"
            onSubmit={handleSubmit(handleSignIn)}
          >
            <div className="space-y-2">
              <Label htmlFor="email">Your E-mail</Label>
              <Input
                id="email"
                type="email"
                {...register("email")}
              ></Input>
            </div>
            <Button
              className="w-full"
              disabled={isSubmitting}
            >
              Access Panel
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}
