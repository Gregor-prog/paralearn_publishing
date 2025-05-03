import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "typeface-montserrat";
import "typeface-lora";
import AOS from 'aos'
import { useEffect } from "react";
const testimonialSlides = [
  {
    testimony:
      "Parakletus Publishing transformed my manuscript into a masterpiece! Their editorial team is meticulous, and the book cover design exceeded my expectations. Highly recommended for aspiring authors.",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=faces",
  },
  {
    testimony:
      "Working with Parakletus was a game-changer. Their marketing strategy helped my book reach a global audience. The team is professional, creative, and truly cares about their authors.",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=faces",
  },
  {
    testimony:
      "From formatting to distribution, Parakletus Publishing handled everything seamlessly. My book is now available in major stores, and I couldn’t be happier with the results!",
    img: "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=300&h=300&fit=crop&crop=faces",
  },
];

function Stat() {
    useEffect(() => {
                  AOS.init();
                }, [])
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-20">
      <h2
        className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center"
        style={{ fontFamily: "Montserrat" }}
      >
        Testimonials & Stats
      </h2>

      <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
        <div className="w-full lg:w-1/2 space-y-6">
          <div className="bg-gray-100 p-6 rounded-xl shadow-sm" data-aos='fade-right'>
            <p className="text-xl text-gray-700 font-semibold">
              4× Faster Timelines
            </p>
            <p className="text-gray-600">Publish in 3–6 months instead of 12–18.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl shadow-sm" data-aos='fade-right'>
            <p className="text-xl text-gray-700 font-semibold">
              50% Lower Costs
            </p>
            <p className="text-gray-600">Production from ₦20,000–₦200,000.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl shadow-sm" data-aos='fade-right'>
            <p className="text-xl text-gray-700 font-semibold">
              2× Higher Satisfaction
            </p>
            <p className="text-gray-600">Net Promoter Score (NPS) of +45.</p>
          </div>
        </div>

        <div className="w-full lg:w-[45%]">
          <Splide
            options={{
              rewind: true,
              gap: "1rem",
              autoplay: true,
              type: "loop",
              interval: 5000,
              arrows: false,
              pagination: true,
            }}
            aria-label="Author Testimonials"
            className="rounded-xl overflow-hidden shadow-xl"
          >
            {testimonialSlides.map((testi, index) => (
              <SplideSlide key={index} className="px-4 py-6">
                <div className="flex flex-col items-center text-center">
                  <img
                    src={testi.img}
                    alt="Author"
                    className="w-24 h-24 rounded-full object-cover mb-4 border-2 border-gray-300"
                  />
                  <p
                    className="text-gray-700 text-[15px] font-light"
                    style={{ fontFamily: "Lora", lineHeight: "1.7" }}
                  >
                    “{testi.testimony}”
                  </p>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </section>
  );
}

export default Stat;
