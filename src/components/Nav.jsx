import { Link } from "react-router-dom"
import {Menu,X} from 'lucide-react'
import logo from "../assets/logo_1.jpg"
import 'typeface-montserrat'
import 'typeface-lora'
import { useState,useEffect } from "react"
import AOS from 'aos'
import { useLocation } from "react-router-dom"
function Content(){
    const location = useLocation()
    return <div className="hidden lg:flex flex-row items-center justify-evenly w-[50%]">
        <p className="text-[16px] md:text-xl p-[5px]" style={location.pathname === "/"?{color:"#050b5e",fontWeight:"bold",borderStyle:"solid",borderColor:"#050b5e",borderBottomWidth:"3px"}:null}><Link to='/'>Home</Link></p>
        <p className="text-[16px] md:text-xl p-[5px]" style={location.pathname === "/about"?{color:"#050b5e",fontWeight:"bold",borderStyle:"solid",borderColor:"#050b5e",borderBottomWidth:"3px"}:null}><Link to='/about'>About</Link></p>
        <p className="text-[16px] md:text-xl p-[5px]" style={location.pathname === "/services"?{color:"#050b5e",fontWeight:"bold",borderStyle:"solid",borderColor:"#050b5e",borderBottomWidth:"3px"}:null}><Link to='/services'>Services</Link></p>
        <p className="text-[16px] md:text-xl p-[5px]" style={location.pathname === "/contact"?{color:"#050b5e",fontWeight:"bold",borderStyle:"solid",borderColor:"#050b5e",borderBottomWidth:"3px"}:null}><Link to='/contact'>Contact</Link></p>
        <p className="text-[16px] md:text-xl p-[5px]" style={location.pathname === "/barcode-gen"?{color:"#050b5e",fontWeight:"bold",borderStyle:"solid",borderColor:"#050b5e",borderBottomWidth:"3px"}:null}><Link to='/barcode-gen'>Barcode-gen</Link></p>
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
        return <div className="absolute left-0 top-0 z-[40] w-[100%] bg-[#8bffdcfd] p-[30px] lg:hidden" data-aos='slide-down'>
            <X onClick={close} className="absolute right-[10%] cursor-pointer"/>
            <ul className="divide-y divide-gray-500 mt-4">
            <li className="py-3 text-center text-xl" style={location.pathname === "/"?{color:"#",fontWeight:"bold", backgroundColor:"#08D2A2"}:null}><Link to='/'>Home</Link></li>
            <li className="py-3 text-center text-xl" style={location.pathname === "/about"?{color:"#",fontWeight:"bold", backgroundColor:"#08D2A2"}:null}><Link to='/about'>About</Link></li>
            <li className="py-3 text-center text-xl" style={location.pathname === "/services"?{color:"#",fontWeight:"bold", backgroundColor:"#08D2A2"}:null}><Link to='/services'>Services</Link></li>
            <li className="py-3 text-center text-xl" style={location.pathname === "/contact"?{color:"#",fontWeight:"bold", backgroundColor:"#08D2A2"}:null}><Link to='/contact'>Contact</Link></li>
            <li className="py-3 text-center text-xl" style={location.pathname === "/barcode-gen"?{color:"#",fontWeight:"bold", backgroundColor:"#08D2A2"}:null}><Link to='/barcode-gen'>Barcode-gen</Link></li>
            </ul>
           <a href="https://tinyurl.com/4p8bn245" className="">
           <button className="p-[10px] rounded-2xl text-white text-center font-semibold bg-[#0c0e0c] m-">
                Get started
            </button>
           </a>
        </div>
    }
    return <nav className="flex flex-row p-[30px] fixed items-center justify-between py-3  w-[100%] bg-[#fcfcfc2a] backdrop-blur-xl z-[50]">
        <div className="flex gap-3 items-center">
            <img src={logo} alt=""  className="w-[90px]"/>
            <p className=" font-semibold text-xl" style={{fontFamily:"Montserrat"}}>Parakletus Publishing</p>
        </div>
        <Content/>
        {isOpen?<MobileNav/>:null}
        <div>
            <a href="https://tinyurl.com/4p8bn245">
            <button className="p-[10px] rounded-2xl bg-[#f5f5f5] hidden lg:flex font-bold cursor-pointer">
                Get started
            </button>
            </a>
        </div>
        <div className="lg:hidden cursor-pointer" >
            {isOpen?<X onClick={close}/>:<Menu onClick={open}/>}
        </div>
    </nav>
}

export default Navbar