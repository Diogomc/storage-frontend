import { useState } from "react"
import { MdMenu } from "react-icons/md";
export const Nav = () => {

    const [open, setOpen] = useState(true)
    const handleMenuOpen = () => {
        setOpen(!open)
    }
    return (
        <div className="flex justify-around nav max-md:flex-col bg-second sticky top-0 z-999 w-full">
            <ul className="items-center flex justify-between flex-row-reverse"> 
                <li><img className="w-20" src="logo.jpg" alt="" /></li>
                <li className="max-md:p-2"> <MdMenu size={50} className="hidden max-md:block" onClick={() => handleMenuOpen()}/></li>
            </ul>
            <ul className={`flex items-center max-md:flex-col ${open ? 'max-md:hidden' : ''}`} >
                <li><a className="p-2" href="#">Home</a></li>
                <li><a className="p-2" href="#">Sobre</a></li>
                <li><a className="p-2" href="#">Treinamento</a></li>
                <li><a className="p-2" href="#">Contato</a></li>
            </ul>
            <ul className={`flex items-center max-md:flex-col ${open ? 'max-md:hidden' : ''}`}>
                <li><a className="p-2" href="#">Entrar</a></li>
                <li><a className="p-2" href="#">Cadastrar</a></li>
            </ul>
        </div>
    )
}