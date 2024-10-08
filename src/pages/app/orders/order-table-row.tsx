import { formatDistanceToNow } from "date-fns"
import { ArrowRight, Search, X } from "lucide-react"

import { OrderStatus } from "@/components/order-status"
import { Button } from "@/components/ui/button"
import { Dialog, DialogTrigger } from "@/components/ui/dialog"
import { TableCell, TableRow } from "@/components/ui/table"

import { OrderDetails } from "./order-details"

export interface OrderTableRowProps {
  order: {
    orderId: string
    createdAt: string
    status: "pending" | "canceled" | "processing" | "delivering" | "delivered"
    customerName: string
    total: number
  }
}
export function OrderTableRowCustom({ order }: OrderTableRowProps) {
  return (
    <TableRow>
      <TableCell>
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              size="xs"
            >
              <Search className="h-3 w-3"></Search>
              <span className="sr-only">Details of order</span>
            </Button>
          </DialogTrigger>
          <OrderDetails />
        </Dialog>
      </TableCell>
      <TableCell className="font-mono text-xs font-medium">
        {order.orderId}
      </TableCell>
      <TableCell className="text-muted-foreground">
        {formatDistanceToNow(order.createdAt, {
          addSuffix: true, // add the word ago
        })}
      </TableCell>
      <TableCell>
        <OrderStatus status={order.status}></OrderStatus>
      </TableCell>
      <TableCell className="font-medium">{order.customerName}</TableCell>
      <TableCell className="font-medium">
        {order.total.toLocaleString("gb-EN", {
          style: "currency",
          currency: "GBP",
        })}
      </TableCell>
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
  )
}
