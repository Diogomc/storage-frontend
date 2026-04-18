"use client"

import { useState } from "react"
import { MdMenu } from "react-icons/md"
import { MdOutlineAnalytics } from "react-icons/md";
import { FaBoxOpen } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { MdCategory } from "react-icons/md";
import { MdSupportAgent } from "react-icons/md";
import { NavLinks } from "./navLinks";
import { FaIndustry } from "react-icons/fa6";
import { FaPeopleGroup } from "react-icons/fa6";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { FaTruckFront } from "react-icons/fa6";
import Link from "next/link";

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

        <ul className="bg-white border-r border-gray-200 h-screen flex flex-col">
          <li className="rounded-md bg-linear-to-r from-main-color to-purple-400 p-4 text-center text-3xl m-8 text-white font-serif">StockLab</li>
          <li className="cursor-pointer"><NavLinks url="home" name="Home" icon={<GoHomeFill size={25} className="m-2" />} /></li>
          <li className="cursor-pointer"><NavLinks url="/dashboard" name="Dashboard" icon={<MdOutlineAnalytics size={25} className="m-2" />} /></li>
          <li className="cursor-pointer"><NavLinks url="/Products" name="Produtos" icon={<FaBoxOpen size={25} className="mx-8 my-1" />} /></li>
          <li className="cursor-pointer"><NavLinks url="/" icon={<FaIndustry size={25} className="mx-8 my-1" />} name="Fornecedores" /></li>

          <li className="cursor-pointer flex items-center p-3"><RiMoneyDollarCircleLine size={25} className="m-2" />Despesas</li>
          <li className="cursor-pointer"><NavLinks url="/" icon={<FaPeopleGroup size={25} className="mx-8 my-1" />} name="Funcionários" /></li>
          <li className="cursor-pointer"><NavLinks url="/" icon={<FaTruckFront size={25} className="mx-8 my-1" />} name="Caminhões" /></li>
          <li className="cursor-pointer"><NavLinks url="/" icon={<MdSupportAgent size={26} className="m-2" />} name="Suporte" /></li>
        </ul>
      </div>

      <div className="hidden max-md:block max-md:w-full">
        <ul className="flex justify-around bottom-0 z-999 left-0 right-0 fixed bg-white border-t border-gray-200 p-4">
          <li className="flex flex-col items-center">
            <p><GoHomeFill size={30} /></p>
            <p className="text-gray-400 text-sm">Home</p>
          </li>
          <li className="flex flex-col items-center">
            <Link href={"/Products"}><p><FaBoxOpen size={30} /></p></Link>
            <p className="text-gray-400 text-sm">Produtos</p>
          </li>
          <li className="flex flex-col items-center ">
            <Link href="dashboard"><p className="bg-main-color rounded-full p-2 text-white"><MdOutlineAnalytics size={30} /></p></Link>
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
