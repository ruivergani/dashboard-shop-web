import { Utensils } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function MonthOrderAmount() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base">Orders (mes)</CardTitle>
        <Utensils className="h-4 w-4 text-muted-foreground"></Utensils>
      </CardHeader>
      <CardContent className="space-y-1">
        <span className="text-2xl font-bold tracking-tight">246</span>
        <p className="text-xs text-muted-foreground">
          <span className="text-emerald-500 dark:text-emerald-400">+6%</span>{" "}
          relation with last month
        </p>
      </CardContent>
    </Card>
  )
}
