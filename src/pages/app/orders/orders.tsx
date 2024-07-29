import { ArrowRight, Search, X } from "lucide-react"
import { Helmet } from "react-helmet-async"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export function Orders() {
  return (
    <>
      <Helmet title="Orders" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Orders</h1>
        <div className="space-y-2.5">
          <form
            action=""
            className="flex items-center gap-2"
          >
            <span className="text-sm font-semibold">Filters:</span>
            <Input
              placeholder="Client name"
              className="h-8 w-[320px]"
            ></Input>
          </form>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[64px]"></TableHead>
                  <TableHead className="w-[140px]">Identificator</TableHead>
                  <TableHead className="w-[180px]">Made in</TableHead>
                  <TableHead className="w-[140px]">Status</TableHead>
                  <TableHead>Client</TableHead>
                  <TableHead className="w-[140px]">Total of Order</TableHead>
                  <TableHead className="w-[164px]"></TableHead>
                  <TableHead className="w-[132px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {Array.from({ length: 10 }).map((_, indice) => {
                  return (
                    <TableRow key={indice}>
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
                      <TableCell className="text-muted-foreground">
                        15 minutes ago
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-slate-400"></span>
                          <span className="font-medium text-muted-foreground">
                            Pending
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-green-600"></span>
                          <span className="font-medium text-muted-foreground">
                            Completed
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-red-600"></span>
                          <span className="font-medium text-muted-foreground">
                            Cancelled
                          </span>
                        </div>
                      </TableCell>
                      <TableCell className="font-medium">
                        Rui Vergani Neto
                      </TableCell>
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
                  )
                })}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </>
  )
}
