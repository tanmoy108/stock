import Link from "next/link";

export default function Page() {
    return (
        <>
            <main className="grid h-screen place-items-centerpx-6 py-24 sm:py-32 lg:px-8">
                <div className="text-center">
                    <p className="text-base font-bold text-[#858585]">404</p>
                    <h1 className="mt-4 text-3xl font-bold tracking-tight text-[#5e5e5e] sm:text-5xl">Page not found</h1>
                    <p className="mt-6 text-base leading-7 text-[#6425FE]">The Page is not Ready</p>
                    <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-x-6">
                        <Link
                            href="/"
                            className="rounded-md bg-[#6425FE] mb-5 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#8860ee] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6425FE]"
                        >
                            Go back home
                        </Link>
                    </div>
                </div>
            </main>
        </>
    )
}