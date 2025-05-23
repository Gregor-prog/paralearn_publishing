import draw from "../assets/img45-removebg-preview.png"
import AOS from 'aos'; 
import 'typeface-roboto'; 
import 'typeface-montserrat'
import 'typeface-lora'
import 'aos/dist/aos.css';
import { useEffect } from "react";
function Header(){

    useEffect(() => {
        AOS.init();
      }, [])

    return <div className="flex flex-col md:flex-row items-center justify-evenly relative  p-5 pt-20 bg-opacity-20" style={{backgroundImage:'linear-gradient(#63F2E2,white,transparent)'}}>
        <div className=" z-10 p-[20px] relative align-middle justify-center">
            <p className="text-4xl lg:text-5xl relative font-bold  my-5" style={{fontFamily:"montserrat"}}>Re-Invent Your Publishing Journey with AI‑Powered Support</p>
            <p className="font-[lora]" style={{fontFamily:"lora"}}>From manuscript to market—fast, affordable, and personalized.</p>
            <a href="https://tinyurl.com/4p8bn245">
            <button className="p-[13px] rounded-2xl my-[20px] bg-[#1A1F3B] mx-4 drop-shadow-2xl text-white hover:bg-[#4e5580] cursor-pointer drop-shadow-[#474747]">Get Started</button>
            </a>
        </div>
        <div className="relative" >
        <img src={draw}  alt="no pic" data-aos='fade-down' className="right-[90px] w-[340px] lg:w-[470px] top-28 z-[5] drop-shadow-xl absolute  drop-shadow-black " />
            <svg className=" w-[500px] lg:w-[600px] right-[20px] " viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path className="" fill="#3AEBD8" d="M40.7,-58.1C50.3,-49.1,53.8,-33.9,54.8,-20.3C55.8,-6.7,54.3,5.2,51.5,17.6C48.6,29.9,44.4,42.7,35.6,48.8C26.9,55,13.4,54.5,-2.9,58.5C-19.3,62.5,-38.6,71.1,-48.1,65.2C-57.7,59.3,-57.6,39,-59.9,21.8C-62.2,4.7,-66.9,-9.3,-66.1,-24.4C-65.2,-39.5,-58.8,-55.8,-46.8,-64C-34.9,-72.2,-17.4,-72.4,-0.9,-71.1C15.6,-69.9,31.2,-67.1,40.7,-58.1Z" transform="translate(100 100)" />
            </svg>
        {/* <img src={book} alt="" data-aos='slide-left' className="absolute z-[10] md:top-[80px] md:right-[7%] top-[70px] right-[5%] w-[130px]"/>
        <img src={search} alt="" data-aos='slide-left' className="absolute z-[10] bottom-[110px] right-[70%] w-[150px]"/> */}
        </div>
    </div>
}

export default Header