import image from "../assets/2002.i039.010_chatbot_messenger_ai_isometric_set-03-removebg-preview.png";
import threeD from "../assets/11444696-removebg-preview.png";
import "typeface-montserrat";
import "typeface-lora";
import AOS from 'aos'
import { useEffect } from "react";
function AboutHome() {
     useEffect(() => {
            AOS.init();
          }, [])
  return (
    <section className="relative px-6 py-16 bg-[#f7f7f7] overflow-hidden">
      {/* <img
        src={threeD}
        alt=""
        className="absolute w-[100px] md:w-[150px] bottom-4 right-6 z-0 pointer-events-none"
        data-aos='fade-right'
      /> */}

      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between relative z-10" data-aos='fade-left'>
        {/* Left Image */}
        <div className="w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0">
          <img
            src={image}
            alt="AI Illustration"
            className="w-[80%] max-w-md"
          />
        </div>

        
        <div className="w-full lg:w-1/2 px-4" data-aos='fade-left'>
          <h2
            className="text-3xl font-semibold mb-6 text-gray-800 leading-snug"
            style={{ fontFamily: "Montserrat" }}
          >
            At Parakletus Publishing, we bring the writer in you to life.
          </h2>
          <p
            className="text-lg text-gray-600"
            style={{ fontFamily: "Lora", lineHeight: "1.7" }}
          >
            Whether you're an aspiring novelist or academic scholar,{" "}
            <span className="text-[#4b3f3f] font-semibold">
              we provide tailored guidance and cutting-edge AI tools
            </span>{" "}
            to streamline your journey from idea to publication.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutHome;
