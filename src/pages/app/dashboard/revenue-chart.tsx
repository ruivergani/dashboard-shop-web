import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"
import colors from "tailwindcss/colors"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const data = [
  {
    date: "10/12",
    revenue: 1200,
  },
  {
    date: "11/12",
    revenue: 1000,
  },
  {
    date: "12/12",
    revenue: 1700,
  },
  {
    date: "13/12",
    revenue: 900,
  },
  {
    date: "14/12",
    revenue: 800,
  },
  {
    date: "15/12",
    revenue: 2300,
  },
  {
    date: "16/12",
    revenue: 1600,
  },
]

export function RevenueChart() {
  return (
    <Card className="col-span-6">
      <CardHeader className="flex flex-row items-center justify-between pb-8">
        <div className="space-y-1">
          <CardTitle className="text-base font-medium">
            Income in the period
          </CardTitle>
          <CardDescription>Daily Income in the period</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer
          width="100%"
          height={240}
        >
          <LineChart
            style={{ fontSize: 12 }}
            data={data}
          >
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              dy={16}
            />
            <YAxis
              stroke="#888"
              axisLine={false}
              tickLine={false}
              width={70}
              tickFormatter={(value: number) =>
                value.toLocaleString("en-GB", {
                  style: "currency",
                  currency: "GBP",
                })
              }
            />
            <CartesianGrid
              vertical={false}
              className="stroke-muted"
            ></CartesianGrid>
            <Line
              type="linear"
              strokeWidth={2}
              dataKey="revenue"
              stroke={colors.violet["500"]}
            ></Line>
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
