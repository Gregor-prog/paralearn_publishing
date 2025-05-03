import one from "../assets/2880031.jpg" 
function NewsLetter(){
    return <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="p-[40px] bg-[#868686] flex flex-col items-start justify-center">
            <p className="text-2xl font-semibold my-2">Subscribe to our newsletter</p>
            <p className="text-[15px] mb-5">Get publishing tips, writing resources, and event updates.</p>
            <div className="relative h-[40px] w-full max-w-md rounded-xl overflow-hidden">
                <input type="email" placeholder="Parekatus@gmail.com" className="h-full p-5 bg-[#e2e2e2] w-[70%] border-0"/>
                <button className="bg-red-600 h-full text-white w-[30%] hover:bg-red-700">Subscribe</button>
            </div>
        </div>
        <div>
           <div className="w-full h-[350px] overflow-hidden">
            <img src={one} alt="" className="w-full h-full object-cover"/>
           </div>
        </div>
    </div>
}


export default NewsLetter