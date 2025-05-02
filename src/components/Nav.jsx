import { Link } from "react-router-dom"
function Content(){
    return <div className="hidden lg:flex flex-row items-center justify-evenly w-[50%]">
        <p><Link to='/'>Home</Link></p>
        <p><Link to='/about'>About</Link></p>
        <p><Link to='/services'>Services</Link></p>
        <p><Link to='/blog'>Blogs</Link></p>
        <p><Link to='/content'>Content</Link></p>
    </div>
}




function Navbar(){
    return <nav className="flex flex-row p-[30px] fixed items-center justify-between py-3  w-[100%] bg-[#fcfcfc2a] backdrop-blur-xl z-[50]">
        <div>
            <p className=" font-semibold text-xl">Paralearn</p>
        </div>
        <Content/>
        <div>
            <button className="p-[10px] rounded-2xl bg-[#74b974]">
                Get started
            </button>
        </div>
    </nav>
}

export default Navbar