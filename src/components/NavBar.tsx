import { useAppselector } from '@/redux/hooks';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';
import { RxHamburgerMenu } from "react-icons/rx";

const NavBar = ({ setShowCart, setShowRegiter}: any) => {

    const cartCount = useAppselector((state) => state.cartReducer.length)
  return (
    <div className="bg-white sticky top-0 z-10">
        {/* <div className="container flex justify-between items-center">
            <RxHamburgerMenu className="sm:hidden text-[26px]" />
            <Link href="/" className="text-4xl font-semibold hover:text-red-400">
            <Image src="/favicon.png" alt='logo'  width={60}
        height={50} />
            </Link>

            <ul className=" gap-6 hidden sm:flex">
                <Link href="/" className="navLink">Home</Link>
                <li className="navLink">Shop</li>
                <li className="navLink">Blog</li>
                <li className="navLink">Pages</li>
                <li className="navLink">Contact</li>
            </ul>

            <div className="flex gap-6 text-[26px]">
                <div className="relative cursor-pointer" 
                     onClick={() => setShowCart(true)}
                >
                    <AiOutlineShoppingCart />
                    <div className=" absolute top-[-15px] right-[-10px] bg-red-500 w-[25px] h-[25px]
                 rounded-full text-white text-[14px] grid place-items-center">
                        {cartCount}
                    </div>
                </div>
            </div>
        </div> */}

        <div className="container hidden lg:block">
            <div className="flex justify-between items-center p-8">
                <h1 className="text-4xl font-medium "> Shoppy</h1>
                <div className="relative w-full max-w-[500px]">
                    <input 
                        className="bg-[#f2f3f5] border-none outline-none px-6  py-3 rounded-[30px] w-full"
                        type='text'
                        placeholder='Search Product...'
                    />
                    <BsSearch  className="absolute top-0 right-0 mt-4 mr-5" size={20} />
                </div>

                <div className="flex gap-4">
                    <div className='icon_wrapper cursor-pointer' onClick={() => setShowRegiter(true)}>
                        <AiOutlineUser  />
                    </div>
                    <div className='icon_wrapper cursor-pointer'  onClick={() => setShowCart(true)}>
                        <AiOutlineShoppingCart  />
                        <div className=" absolute top-[30px] right-[120px] bg-red-500 w-[25px] h-[25px]
                 rounded-full text-white text-[14px] grid place-items-center">
                        {cartCount}
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NavBar



