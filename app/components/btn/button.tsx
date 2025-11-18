type Props = {
    link?:string
    name:string
    type?:SubmitEvent
}


export const Button = ({link, name} : Props) => {
    return(
        <button className="bg-blue-900"><a href={link}>{name}</a></button>
    )
}