type OrderStatus =
  | "pending"
  | "canceled"
  | "processing"
  | "delivering"
  | "delivered"

interface OrderStatusProps {
  status: OrderStatus
}

// for each state I will add text
const orderStatusMap: Record<OrderStatus, string> = {
  pending: "Pending",
  canceled: "Canceled",
  processing: "Processing",
  delivering: "Delivering",
  delivered: "Delivered",
}

export function OrderStatus({ status }: OrderStatusProps) {
  return (
    <div className="flex items-center gap-2">
      {status === "pending" && (
        <span className="h-2 w-2 rounded-full bg-slate-400"></span>
      )}
      {status === "canceled" && (
        <span className="h-2 w-2 rounded-full bg-red-600"></span>
      )}
      {status === "delivered" && (
        <span className="h-2 w-2 rounded-full bg-green-600"></span>
      )}
      {["processing", "delivering"].includes(status) && (
        <span className="h-2 w-2 rounded-full bg-amber-500"></span>
      )}
      <span className="font-medium text-muted-foreground">
        {orderStatusMap[status]}
      </span>
    </div>
  )
}
