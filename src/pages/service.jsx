import { FaUserTie,FaChalkboardTeacher,FaBullhorn,FaUsers,FaRobot } from "react-icons/fa"
import AOS from 'aos'
import 'typeface-montserrat'
import 'typeface-lora'
import Navbar from "../components/Nav"
import Footer from "../components/footer"
function Service(){
    const services = [
        {title:"Personalized Support",body:"One-on-one coaching to address your unique publishing needs.",icon:FaUserTie},
        {title:"Educational Workshops",body:"Quarterly training programs covering manuscript prep, editing, and marketing.",icon:FaChalkboardTeacher},
        {title:"Writing Communities",body:"Join peer groups and mastermind sessions to stay motivated.",icon:FaBullhorn},
        {title:"Marketing & Advertising",body:"Custom promotion plans to help your book reach its audience.",icon:FaUsers},
        {title:"AI Integration",body:"Leverage technology to speed up workflows—without AI writing your manuscript.",icon:FaRobot}
    ]
    return <div className="bg-[#dbdbdb]">
        <Navbar/>
        <div className="pt-[160px] ">
        <p className="text-center text-4xl font-semibold">Our Services</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-[50px] mt-[20px]">
            {
                services.map((service,index) => {  
                    return (
                        <div data-aos='fade-top' key={index} className="flex flex-col items-center p-[60px] bg-[#a3a3a3] m-4 rounded-xl drop-shadow-xl drop-shadow-black">
                        <service.icon className="size-[100px] my-2.5"/>
                        <p className="text-2xl font-semibold my-1 text-center" style={{fontFamily:"Montserrat"}} >{service.title}:</p>
                        <p className="text-xl text-center" style={{fontFamily:"Lora"}}>{service.body}</p>
                    </div>
                    )
                })
            }
        </div>
        <Footer/>
        </div>
    </div>
}

export default Service