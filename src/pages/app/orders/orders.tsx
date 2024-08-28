import { useQuery } from "@tanstack/react-query"
import { Helmet } from "react-helmet-async"
import { useSearchParams } from "react-router-dom"
import { z } from "zod"

import { getOrders } from "@/api/get-orders"
import { Pagination } from "@/components/pagination"
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { OrderTableFilter } from "./order-table-filters"
import { OrderTableRowCustom } from "./order-table-row"

export function Orders() {
  // Pagination Function => bear in mind that the state of each component is not keep after reloading
  const [searchParams, setSearchParams] = useSearchParams() // save state in the URL

  const pageIndex = z.coerce
    .number()
    .transform(page => page - 1)
    .parse(searchParams.get("page") ?? "1")

  function handlePaginate(pageIndex: number) {
    setSearchParams(state => {
      state.set("page", (pageIndex + 1).toString())

      return state
    })
  }

  // Order Query
  const { data: result } = useQuery({
    queryKey: ["orders", pageIndex], // toda vez que depender de parametro tem que ser incluso aqui
    queryFn: () => getOrders({ pageIndex }),
  })

  return (
    <>
      <Helmet title="Orders" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Orders</h1>
        <div className="space-y-2.5">
          <OrderTableFilter></OrderTableFilter>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[64px]"></TableHead>
                  <TableHead className="w-[140px]">Identificator</TableHead>
                  <TableHead className="w-[180px]">Carried out</TableHead>
                  <TableHead className="w-[140px]">Status</TableHead>
                  <TableHead>Client</TableHead>
                  <TableHead className="w-[140px]">Total of Order</TableHead>
                  <TableHead className="w-[164px]"></TableHead>
                  <TableHead className="w-[132px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {result &&
                  result.orders.map(order => {
                    return (
                      <OrderTableRowCustom
                        key={order.orderId}
                        order={order}
                      ></OrderTableRowCustom>
                    )
                  })}
              </TableBody>
            </Table>
          </div>

          {result && (
            <Pagination
              pageIndex={result.meta.pageIndex}
              totalCount={result.meta.totalCount}
              perPage={result.meta.perPage}
              onPageChange={handlePaginate}
            />
          )}
        </div>
      </div>
    </>
  )
}
