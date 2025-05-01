import draw from "../assets/young-woman-with-afro-haircut-wearing-pink-sweater-holding-textbooks-removebg-preview.png"
function Header(){
    return <div className="flex items-center justify-between relative  p-5 pt-20" style={{backgroundImage:'linear-gradient(#caf452,white)'}}>
        <div className="relative z-10">
            <p className="text-4xl relative  my-5">Reinvent Your Publishing Journey with AI‑Powered Support</p>
            <p>From manuscript to market—fast, affordable, and personalized.</p>
            <button className="p-[15px] rounded-2xl my-[20px] bg-amber-400">Get Started</button>
        </div>
        <div className="">
        <img src={draw} alt="no pic" className="right-[-2px] top-16 z-[5] drop-shadow-xl absolute  drop-shadow-black  " />
            <svg className=" w-[500px] right-[20px] drop-" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path className="" fill="#ccf97e" d="M40.7,-58.1C50.3,-49.1,53.8,-33.9,54.8,-20.3C55.8,-6.7,54.3,5.2,51.5,17.6C48.6,29.9,44.4,42.7,35.6,48.8C26.9,55,13.4,54.5,-2.9,58.5C-19.3,62.5,-38.6,71.1,-48.1,65.2C-57.7,59.3,-57.6,39,-59.9,21.8C-62.2,4.7,-66.9,-9.3,-66.1,-24.4C-65.2,-39.5,-58.8,-55.8,-46.8,-64C-34.9,-72.2,-17.4,-72.4,-0.9,-71.1C15.6,-69.9,31.2,-67.1,40.7,-58.1Z" transform="translate(100 100)" />
            </svg>
        </div>
    </div>
}

export default Header