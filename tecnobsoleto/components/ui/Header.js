import Image from "next/image";
import logo from '@/public/img/logo.png';
import cartlogo from '@/public/img/cart-icons/carrito-productos.png'
import Menu from "./Menu";
import Link from "next/link";

import React from 'react'

const Header = () => {
    return (
        <header className="h-full bg-win-gray-light border-2 border-b-win-btn-border-gray border-t-white pl-2 pr-5 sticky top-0">
            <div className="container m-auto py-2 flex justify-between items-center">
                <Link href={'/'}>
                    <Image
                        alt="logo"
                        src={logo}
                        height={200}
                        width={300}
                    />
                </Link>
                <div className="flex justify-end items-center gap-4 pr-2">
                    <Menu />
                    <Link href={'/cart'}>
                        <Image
                            alt="cart-logo"
                            src={cartlogo}
                            height={32}
                            width={32}
                            className="object-cover"
                        />
                    </Link>


                </div>


            </div>
        </header>
    )
}

export default Header