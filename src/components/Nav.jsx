import { Link } from "react-router-dom"
import {Menu,X} from 'lucide-react'
import { useState,useEffect } from "react"
import AOS from 'aos'
function Content(){
    return <div className="hidden sm:flex flex-row items-center justify-evenly w-[50%]">
        <p><Link to='/'>Home</Link></p>
        <p><Link to='/about'>About</Link></p>
        <p><Link to='/services'>Services</Link></p>
        <p><Link to='/blog'>Blogs</Link></p>
        <p><Link to='/content'>Content</Link></p>
    </div>
}






function Navbar(){
    const [isOpen,setisOpen] = useState(false)
    function open(){
        setisOpen(true)
    }
    function close(){
        setisOpen(false)
    }
     useEffect(() => {
                AOS.init();
              }, [])
    function MobileNav(){
        return <div className="absolute left-0 top-0 z-[40] w-[100%] bg-[#74c474fd] p-[30px]" data-aos='slide-down'>
            <X onClick={close} className="absolute right-[10%] cursor-pointer"/>
            <ul className="divide-y divide-gray-300 mt-4">
            <li className="py-3 text-center"><Link to='/'>Home</Link></li>
            <li className="py-3 text-center"><Link to='/about'>About</Link></li>
            <li className="py-3 text-center"><Link to='/services'>Services</Link></li>
            <li className="py-3 text-center"><Link to='/blog'>Blogs</Link></li>
            <li className="py-3 text-center"><Link to='/content'>Content</Link></li>
            </ul>
            <button className="p-[10px] rounded-2xl text-white text-center font-semibold bg-[#0c0e0c]">
                Get started
            </button>
        </div>
    }
    return <nav className="flex flex-row p-[30px] fixed items-center justify-between py-3  w-[100%] bg-[#fcfcfc2a] backdrop-blur-xl z-[50]">
        <div>
            <p className=" font-semibold text-xl">Parakletus</p>
        </div>
        <Content/>
        {isOpen?<MobileNav/>:null}
        <div>
            <button className="p-[10px] rounded-2xl bg-[#74b974] hidden sm:flex">
                Get started
            </button>
        </div>
        <div className="sm:hidden cursor-pointer" >
            {isOpen?<X onClick={close}/>:<Menu onClick={open}/>}
        </div>
    </nav>
}

export default Navbar