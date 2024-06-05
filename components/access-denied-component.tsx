
export function AccessDeniedComponent() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-gray-950 px-4 py-12 dark:bg-gray-950">
      <div className="relative mx-auto max-w-md overflow-hidden rounded-lg bg-gray-900 shadow-lg dark:bg-gray-800">
        <div className="relative z-10 space-y-6 p-8 text-center">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tight text-red-500">ACCESS DENIED</h1>
            <p className="text-gray-400">
              Unauthorized access to these facilities. Violators will be subject to immediate
              termination by the sherrif.
            </p>
          </div>
          <div className="relative h-40 w-full">
            <img alt="You're Not From Around these parts" className="object-contain" fill src="url('https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdDF6MzZxa2F3cWR4ZjZyZndkOHNjMjJrNGNieG55NWxkbHRsdjVnaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/m5B4JzuoIrrcbibbnc/giphy.gif')" />
          </div>
        </div>
      </div>
    </div>
  )
}
