import image from "../assets/2002.i039.010_chatbot_messenger_ai_isometric_set-03-removebg-preview.png"
import threeD from "../assets/11444696-removebg-preview.png"
import 'typeface-montserrat'
import 'typeface-lora'
function AboutHome(){
    return <div className="flex items-center relative justify-between px-[30px]">
        <img src={threeD} alt=""  className=" z-[10] absolute w-[200px] right-4 bottom-8"/>
        <div className="w-[50%]">
            <img src={image} alt="image" />
        </div>
        <div className="w-[50%] p-8 z-[15]">
            <p className="font-stretch-90% text-2xl font-medium text-[#e6e6e6]" style={{fontFamily:"montserrat"}} >At Parakletus Publishing, we bring the writer in you to life. 
                Whether you're an aspiring novelist or academic scholar,<span className="text-[#4b3f3f]"> we provide tailored guidance and cutting-edge AI tools to streamline your journey from idea to publication.</span></p>
        </div>
    </div>
}

export default AboutHome