import { Button } from "@/components/ui/button"
import { SVGProps } from "react"

export function Teller() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-gradient-to-b from-amber-300 via-orange-500 to-blue-500 pt-20">
      <div className="relative mx-4 flex max-w-[800px] flex-col items-center rounded-lg bg-white/90 p-8 shadow-lg backdrop-blur-sm md:mx-0">
        <div className="absolute -top-8 flex h-16 w-16 items-center justify-center rounded-full bg-gray-900 text-white">
          <img src="Logo.png" className='h-12 w-12'/>
        </div>
        <div className="mt-8 flex w-full flex-col items-center justify-center">
          <div className="flex w-full flex-col items-center justify-center border-b border-gray-200 pb-6">
            <h2 className="text-2xl font-bold">Old West Bank</h2>
            <p className="text-gray-500">Established 1800</p>
          </div>
          <div className="mt-6 flex w-full flex-col items-center justify-center">
            <div className="flex w-full flex-row items-center justify-between">
              <div className="flex flex-row items-center">
                <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-900 text-white">
                  <UserIcon className="h-6 w-6" />
                </div>
                <div className="flex flex-col items-start">
                  <h4 className="text-lg font-bold">Buck 'Wild Eye' Tibbs</h4>
                  <p className="text-gray-500">Customer</p>
                </div>
              </div>
            </div>
            <div className="mt-6 flex w-full flex-row items-center justify-between border-t border-gray-200 pt-6">
              <Button variant="outline">Deposit</Button>
              <Button variant="outline">Withdraw</Button>
              <Button variant="outline">Transfer</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


function UserIcon(props: Readonly<SVGProps<SVGSVGElement>>) {
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
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}
