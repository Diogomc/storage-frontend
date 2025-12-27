"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"
import { MdMenu } from "react-icons/md"
import { AiOutlineHome } from "react-icons/ai";

export const Nav = () => {
  const [open, setOpen] = useState(true)

  return (
    <motion.nav
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex justify-around nav max-md:flex-col bg-second sticky z-999 h-16 w-full max-md:h-full text-background">

      <ul className="flex items-center justify-between flex-row-reverse ">
        <li className="max-md:p-2">
          <img className="w-12" src="/logo.jpg" alt="Logo" />
        </li>
        <li className="max-md:p-2">
          <MdMenu
            size={50}
            className="hidden max-md:block"
            onClick={() => setOpen(!open)}
          />
        </li>
      </ul>

      <ul className={`flex items-center max-md:flex-col bg-second text-lg ${open ? 'max-md:hidden' : ''}`}>
        <li className="p-2 flex items-center">
          <AiOutlineHome /><Link href="/home" className="p-2"> Home</Link>
        </li>
        <li className="p-2">
          <Link href="/sobre" className="p-2">Sobre</Link>
        </li>
        <li className="p-2"><Link href="/treinamento" className="p-2">Treinamento</Link></li>
        <li className="p-2"><Link href="/contato" className="p-2">Contato</Link></li>
      </ul>

      <ul className={`flex items-center max-md:flex-col bg-second text-lg max-md:p-6 ${open ? 'max-md:hidden' : ''}`}>
        <li className="p-2"><Link href="/login" className="p-2">Entrar</Link></li>
        <li className="p-2"><Link href="/register" className="p-2">Cadastrar</Link></li>
      </ul>

    </motion.nav>
  )
}
