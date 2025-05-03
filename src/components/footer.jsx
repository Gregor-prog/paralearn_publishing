import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white py-10 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Logo & Mission */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-[#ff4d4f]">Parakletus Publishing</h2>
          <p className="text-sm text-gray-400">
            Transforming manuscripts into masterpieces. We empower authors with faster timelines, global reach, and affordable publishing services.
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Services</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#">Book Editing</a></li>
            <li><a href="#">Cover Design</a></li>
            <li><a href="#">Marketing</a></li>
            <li><a href="#">Distribution</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Testimonials</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>

        {/* Newsletter & Social */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Join Our Community</h3>
          <p className="text-sm mb-2 text-gray-400">Subscribe for writing tips, events, and publishing resources.</p>
          <div className="flex overflow-hidden rounded-md mb-4">
            <input
              type="email"
              placeholder="you@example.com"
              className="w-[50px] px-3 py-2 text-[black] bg-[#313131]"
            />
            <button className="bg-[#ff4d4f] text-white px-4">Subscribe</button>
          </div>
          <div className="flex gap-4 text-[#ff4d4f] text-xl">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedin /></a>
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
