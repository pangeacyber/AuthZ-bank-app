import { Button } from "@/components/ui/button"
import { DropdownMenuTrigger, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { SVGProps } from "react";

type Props = {
  person: {
    userName: string;
    userId: string;
  }
};

export function Admin({ person }: Readonly<Props>) {
  return (
    <div className="grid min-h-screen w-full p-6">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[80px]">Profession</TableHead>
            <TableHead className="max-w-[150px]">Name</TableHead>
            <TableHead className="hidden md:table-cell">Account #</TableHead>
            <TableHead className="hidden md:table-cell">Balance</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>
              <HammerIcon className="h-6 w-6 text-[#b78c4a]" />
            </TableCell>
            <TableCell className="font-medium">{person.userName}</TableCell>
            <TableCell className="hidden md:table-cell">{person.userId}</TableCell>
            <TableCell className="hidden md:table-cell">$12,345.67</TableCell>
            <TableCell>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button size="icon" variant="ghost">
                    <MoveHorizontalIcon className="w-4 h-4" />
                    <span className="sr-only">Actions</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>View account</DropdownMenuItem>
                  <DropdownMenuItem>Deposit</DropdownMenuItem>
                  <DropdownMenuItem>Withdraw</DropdownMenuItem>
                  <DropdownMenuItem>Transfer</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <HammerIcon className="h-6 w-6 text-[#b78c4a]" />
            </TableCell>
            <TableCell className="font-medium">Jane Smith</TableCell>
            <TableCell className="hidden md:table-cell">87654321</TableCell>
            <TableCell className="hidden md:table-cell">$10,000.00</TableCell>
            <TableCell>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button size="icon" variant="ghost">
                    <MoveHorizontalIcon className="w-4 h-4" />
                    <span className="sr-only">Actions</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>View account</DropdownMenuItem>
                  <DropdownMenuItem>Deposit</DropdownMenuItem>
                  <DropdownMenuItem>Withdraw</DropdownMenuItem>
                  <DropdownMenuItem>Transfer</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <HammerIcon className="h-6 w-6 text-[#b78c4a]" />
            </TableCell>
            <TableCell className="font-medium">Bob Johnson</TableCell>
            <TableCell className="hidden md:table-cell">98765432</TableCell>
            <TableCell className="hidden md:table-cell">$2,500.00</TableCell>
            <TableCell>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button size="icon" variant="ghost">
                    <MoveHorizontalIcon className="w-4 h-4" />
                    <span className="sr-only">Actions</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>View account</DropdownMenuItem>
                  <DropdownMenuItem>Deposit</DropdownMenuItem>
                  <DropdownMenuItem>Withdraw</DropdownMenuItem>
                  <DropdownMenuItem>Transfer</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <HammerIcon className="h-6 w-6 text-[#b78c4a]" />
            </TableCell>
            <TableCell className="font-medium">Sarah Lee</TableCell>
            <TableCell className="hidden md:table-cell">54321987</TableCell>
            <TableCell className="hidden md:table-cell">$7,500.00</TableCell>
            <TableCell>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button size="icon" variant="ghost">
                    <MoveHorizontalIcon className="w-4 h-4" />
                    <span className="sr-only">Actions</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>View account</DropdownMenuItem>
                  <DropdownMenuItem>Deposit</DropdownMenuItem>
                  <DropdownMenuItem>Withdraw</DropdownMenuItem>
                  <DropdownMenuItem>Transfer</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <HammerIcon className="h-6 w-6 text-[#b78c4a]" />
            </TableCell>
            <TableCell className="font-medium">Michael Brown</TableCell>
            <TableCell className="hidden md:table-cell">23456789</TableCell>
            <TableCell className="hidden md:table-cell">$3,000.00</TableCell>
            <TableCell>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button size="icon" variant="ghost">
                    <MoveHorizontalIcon className="w-4 h-4" />
                    <span className="sr-only">Actions</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>View account</DropdownMenuItem>
                  <DropdownMenuItem>Deposit</DropdownMenuItem>
                  <DropdownMenuItem>Withdraw</DropdownMenuItem>
                  <DropdownMenuItem>Transfer</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
      
  )
}



function HammerIcon(props: Readonly<SVGProps<SVGSVGElement>>) {
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
      <path d="m15 12-8.373 8.373a1 1 0 1 1-3-3L12 9" />
      <path d="m18 15 4-4" />
      <path d="m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172V7l-2.26-2.26a6 6 0 0 0-4.202-1.756L9 2.96l.92.82A6.18 6.18 0 0 1 12 8.4V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5" />
    </svg>
  )
}

function MoveHorizontalIcon(props: Readonly<SVGProps<SVGSVGElement>>) {
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
      <polyline points="18 8 22 12 18 16" />
      <polyline points="6 8 2 12 6 16" />
      <line x1="2" x2="22" y1="12" y2="12" />
    </svg>
  )
}

