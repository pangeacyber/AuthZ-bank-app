import { Button } from "@/components/ui/button"
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { SVGProps } from "react"

export function BankAccount() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 p-6 md:p-10">
        <div className="grid gap-6 md:grid-cols-[1fr_2fr]">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Current Balance</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center justify-center gap-2">
                <div className="text-4xl font-bold">$12,345.67</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">as of May 24, 1824</div>
              </CardContent>
            </Card>
            <div className="grid grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>Transfer Funds</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col items-center justify-center gap-2">
                  <Button size="sm" variant="outline">
                    Transfer
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Pay Bills</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col items-center justify-center gap-2">
                  <Button size="sm" variant="outline">
                    Pay
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Transactions</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Date</TableHead>
                      <TableHead>Description</TableHead>
                      <TableHead className="text-right">Amount</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>May 22, 1824</TableCell>
                      <TableCell>Mercantile</TableCell>
                      <TableCell className="text-right">-$45.23</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>May 20, 1824</TableCell>
                      <TableCell>Prospecting Liscence</TableCell>
                      <TableCell className="text-right">-$1,200.00</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>May 18, 1824</TableCell>
                      <TableCell>Gold Dust</TableCell>
                      <TableCell className="text-right">+$2,500.00</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>May 15, 1824</TableCell>
                      <TableCell>Supply Store</TableCell>
                      <TableCell className="text-right">-$125.00</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>May 12, 1824</TableCell>
                      <TableCell>Canvas Tarp</TableCell>
                      <TableCell className="text-right">-$79.99</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}

function BanknoteIcon(props: Readonly<SVGProps<SVGSVGElement>>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="12" x="2" y="6" rx="2" />
      <circle cx="12" cy="12" r="2" />
      <path d="M6 12h.01M18 12h.01" />
    </svg>
  )
}


function SettingsIcon(props: Readonly<SVGProps<SVGSVGElement>>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}
