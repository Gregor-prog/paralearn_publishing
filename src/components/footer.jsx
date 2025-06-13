import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import logo from "../assets/logo_1.jpg"
import { Link } from 'react-router-dom';
import { Subscribe } from "../helper/newsLetterSub";
import { sendEmail } from "../helper/sendEmail";
import { useState } from 'react';
import { Toaster,toast } from 'sonner';
function Footer() {

      const [emailState, setEmailState] = useState("")
      async function newsLetter(e){
          e.preventDefault()
          const formData = new FormData(e.target)
          const email = formData.get('email')
          console.log(email)
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


  return (
    <footer className="bg-[#0a0a0a] text-white py-10 px-6 md:px-20">
    <Toaster richColors position='top-right'/>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Logo & Mission */}
        <div>
                    <img src={logo} alt=""  className="w-[90px] m-auto"/>
          <h2 className="text-2xl font-bold mb-4 text-[#ff4d4f]">Parakletus Publishing</h2>
          <p className="text-sm text-gray-400">
            Transforming manuscripts into masterpieces. We empower authors with faster timelines, global reach, and affordable publishing services.
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Services</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="https://tinyurl.com/4p8bn245">Book Editing</a></li>
            <li><a href="https://tinyurl.com/4p8bn245">Cover Design</a></li>
            <li><a href="https://tinyurl.com/4p8bn245">Marketing</a></li>
            <li><a href="https://tinyurl.com/4p8bn245">Distribution</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/#stat">Testimonials</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/barcode-gen">Barcode Generator</Link></li>
          </ul>
        </div>

        {/* Newsletter & Social */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Join Our Community</h3>
          <p className="text-sm mb-2 text-gray-400">Subscribe for writing tips, events, and publishing resources.</p>
          
            <form action="" onSubmit={(e) => {newsLetter(e)}} className='flex overflow-hidden rounded-md mb-4'>
              <input
              type="email"
              placeholder="you@example.com"
              className="w-[70px] px-3 py-2 text-[black] bg-[#313131]"
              onChange={(e) => setEmailState(e.target.value)} value={emailState}
              name='email'
            />
            <button className="bg-[#ff4d4f] text-white px-4">Subscribe</button>
            </form>
          <div className="flex gap-4 text-[#ff4d4f] text-xl">
            <a href="https://www.facebook.com/dparakletus/"><FaFacebookF /></a>
            <a href="https://twitter.com/parakletus_ng"><FaTwitter /></a>
            <a href="https://www.instagram.com/parakletus.pub/"><FaInstagram /></a>
            <a href="https://www.linkedin.com/company/parakletus-hub-nigeria/?originalSubdomain=ng"><FaLinkedin /></a>
          </div>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Parakletus Publishing. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
