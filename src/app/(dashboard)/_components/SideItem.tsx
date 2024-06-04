'use client'
import { usePathname, useRouter } from 'next/navigation'
import {cn} from "@/lib/utils"

interface propsValue {
    icon:string,
    iconActive:string,
    label:string,
    href:string,
}

const SideItem = ({icon,iconActive,label,href}:propsValue) => {
    const pathname = usePathname();
    const router = useRouter();
    const isActive = (pathname === "/" && href==="/") || pathname === href || pathname?.startsWith(`${href}/`) 

   const  handleClick = () =>{
    router.push(href)
   } 

  return (
    <button type='button' className={cn("pl-8 flex items-center gap-x-3 transition-all",isActive && "bg-[#EFE9FF] " )} onClick={handleClick}>
       <div className={cn('w-full flex items-center gap-x-3  py-4 text-[#84828A]',isActive && 'text-[#6425FE] font-bold')}> 
       <img src={isActive ? iconActive :icon} alt={label} />
        {label}
       </div>
       <div className={cn('opacity-0 border-4 border-[#6425FE] h-14 transition-all',isActive && 'opacity-100')}/>
    </button>
  )
}

export default SideItem