import { Ban } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function CancelOrderAmountCard() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base">Cancelled (mes)</CardTitle>
        <Ban className="h-4 w-4 text-muted-foreground"></Ban>
      </CardHeader>
      <CardContent className="space-y-1">
        <span className="text-2xl font-bold tracking-tight">18</span>
        <p className="text-xs text-muted-foreground">
          <span className="text-emerald-500 dark:text-emerald-400">-2%</span>{" "}
          relation to yesterday
        </p>
      </CardContent>
    </Card>
  )
}
