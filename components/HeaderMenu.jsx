'use client'
import Link from "next/link";
import { FaCartShopping } from "react-icons/fa6";

export default function HeaderMenu() {
    const headerMenuItems = [
        {
            id: 1,
            title: "Home",
            link: "/",
            btnClass: ''
        },
        {
            id: 2,
            title: "About",
            link: "/",
            btnClass: ''
        },
        {
            id: 3,
            title: "Shop",
            link: "/shop",
            btnClass: ''
        },
        {
            id: 4,
            title: "Contact Us",
            link: "/",
            btnClass: ''
        },
    ]
    return (
        <>
            <div className={`headerMainNav`}>
                <ul className=" flex flex-wrap w-full justify-end items-center gap-10">
                    {
                        headerMenuItems && headerMenuItems.map((item) => (
                            <li key={item.id} className={`relative`} >
                                {item.link && <Link href={item.link} className={`headerSubMenu ${item.btnClass}`}><span>{item.title}</span></Link>}
                            </li>
                        ))
                    }
                    <li className="headerCartIcon">
                        <Link href='/cart'><FaCartShopping /></Link>
                    </li>
                </ul>
            </div>
        </>
    )
}