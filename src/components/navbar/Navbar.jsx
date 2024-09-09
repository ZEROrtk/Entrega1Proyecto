import { useState } from 'react';
import { Link } from 'react-scroll';
import {FaTimes} from 'react-icons/fa';
import { CiMenuFries } from 'react-icons/ci';
import { FaBible } from "react-icons/fa";
import logo from '/Users/Administrator/avance/src/components/logo/logoz.png'

const Navbar = () => {
    const[click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
   const content = <>
    <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-yellow-200 transition">
        <ul className="text-center text-x1 p-20">
            <Link spy={true} smooth={true} to="Home">
                <li className="my-4 py-4 border-b border-zinc-50 hover:bg-orange-300 hover:rounded cursor-pointer">Home</li>
            </Link>
        </ul>
        <ul className="text-center text-x1 p-20">
            <Link spy={true} smooth={true} to="Consolas">
                <li className="my-4 py-4 border-b border-zinc-50 hover:bg-orange-300 hover:rounded cursor-pointer">Consolas</li>
            </Link>
        </ul>
        <ul className="text-center text-x1 p-20">
            <Link spy={true} smooth={true} to="Videojuegos">
                <li className=" my-4 py-4 border-b border-zinc-50 hover:bg-orange-300 hover:rounded cursor-pointer">Videojuegos</li>
            </Link>
        </ul>
    </div>
   
   
   
   </>
  return (
    <nav>
        <div className="h-10vh flex justify-between z-50 text-black lg:py-5 px-20 py-4">
       
            <div className="flex items-center flex-1">
              <a className="logo">
            <img src={logo} alt="" />
               </a>
               
            </div>
            <div className="lg:flex md:flex lg: flex-1 items center justify-end font-normal hidden">
                <div className="flex-10">
                <ul className="flex gap-8 mr-16 text-[18px]">
                    <Link spy={true} smooth={true}to="Home">
                    <li className="hover:text-green-400 transition cursor-pointer">Home</li>
                    </Link>
                    <Link spy={true} smooth={true} to="Consolas">
                    <li className=" hover:text-green-400 transition cursor-pointer">Consolas</li>
                    </Link>
                    <Link spy={true} smooth={true} to="Videojuegos">
                    <li className=" hover:text-fuchsia-600 transition cursor-pointer">Videojuegos</li>
                    </Link>
                </ul>
                </div>
            </div>
            <div>
                {click && content}
            </div>
            <button className="block sm:hidden transtion" onClick={handleClick}>
                {click ? <FaTimes/> : <CiMenuFries/>}
            </button>
        </div>
    </nav>
  )
 }

export default Navbar;