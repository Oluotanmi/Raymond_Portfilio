'use client'

import Link from "next/link"
import React,{useState} from "react"
import NavLink from './NavLink'

const MenuOverlay = ({ links }) => {
    return(
    <ul className="flex flex-col py-4 items-center bg-[#121212] text-white">
       {
        links.map((link,index) => (
            <li key={index}>
                <NavLink
                 href={link.path} 
                 title={link.title} 
                />
            </li>
        ))
       } 
    </ul>
    )
}

export default MenuOverlay;