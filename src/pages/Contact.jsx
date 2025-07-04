import contact from "../assets/5132728.jpg"
import Footer from "../components/footer"
import Navbar from "../components/Nav"
import {  EmailResponse } from "../helper/contactEmail"
import { Toaster,toast } from "sonner"
import SEO from "../components/SEO"
function Contact(){
  
    const formElement = [
        {label:"Name",type:"text",name:"fullname"},
        {label:"Email",type:"email",name:"email"},
        {label:"Message",type:"textbox",name:"message"},
    ]
    async function Submit(e){
            e.preventDefault()
            const data = new FormData(e.target);
            const Name = data.get('fullname')
            const Email = data.get('email')
            const Message = data.get('message')
 
            try {
            const EmailRe = await EmailResponse(Name,Email,Message)
            if(EmailRe.status == 200){
              toast.success("success, please wait for our feedback")
              e.target.reset();
            }
              
            } catch (error) {
              if(error){
                toast.error("an error occured, please try again later")
                console.log(error)
              }
            }
            
           }

    return <div>
      <SEO 
        title="Home | Parakletus Publishing"
        description="From manuscript to market—fast, affordable, and personalized publishing support."
        keywords = "contact publishers, paraletus contact"
      />
        <Navbar/>
        <Toaster richColors position="top-center"/>
        <div className="flex flex-col md:flex-row items-start gap-8 px-6 pb-12 pt-[100px] bg-white">
  <div className="w-full md:w-[55%] bg-gray-50 rounded-2xl p-8 shadow-md" data-aos='slide-right'>
    <form onSubmit={(e) => Submit(e)} className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-1">Get in Touch</h2>
        <p className="text-sm text-gray-600">
          Have questions or ready to start your publishing journey? Reach out to us!
        </p>
      </div>

      {formElement.map((element, index) => (
        <div key={index} className="flex flex-col gap-1">
          <label htmlFor={element.name} className="text-sm font-medium text-gray-700">
            {element.label}
          </label>
          <input
            type={element.type}
            name={element.name}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>
      ))}

      <button
        type="submit"
        className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
      >
        Submit
      </button>
    </form>
  </div>

  <div className="hidden md:block md:w-[40%]" data-aos='slide-left'>
    <img src={contact} alt="Contact" className="" />
  </div>
</div>
<Footer/>
    </div>
}

export default Contact