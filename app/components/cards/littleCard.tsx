import Link from "next/link";
import { PropsWithChildren } from "react"
import { LuSquareArrowOutUpRight } from "react-icons/lu";
interface ILittleCard extends PropsWithChildren {
    title: string;
    value?: string | number;
    link?: string;
}


export const LittleCard = ({ title, value, children, link }: ILittleCard) => {

    return (
        <>
                <div className="w-full flex flex-col  text-left my-2
        max-md:w-full max-md:m-0 max-md:bg-white max-md:rounded-md max-md:p-2">
                    <p className="max-md:text-base">{title}</p>
                    <div className="flex justify-between items-center ">
                        <p className="font-bold text-4xl text-main-color max-md:text-lg">{value}</p>
                        {link &&
                            <Link href={link} className="text-main-color hover:bg-[#F8F1FF] rounded-md transition-colors duration-300 p-2">
                                <LuSquareArrowOutUpRight size={25} />
                            </Link>
                        }
                    </div>
                    <span className="text-gray-500 text-sm max-md:text-xs">{children}</span>
                </div>

            <span className="h-16 bg-gray-300 w-px last:hidden max-md:hidden" />
        </>

    )
}