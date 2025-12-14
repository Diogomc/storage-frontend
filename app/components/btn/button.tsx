import { IconType } from "react-icons";

type Props = {
    link?:string
    name:string
    icon?:IconType
    type?: "button" | "submit" | "reset";
    onClick?: () => void
}


export const Button = ({link, name, icon:Icon, onClick} : Props) => {
    return(
        <button className="cursor-pointer bg-blue-800 p-2 m-2 rounded-md
         hover:bg-blue-600 hover:transition duration-400 text-foreground" onClick={onClick}>
            <a href={link} className="flex items-center justify-center">{Icon && <Icon size={20}/>}{name}</a></button>
    )
}