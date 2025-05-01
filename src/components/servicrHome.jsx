import one from "../assets/kevin-woblick-NgPdyZFV29w-unsplash.jpg"
import two from "../assets/kimberly-farmer-lUaaKCUANVI-unsplash.jpg"
import three from "../assets/markus-spiske-2G8mnFvH8xk-unsplash.jpg"
import four from "../assets/illustrator-drawing-ipad-medium-shot.jpg"
const images  = [one,two,three,four]
const services = [
    {
        service:"Personalized Author Support",
        info:"One-on-one coaching and tailored guidance to help authors navigate every stage of publishing."
    },
    {
        service:"Educational Workshops",
        info:"Quarterly hands-on training sessions on writing, editing, publishing, and book marketing."
    },
    {
        service:"Writing Communities",
        info:"Access to peer groups and mastermind sessions that foster collaboration and motivation."
    },
    {
        service:"Marketing & Advertising",
        info:"Custom campaigns to promote authors and their books across digital and offline platforms."
    }
]
function ServiceHome(){

    return <div>
        <p>Services</p>
        <div className="flex items-center justify-evenly my-11">
            {/* {images.map((img) => (
                <div className="rounded-2xl flex items-center justify-center overflow-hidden w-[30%] shadow-2xs h-[220px]">
                    <img src={img} alt="" />
                </div>
            ))} */}
        
            <div>
                    {services.map((service,index) => (
                        <div className="my-5">
                        <p><span>*</span> {service.service}</p>
                        <p className="text-[12px]">{service.info}</p>
                        </div>
                    ))}
            </div>
            <div className="grid grid-cols-2">
                  {images.map((image,index) => (
                    <div className="w-[170px] h-[170px] overflow-hidden m-4 drop-shadow-lg rounded-2xl drop-shadow-black">
                    <img src={image} alt="" /> 
                    </div>
                  ))}  
            </div>

        </div>
    </div>
}

export default ServiceHome