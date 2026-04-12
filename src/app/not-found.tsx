import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-white">
      <div className="card max-w-[520px] w-full flex flex-col items-center justify-center p-12">
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-[64px] font-medium leading-[1] tracking-[0px] bg-[linear-gradient(180deg,#171717_0%,rgba(23,23,23,0.5)_100%)] bg-clip-text text-transparent">
              404
            </h1>
            <h2 className="text-[18px] font-medium leading-[24px] tracking-[0px] text-neutral-500 text-center">
              Page not found
            </h2>
          </div>

          <p className="text-[14px] font-normal leading-[20px] tracking-[0px] text-neutral-600 text-center max-w-[320px]">
            The page you are looking for doesn't exist or has been moved.
          </p>

          <Link
            href="/"
            className="mt-4 px-6 py-3 rounded-lg bg-neutral-900/10 hover:bg-neutral-900/15 transition-colors duration-300 ease-out"
          >
            <span className="text-[14px] font-medium leading-[100%] tracking-[0px] bg-[linear-gradient(180deg,#171717_0%,rgba(23,23,23,0.65)_100%)] bg-clip-text text-transparent">
              Back to Home
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}
