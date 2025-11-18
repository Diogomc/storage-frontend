import "@/app/components/nav/nav.css"
export const Nav = () => {
    return (
        <div className="flex justify-around nav">
            <ul className="items-center"> 
                <li><img className="w-20" src="logo.jpg" alt="" /></li>
            </ul>
            <ul className="flex items-center">
                <li><a className="p-2" href="#">Home</a></li>
                <li><a className="p-2" href="#">Sobre</a></li>
                <li><a className="p-2" href="#">Treinamento</a></li>
                <li><a className="p-2" href="#">Contato</a></li>
            </ul>
            <ul className="flex items-center">
                <li><a className="p-2" href="#">Entrar</a></li>
                <li><a className="p-2" href="#">Cadastrar</a></li>
            </ul>
        </div>
    )
}