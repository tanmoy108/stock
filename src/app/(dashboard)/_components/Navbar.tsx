import React from 'react'
import MobileNavbar from './MobileNavbar'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='w-full flex items-center justify-between'>
        <MobileNavbar/>
        <Link href="/">
        <Image src={"/Ellipse.png"} alt="man face" width={40} height={40} />
        </Link>
    </div>
  )
}

export default Navbar