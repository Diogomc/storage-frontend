import "@/app/components/btn/button.css"

type Props = {
    link?:string
    name:string
    type?: "button" | "submit" | "reset";
    onClick?: () => void
}


export const Button = ({link, name, onClick} : Props) => {
    return(
        <button className="btn" onClick={onClick}><a href={link}>{name}</a></button>
    )
}