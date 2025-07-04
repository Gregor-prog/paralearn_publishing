import {
  FaPaintBrush,
  FaPenNib,
  FaSpellCheck,
  FaBrain,
  FaFileAlt,
  FaCloudUploadAlt,
  FaGlobe,
  FaPrint,
  FaBullhorn,
  FaCalendarAlt,
  FaFileAlt
} from "react-icons/fa";
import AOS from 'aos'
import 'typeface-montserrat'
import 'typeface-lora'
import Navbar from "../components/Nav"
import Footer from "../components/footer"
import SEO from "../components/SEO"
function Service(){
    const services = [
  {
    title: "Cover Design",
    body: "Creating eye-catching and professional book covers tailored to your genre and audience.",
    icon: FaPaintBrush
  },
  {
    title: "Ghostwriting",
    body: "We write your book for you, based on your ideas and voice.",
    icon: FaPenNib
  },
  {
    title: "Proofreading/Editing",
    body: "Correcting grammar, punctuation, and clarity to ensure your book is polished.",
    icon: FaSpellCheck
  },
  {
    title: "Developmental Editing",
    body: "In-depth review of structure, flow, and content to strengthen your manuscript.",
    icon: FaBrain
  },
  {
    title: "Typesetting/Internal Design/Formatting",
    body: "Arranging your book's layout professionally for readability and aesthetic appeal.",
    icon: FaFileAlt
  },
  {
    title: "Digital Publishing",
    body: "Converting and uploading your book for Kindle, PDF, EPUB, and other formats.",
    icon: FaCloudUploadAlt
  },
  {
    title: "Website Publishing",
    body: "Showcasing your book on a custom website for more visibility and sales.",
    icon: FaGlobe
  },
  {
    title: "Printing",
    body: "High-quality physical copies of your book, printed to your desired specs.",
    icon: FaPrint
  },
  {
    title: "Book Launch Campaign (Ads)",
    body: "Promoting your book online with targeted ads for maximum reach.",
    icon: FaBullhorn
  },
  {
    title: "Book Launch Event Management",
    body: "Full planning and hosting of your book launch events, online or in-person.",
    icon: FaCalendarAlt
  },
  {
 title: "Research Paper Writing and Publishing",
 body: "Professional assistance with academic research, manuscript preparation, and journal publication guidance.",
 icon: FaFileAlt
}
];


    return <div className="bg-[#dbdbdb]">
      <SEO 
        title="Home | Parakletus Publishing"
        description="From manuscript to market—fast, affordable, and personalized publishing support."
        keywords = "Cover Design,Ghostwriting,Proofreading/Editing,Developmental Editing,Typesetting/Internal Design/Formatting,Digital Publishing,Website Publishing,Printing,Book Launch Campaign (Ads),Book Launch Event Management,Research Paper Writing and Publishing"/>
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