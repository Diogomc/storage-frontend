
export const Footer = () => {
    const getCurrentYear = () => {
        return new Date().getFullYear();
    }
    return (
        <footer className="bg-second h-20 flex justify-center gap-10 items-center mt-10 max-md:h-full max-md:flex-col max-md:text-center max-md:p-10 text-background">
            <ul className="flex justify-around">
                <li>© 2025 - {getCurrentYear()} Todos os direitos reservados - <a target="_blank" href="https://www.linkedin.com/in/diogo-marcondes/" className="hover:text-blue-400">Diogo Marcondes</a></li>
            </ul>
            <ul className="flex gap-5 max-md:flex-col max-md:gap-2">
                    <li>Política de Privacidade</li>
                    <li>Política de Cookies</li>
                    <li>Código de Conduta</li>
                </ul>
        </footer>

    )
}