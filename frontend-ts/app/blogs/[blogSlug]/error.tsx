'use client'

export default function Error({
  error
}: {
  error: Error
}) {
  
  return (
    <div className="mx-5">
      <h1 className="text-4xl mt-5 mb-5 text-center">ERROR {error.message} - NOT FOUND</h1>
    </div>
  )
}