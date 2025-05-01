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
    return <nav className="flex flex-row items-center justify-between pb-7 absolute z-[10] w-[100%]">
        <div>
            <p className="">Paralearn</p>
        </div>
        <Content/>
        <div>
            <button>
                Get started
            </button>
        </div>
    </nav>
}

export default Navbar