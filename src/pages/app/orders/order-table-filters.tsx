import { Search, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function OrderTableFilter() {
  return (
    <form
      action=""
      className="flex items-center gap-2"
    >
      <span className="text-sm font-semibold">Filters:</span>
      <Input
        placeholder="ID of order"
        className="h-8 w-auto"
      ></Input>
      <Input
        placeholder="Client name"
        className="h-8 w-[320px]"
      ></Input>
      <Select>
        <SelectTrigger className="h-8 w-[180px]">
          <SelectValue placeholder="Filter by Status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All</SelectItem>
          <SelectItem value="pending">Pending</SelectItem>
          <SelectItem value="cancelled">Cancelled</SelectItem>
          <SelectItem value="processing">Preparing</SelectItem>
          <SelectItem value="delivering">Out for delivery</SelectItem>
          <SelectItem value="delivered">Delivered</SelectItem>
        </SelectContent>
      </Select>

      <Button
        type="submit"
        variant="secondary"
        size="xs"
      >
        <Search
          size="xs"
          className="mr-2 h-4 w-4"
        ></Search>
        Filter results
      </Button>

      <Button
        type="button"
        variant="outline"
        size="xs"
      >
        <X
          size="xs"
          className="mr-2 h-4 w-4"
        ></X>
        Remove filters
      </Button>
    </form>
  )
}
