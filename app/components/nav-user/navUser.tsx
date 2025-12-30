"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"
import { MdMenu } from "react-icons/md"
import { GoHome } from "react-icons/go";
import { GoBook } from "react-icons/go";
import { CiPhone } from "react-icons/ci";
import { TbInfoHexagon } from "react-icons/tb";
import { GoPerson } from "react-icons/go";
export const NavUser = () => {
  const [open, setOpen] = useState(true)

  return (
    <motion.nav
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex justify-around nav max-md:flex-col sticky z-999 h-16 w-full max-md:h-full shadow-2xl/10">

      <ul className="flex items-center justify-between flex-row-reverse ">
        <li className="max-md:p-2">
          <p className="tracking-widest font-bold">StockLab</p>
        </li>
        <li className="max-md:p-2">
          <MdMenu
            size={50}
            className="hidden max-md:block"
            onClick={() => setOpen(!open)}
          />
        </li>
      </ul>

      <ul className={`flex items-center max-md:flex-col  text-lg ${open ? 'max-md:hidden' : ''}`}>
        <li className=" p-2 flex items-center hover:border-b hover:border-blue-800">
          <GoHome size={20} /><Link href="/home" className="p-2"> Home</Link>
        </li>
        <li className="p-2 flex items-center hover:border-b hover:border-blue-800">
          <TbInfoHexagon size={20} /><Link href="/dashboard" className="p-2">Dashboard</Link>
        </li>
        <li className="p-2 flex items-center hover:border-b hover:border-blue-800">
          <GoBook size={20} /><Link href="/Products" className="p-2">Produtos</Link>
        </li>
      </ul>

      <ul className={`flex items-center max-md:flex-col  text-lg max-md:p-6 ${open ? 'max-md:hidden' : ''}`}>
        <li className="p-2 flex items-center hover:border-b hover:border-blue-800">
          <GoPerson size={20} /><Link href="/account" className="p-2">Conta</Link>
        </li>
        <li className="p-2 flex items-center hover:border-b hover:border-blue-800">
          <CiPhone size={20}/><Link href="/Products" className="p-2">Contato</Link>
        </li>
      </ul>

    </motion.nav>
  )
}
