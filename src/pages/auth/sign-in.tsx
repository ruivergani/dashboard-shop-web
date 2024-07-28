import { Label } from "@radix-ui/react-label"
import { Helmet } from "react-helmet-async"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function SignIn() {
  return (
    <>
      <Helmet title="Login" />
      <div className="p-8">
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
          >
            <div className="space-y-2">
              <Label htmlFor="email">Your E-mail</Label>
              <Input
                id="email"
                type="email"
              ></Input>
            </div>
            <Button className="w-full">Access Panel</Button>
          </form>
        </div>
      </div>
    </>
  )
}
