"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react"

interface INavLinks {
    name: string;
    icon: ReactNode;
    url?: string;
}


export const NavLinks = ({ name, icon, url }: INavLinks) => {

    const pathName = usePathname();
    const isCurrentPath = pathName.toLowerCase() == url?.toLowerCase();

    return (
        <div className={`relative ${isCurrentPath ? "bg-linear-to-r from-purple-300 to-white text-main-color font-bold" : "bg-none"}`}>
            {isCurrentPath &&
                <span className="absolute w-1 h-full bg-purple-700"></span>
            }
            {url ? (
                <Link className="flex w-full p-3 items-center" href={url}>
                    {icon} {name}
                </Link>
            ) : (
                <>
                    {icon} {name}
                </>
            )}
        </div>
    )
}