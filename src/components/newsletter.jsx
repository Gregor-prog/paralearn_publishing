import one from "../assets/kevin-woblick-NgPdyZFV29w-unsplash.jpg" 
function NewsLetter(){
    return <div className="grid grid-cols-2">
        <div className="p-[40px] bg-[#868686] flex items-right flex-col justify-center">
            <p className="text-2xl font-semibold my-2">Subscribe to our newsletter</p>
            <p className="text-15px]  mb-5">Get publishing tips, writing resources, and event updates.</p>
            <div className="relative h-[40px] border-0 w-[70%]  rounded-xl overflow-hidden">
            <input type="text" placeholder="Parekatus@gmail.com" className="h-[100%] p-5 bg-[#e2e2e2] w-[70%] border-0"/>
            <button className="bg-red-600 h-[100%] text-white w-[30%]">Subscribe</button>
            </div>
        </div>
        <div>
           <div className="w-[100%] h-[350px]  overflow-hidden">
            <img src={one} alt="" />
           </div>
        </div>
    </div>
}

export default NewsLetter