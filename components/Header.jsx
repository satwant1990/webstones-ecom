'use client'
import HeaderMenu from "./HeaderMenu"
export default function Header() {
    return (
        <header className={`siteHeader block w-full pt-4 pb-4 pl-8 pr-8 fixed top-0 left-0`} id="site_header">
            <div className="headerInner ">
                <div className=" flex w-full items-center">
                    <div className=" md:w-25 sm:w-full">
                        <h1>Logo</h1>
                    </div>
                    <div className=" md:w-75 sm:w-full">
                        <HeaderMenu />
                    </div>
                </div>
            </div>
        </header>
    )
}