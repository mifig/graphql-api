"use client"

import Link from "next/link"

export default function Error({ error }: { error: Error}) {
  try {
    const parsedError: {error: string, code: number} = JSON.parse(error.message)
    return (
      <div className="flex flex-col gap-5 items-center mt-20">
        <h1 className="text-8xl font-bold">{parsedError.code}</h1>
        <p>{parsedError.error}</p>
  
        {parsedError.code === 401 && <Link href="/login" className="bg-blue-700 px-3 py-2 text-yellow-200 hover:bg-blue-900">Login</Link>}
      </div>
    )
  } catch (e) {
    return (
      <div className="flex flex-col gap-5 items-center mt-20">
        <h1 className="text-8xl font-bold">ERROR</h1>
        <p>An Error occured</p>
  
        <Link href="/login" className="bg-blue-700 px-3 py-2 text-yellow-200 hover:bg-blue-900">Login</Link>
      </div>
    )
  }
}