'use client'

import Link from "next/link"
import React,{useState} from "react"

const NavLink = ({ href, title }) => {
    return(
     <Link
       href={href}
       className="block py-2 pl-3 pr-4 text-[3ASB7BE] sm:text-xl rounded md:p-0 "
     >
        {title}
     </Link>
    )
}

export default NavLink;