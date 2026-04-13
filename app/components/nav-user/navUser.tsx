"use client"

import Link from "next/link"
import { useState } from "react"
import { MdMenu } from "react-icons/md"
import { MdOutlineAnalytics } from "react-icons/md";
import { FaBoxOpen } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { MdCategory } from "react-icons/md";
import { MdSupportAgent } from "react-icons/md";

export const NavUser = () => {
  const [open, setOpen] = useState(false)

  const menuOpened = () => {
    setOpen(prev => !prev)
  }

  return (
    <nav>
      <div className={`h-screen w-16 p-2 bg-white absolute top-0 flex items-center flex-col border-r border-gray-200
        max-md:hidden ` }>
        <button className="cursor-pointer" onClick={menuOpened}><MdMenu size={40} /></button>
      </div>
      <div className={`absolute left-16 top-0 h-screen z-999 w-90 ${open ? 'block' : 'hidden'}`}>
        <ul className="bg-white border-r border-gray-200 h-screen flex flex-col items-center">
          <li className="p-9 cursor-pointer"><Link href="home">Home</Link></li>
          <li className="p-9 cursor-pointer"><Link href="dashboard">Dashboard</Link></li>
          <li className="p-9 cursor-pointer">Produtos</li>
          <li className="p-9 cursor-pointer">Categorias</li>
          <li className="p-9 cursor-pointer">Suporte</li>
        </ul>
      </div>

      <div className="hidden max-md:block">
        <ul className="flex justify-around bottom-0 z-999 left-0 right-0 fixed bg-white border-t border-gray-200 p-4">
          <li className="flex flex-col items-center">
            <p><GoHomeFill size={30} /></p>
            <p className="text-gray-400 text-sm">Home</p>
          </li>
          <li className="flex flex-col items-center">
            <p><FaBoxOpen size={30} /></p>
            <p className="text-gray-400 text-sm">Produtos</p>
          </li>
          <li className="flex flex-col items-center ">
            <p className="bg-(--main-color) rounded-full p-2 text-white"><MdOutlineAnalytics size={30}  /></p>
            <p className="text-gray-400 text-sm">Dashboard</p>
          </li>
          <li className="flex flex-col items-center">
            <p><MdCategory size={30} /></p>
            <p className="text-gray-400 text-sm">Categorias</p>
          </li>
          <li>
            <p><MdSupportAgent size={30} /></p>
            <p className="text-gray-400 text-sm">Suporte</p>
          </li>
        </ul>
      </div>
    </nav>

  )
}
