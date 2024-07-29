import { ArrowRight, Search, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { TableCell, TableRow } from "@/components/ui/table"

export function OrderTableRowCustom() {
  return (
    <>
      <TableRow>
        <TableCell>
          <Button
            variant="outline"
            size="xs"
          >
            <Search className="h-3 w-3"></Search>
            <span className="sr-only">Details of order</span>
          </Button>
        </TableCell>
        <TableCell className="font-mono text-xs font-medium">
          03454545
        </TableCell>
        <TableCell className="text-muted-foreground">15 minutes ago</TableCell>
        <TableCell>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-slate-400"></span>
            <span className="font-medium text-muted-foreground">Pending</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-green-600"></span>
            <span className="font-medium text-muted-foreground">Completed</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-red-600"></span>
            <span className="font-medium text-muted-foreground">Cancelled</span>
          </div>
        </TableCell>
        <TableCell className="font-medium">Rui Vergani Neto</TableCell>
        <TableCell className="font-medium">$250.00</TableCell>
        <TableCell>
          <Button
            variant="outline"
            size="xs"
          >
            <ArrowRight className="mr-2 h-3 w-3" />
            Approve
          </Button>
        </TableCell>
        <TableCell>
          <Button
            variant="ghost"
            size="xs"
          >
            <X className="mr-2 h-3 w-3"></X>
            Cancel
          </Button>
        </TableCell>
      </TableRow>
    </>
  )
}
