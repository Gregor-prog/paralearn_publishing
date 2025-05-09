import ayobami from "../assets/team/img91.jpg"
import IK from "../assets/team/img93.jpg"
import feyi from "../assets/team/img97.jpg"
import favourm from "../assets/team/img99.jpg"
import favourf from "../assets/team/img101.jpg"
import ade from "../assets/team/img103.jpg"
import target from "../assets/20943892.jpg"
import process from "../assets/7456408.jpg"
import AOS from "aos"
import 'typeface-montserrat'
import 'typeface-lora'
import Navbar from "../components/Nav"
import Footer from "../components/footer"
function About(){
    const team = [
        {pic:ayobami, name:"Michael Ayobami", role:"Design Lead"},
        {pic:IK, name:"Evander Ikechukwu", role:"Director"},
        {pic:feyi, name:"Miracle Oluwafeyidemilade", role:"Media Manager"},
        {pic:favourm, name:"Adeoye Favour", role:"Research Writing Lead"},
        {pic:favourf, name:"Akinwamide Favour", role:"Writer"},
        {pic:ade, name:"TaiwoAde-Onojobi", role:"Designer"}
    ]
    return <div className="flex flex-col bg-[white] w-[100vw]">
        <Navbar/>
        <div className="flex flex-row items-center gap-5 h-[500px] mt-[80px]">
            <div data-aos='slide-right' className="bg-[#026459] p-[45px] text-left sm:w-[50%] h-full flex flex-col  justify-center w-[100%]">
            <p className="font-bold text-5xl text-white " style={{fontFamily:"Montserrat"}}>Mission Statement</p>
            <p className="text-2xl text-[#a3a3a3]" style={{fontFamily:"lora"}}>"Re‑inventing traditional publishing by empowering authors
            through AI technology and one-on-one support."</p>
            </div>
            <div className="w-[40%] hidden sm:block" data-aos='slide-left'>
                <img src={target} alt="target" />
            </div>
        </div>
        {/* <div className="py-16 px-6 md:px-20 bg-[#f9f9f9] text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-800">Meet the Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {team.map((ind, index) => (
          <div key={index} data-aos='fade-top' className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 relative overflow-hidden"> */}
            {/* <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="absolute w-[250px] -top-[20px] left-[50px] z-[1]">
                <path fill="#3AEBD8" d="M47.3,-67.2C55.7,-59.1,52.8,-37.7,58,-19.4C63.3,-1,76.7,14.1,76.2,27.6C75.7,41.1,61.3,52.8,46.3,64.5C31.3,76.1,15.6,87.7,-0.9,88.9C-17.5,90.2,-35,81.3,-43.4,67.4C-51.7,53.6,-50.8,34.9,-53.6,19.2C-56.3,3.4,-62.6,-9.5,-61.5,-22.2C-60.4,-34.9,-51.9,-47.3,-40.5,-54.4C-29,-61.5,-14.5,-63.1,2.5,-66.6C19.5,-70,39,-75.3,47.3,-67.2Z" transform="translate(100 100)" />
            </svg> */}
            {/* <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="absolute w-[500px] top-0 left-0 z-[1]">
                <path fill="#026459" d="M51.1,-69.2C66.9,-59,80.6,-44.8,86.7,-27.8C92.8,-10.7,91.1,9.2,84.5,26.8C77.9,44.5,66.4,60,51.4,70.5C36.5,81.1,18.3,86.8,0.5,86.2C-17.3,85.5,-34.6,78.4,-48.8,67.6C-63,56.8,-74.2,42.3,-80.3,25.6C-86.4,8.9,-87.5,-9.9,-82,-26.7C-76.6,-43.4,-64.8,-58.1,-50,-68.7C-35.3,-79.3,-17.6,-85.8,0,-85.9C17.7,-85.9,35.4,-79.5,51.1,-69.2Z" transform="translate(100 100)" />
            </svg> */}
            {/* <img
              src={ind.pic}
              alt={ind.name}
              className="w-32 h-32 mx-auto rounded-full object-cover mb-4 drop-shadow-xl drop-shadow-black z-[10] relative"
            /> */}
            {/* <p className="text-xl font-semibold text-gray-900  z-[10] relative text-center">{ind.name}</p> */}
            {/* <p className="text-sm text-gray-500 relative z-[10]">{ind.role}</p> */}
          {/* </div>
        ))}
      </div>
    </div> */}
    <div className="flex flex-row-reverse items-center gap-5 h-[500px]  ">
            <div data-aos='slide-left' className="bg-[#36042b] p-[45px] text-left sm:w-[50%] h-full flex flex-col  justify-center w-[100%]">
            <p className="font-bold text-5xl text-white " style={{fontFamily:"Montserrat"}}>Process Overview</p>
            <p className="text-2xl text-[#a3a3a3]" style={{fontFamily:"lora"}}>"Learn how we streamline every step—from project planning to
                distribution—in just 3–6 months."</p>
            </div>
            <div className="w-[40%] hidden sm:block" data-aos='slide-right'>
                <img src={process} alt="target" />
            </div>
        </div>
        <Footer/>
    </div>
}

export default About