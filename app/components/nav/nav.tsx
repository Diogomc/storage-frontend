"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"
import { MdMenu } from "react-icons/md"

export const Nav = () => {
  const [open, setOpen] = useState(true)

  return (
    <motion.nav
    initial={{y: -50}}
    animate={{y: 0}}
    transition={{duration: 0.5}}
    className="flex justify-around nav max-md:flex-col bg-second sticky z-999 w-full h-16 text-background">
      
      <ul className="flex items-center justify-between flex-row-reverse">
        <li>
          <img className="w-15" src="/logo.jpg" alt="Logo" />
        </li>
        <li className="max-md:p-2">
          <MdMenu
            size={50}
            className="hidden max-md:block"
            onClick={() => setOpen(!open)}
          />
        </li>
      </ul>

      <ul className={`flex items-center max-md:flex-col bg-second p-8 text-lg ${open ? 'max-md:hidden' : ''}`}>
        <li className="p-2"><Link href="/home" className="p-2">Home</Link></li>
        <li className="p-2"><Link href="/sobre" className="p-2">Sobre</Link></li>
        <li className="p-2"><Link href="/treinamento" className="p-2">Treinamento</Link></li>
        <li className="p-2"><Link href="/contato" className="p-2">Contato</Link></li>
      </ul>

      <ul className={`flex items-center max-md:flex-col bg-second p-8 text-lg ${open ? 'max-md:hidden' : ''}`}>
        <li className="p-2"><Link href="/login" className="p-2">Entrar</Link></li>
        <li className="p-2"><Link href="/register" className="p-2">Cadastrar</Link></li>
      </ul>

    </motion.nav>
  )
}
