import { CheckCircle } from "lucide-react";
import one from "../assets/IMG-20250511-WA0084.jpg";
import two from "../assets/IMG-20250511-WA0086.jpg";
import three from "../assets/IMG-20250511-WA0087.jpg";
import four from "../assets/IMG-20250511-WA0088.jpg";
import AOS from 'aos'
import { useEffect } from "react";

const images = [one, two, three, four];

const services = [
  {
    service: "Personalized Author Support",
    info: "One-on-one coaching and tailored guidance to help authors navigate every stage of publishing.",
  },
  {
    service: "Educational Workshops",
    info: "Quarterly hands-on training sessions on writing, editing, publishing, and book marketing.",
  },
  {
    service: "Writing Communities",
    info: "Access to peer groups and mastermind sessions that foster collaboration and motivation.",
  },
  {
    service: "Marketing & Advertising",
    info: "Custom campaigns to promote authors and their books across digital and offline platforms.",
  },
];

function ServiceHome() {
    useEffect(() => {
                AOS.init();
              }, [])
  return (
    <section className="my-20 px-6 py-12 bg-gray-50 rounded-2xl shadow-xl max-w-screen-xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">
        What We Offer
      </h2>

      <div className="flex flex-col sm:flex-row items-start justify-between gap-12">
        {/* Service Texts */}
        <div className="flex-1">
          {services.map((service, index) => (
            <div className="mb-8" data-aos='fade-right' key={index}>
              <p className="font-semibold text-[17px] sm:text-[15px] lg:text-[19px] text-indigo-700 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                {service.service}
              </p>
              <p className="text-[14px] sm:text-[12px] lg:text-[16px] text-gray-600 mt-2 leading-relaxed">
                {service.info}
              </p>
            </div>
          ))}
        </div>

        {/* Images Grid */}
        <div className="grid grid-cols-2 gap-4 flex-1">
          {images.map((image, index) => (
            <div 
              key={index}
              className="relative overflow-hidden rounded-2xl shadow-lg group w-full h-[170px]"
            >
              <img
                src={image}
                alt={`Publishing visual ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Optional CTA */}
      <div className="mt-12 text-center">
        <a href="https://tinyurl.com/4p8bn245">
        <button className="bg-indigo-600 text-white px-6 py-3 rounded-xl text-sm font-medium hover:bg-indigo-700 transition cursor-pointer">
          Start Your Publishing Journey
        </button>
        </a>
        
      </div>
    </section>
  );
}

export default ServiceHome;
