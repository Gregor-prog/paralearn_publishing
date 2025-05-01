import { Splide, SplideSlide,SplideTrack } from '@splidejs/react-splide';
import one from "../assets/kevin-woblick-NgPdyZFV29w-unsplash.jpg"
import two from "../assets/kimberly-farmer-lUaaKCUANVI-unsplash.jpg"
import three from "../assets/markus-spiske-2G8mnFvH8xk-unsplash.jpg"
import four from "../assets/illustrator-drawing-ipad-medium-shot.jpg"
import '@splidejs/react-splide/css';
const testimonialSlides = [
    {
      testimony: "Parekatus Publishing transformed my manuscript into a masterpiece! Their editorial team is meticulous, and the book cover design exceeded my expectations. Highly recommended for aspiring authors.",
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=faces"
    },
    {
      testimony: "Working with Parekatus was a game-changer. Their marketing strategy helped my book reach a global audience. The team is professional, creative, and truly cares about their authors.",
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=faces"
    },
    {
      testimony: "From formatting to distribution, Parekatus Publishing handled everything seamlessly. My book is now available in major stores, and I couldn’t be happier with the results!",
      img: "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=300&h=300&fit=crop&crop=faces"
    }]
function Stat(){
    return <div>
        <p>testimonials & stats</p>
        <div className="flex items-center justify-between p-[70px]">
            <div className=''>
                <p className='my-3'>4× Faster Timelines: Publish in 3–6 months instead of 12–18.</p>
                <p className='my-3'>50% Lower Costs: Production from ₦20,000–₦200,000.</p>
                <p className='my-3'>2× Higher Satisfaction: Net Promoter Score (NPS) of +45.</p>
            </div>
            <div className="w-[40%]">
                                <Splide 
                         options={ {
                            rewind: true,
                            width : 800,
                            gap   : '1rem',
                        } }
                        aria-label="My Favorite Images"
                        className='shadow-xl shadow-black rounded-xl overflow-hidden w-[100%]' 
                     >
                        {/* <SplideSlide>
                         <img src={one} alt="Image 1"/>
                         </SplideSlide>
                        <SplideSlide>
                         <img src={two} alt="Image 2"/>
                         </SplideSlide>
                        <SplideSlide>
                          <img src={three} alt="Image 3"/>
                        </SplideSlide> */}
                        {testimonialSlides.map((testi,index) => (
                            <SplideSlide className='shadow-xl shadow-black'>
                            <div key={index} className='flex flex-col items-center justify-evenly'>
                                <img src={testi.img} alt="" className='w-[450px]' />
                                <p className='text-[14px] p-4'>{testi.testimony}</p>
                            </div>
                          </SplideSlide>
                        ))}
                        </Splide>          
            </div>
        </div>
    </div>
}
export default Stat