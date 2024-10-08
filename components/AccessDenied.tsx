/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/1mVUAH0JB4r
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link"
import { SVGProps } from "react"

export function AccessDenied() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-6">
      <div className="bg-red-500 rounded-full p-4">
        <TriangleAlertIcon className="h-8 w-8 text-white" />
      </div>
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Access Denied</h1>
        <p className="text-gray-500 dark:text-gray-400">You do not have permission to access the requested assets.</p>
      </div>
      <Link
        className="inline-flex h-10 items-center justify-center rounded-md bg-red-500 px-6 text-sm font-medium text-white shadow transition-colors hover:bg-red-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-red-600 disabled:pointer-events-none disabled:opacity-50 dark:bg-red-600 dark:hover:bg-red-700 dark:focus-visible:ring-red-700"
        href="/"
      >
        Go Back
      </Link>
      <div className="inline-flex items-center justify-center w-full h-40 relative"><iframe src="https://giphy.com/embed/alcf7hhlSTSfPYHKaJ" width="480" height="192" allowFullScreen></iframe></div>
    </div>
  )
}

function TriangleAlertIcon(props: SVGProps<SVGSVGElement>) {
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
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
    </svg>
  )
}
