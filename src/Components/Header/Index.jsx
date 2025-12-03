import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import LoginModal from "../LoginModal/Index";
import { ChefHat, ShoppingCart, User, Menu, X } from "lucide-react";
import {useUser} from "../../Context/useUser"

export default function Header() {
  const {user} = useUser();
  const [open, setOpen] = useState(false);
  const loginRef = useRef(null);

  const openModal =  () => loginRef.current?.showModal();

  return (
    <header className="w-full shadow-sm bg-white sticky top-0 z-50">
      <nav className="flex justify-between items-center px-6 py-4">

        <NavLink to={"/"} className="flex gap-4 items-center cursor-pointer">
          <ChefHat className="bg-orange-500 w-12 h-12 p-2.5 border border-orange-500 rounded-xl text-white" />
          <div className="flex flex-col">
            <h1 className="text-2xl text-transparent bg-clip-text bg-[linear-gradient(135deg,rgb(255,107,53)_0%,rgb(255,184,48)_100%)]">
              Chef Market PRO
            </h1>
            <span className="text-sm text-gray-500">Receitas & Compras</span>
          </div>
        </NavLink>

        <button 
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={30} className="cursor-pointer" /> : <Menu size={30} className="cursor-pointer" />}
        </button>

        <ul
          className={`
            flex flex-col md:flex-row md:items-center md:gap-6
            absolute md:static top-20 right-0 w-40 md:w-auto
            bg-white md:bg-transparent shadow-md md:shadow-none
            p-5 md:p-0 rounded-xl
            transition-all duration-300
            ${open ? "flex" : "hidden md:flex"}
          `}
        >
          <NavLink 
          className={({isActive})=>
          `flex gap-3 p-2 items-center rounded
          ${isActive?"bg-red-400 text-white ":"hover:bg-orange-50"}`
        }
            to="/" 
            onClick={() => setOpen(false)}
          >
            <ChefHat className="p-1" />
            <span className="text-xs">Receitas</span>
          </NavLink>

          <NavLink className={({isActive})=> 
          `flex gap-3 p-2 items-center rounded
           ${ isActive? "bg-red-400 text-white":"hover:bg-orange-50"}`
          }
            to="/market" 
            onClick={() => setOpen(false)}
          >
            <ShoppingCart className="p-1" />
            <span className="text-xs">Market</span>
          </NavLink>

          <button className="flex gap-3 p-2 items-center hover:bg-orange-50 rounded cursor-pointer"
            onClick={openModal}
          >
              <User className="p-1" />
              <span className="text-xs">
                {user? user.name :"Login"}
                </span>
          </button>
        </ul>
      </nav>

      <LoginModal ref={loginRef}/>
    </header>
  );
}
