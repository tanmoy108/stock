'use client'
import { useEffect } from 'react'
type NextError = Error & { digest?: string };
export default function Error({ error, reset }: { error: NextError; reset: () => void }) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div className='w-screen h-screen flex flex-col justify-center items-center'>
            <h2>Something went wrong!</h2>
            <button className='bg-[#6425FE] px-4 py-2 text-white'
                onClick={
                    () => reset()
                }
            >
                Try again
            </button>
        </div>
    )
}