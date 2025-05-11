import one from "../assets/2880031.jpg" 
import { Subscribe } from "../helper/newsLetterSub";
import { sendEmail } from "../helper/sendEmail";
import { Toaster, toast } from 'sonner';
import { useState } from "react";
// import
function NewsLetter(){
    const [emailState, setEmailState] = useState("")
    async function newsLetter(e){
        e.preventDefault()
        const formData = new FormData(e.target)
        const email = formData.get('email')
        setEmailState("")
        try {
            
        const responseSubscribe = await Subscribe(email)
        const responseEmail = await sendEmail(email)

        if(responseEmail.ok && responseSubscribe.ok){
            toast.success("You have registered for our newsLetter, an email will be sent shortly")
        }

        } catch (error) {
            if(error){
                console.log(error)
                console.log('an error occured')
                toast.error("an error occured, try again later")
            }
        }
    }
    return <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="p-[40px] bg-[#868686] flex flex-col items-start justify-center">
            <p className="text-2xl font-semibold my-2">Subscribe to our newsletter</p>
            <p className="text-[15px] mb-5">Get publishing tips, writing resources, and event updates.</p>
            <form onSubmit={(e) => {newsLetter(e)}} className="relative h-[40px] w-full max-w-md rounded-xl overflow-hidden">
                <input name="email" onChange={(e) => {setEmailState(e.target.value)}} value={emailState}  type="email" placeholder="Parekatus@gmail.com" className="h-full p-5 bg-[#e2e2e2] w-[70%] border-0"/>
                <button className="bg-red-600 h-full text-white w-[30%] hover:bg-red-700" >Subscribe</button>
            </form>
        </div>
        <div>
           <div className="w-full h-[350px] overflow-hidden">
            <img src={one} alt="" className="w-full h-full object-cover"/>
           </div>
        <Toaster richColors position="top-right"/>
        </div>
    </div>
}


export default NewsLetter