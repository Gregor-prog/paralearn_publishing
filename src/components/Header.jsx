import draw from "../assets/illustrator-drawing-ipad-medium-shot.jpg"
function Header(){
    return <div className="flex items-center justify-between p-5">
        <div>
            <p className="text-4xl my-5">Reinvent Your Publishing Journey with AI‑Powered Support</p>
            <p>From manuscript to market—fast, affordable, and personalized.</p>
            <button className="p-[15px] rounded-2xl my-[20px] bg-amber-400">Get Started</button>
        </div>
        <div className="w-[65%]">
            <img src={draw} alt="no pic" />
        </div>
    </div>
}

export default Header