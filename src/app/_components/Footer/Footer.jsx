import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import Image from "next/image.js";

export default function Footer() {
  return (
    <footer
      className="relative bg-[url('/assets/footer/kids.png')] bg-no-repeat bg-cover bg-center text-white py-12"
      style={{ minHeight: '323px', position: 'relative' }}
    >
      <div className="absolute inset-0 bg-[#020202]/70"></div>
      <div className="relative container mx-auto px-4 md:px-6 lg:px-8 flex flex-col md:flex-row justify-center items-start gap-6 md:gap-10 ">
        {/* Left side - Logo + Text */}
        <div className="w-full md:w-1/3 space-y-4">
          <img src="/assets/footer/logo2.svg" alt="Logo" className="w-[65.95px] h-[51px] " />
          <p className="text-sm font-medium text-white/70 max-w-xs">
            Ipsam in eos qui consequatur ab cum maxime.Soluta dolor quae Ipsam in eos qui consequatur ab .Soluta dolor quae Ipsam in eos quconsequatur ab cum maxime.Soluta dolor quae            </p>
        </div>

        {/* Middle - Links */}
        <div className="w-full md:flex md:w-1/3 justify-center md:justify-between gap-6 md:gap-10">
          <div className="mb-6 md:mb-0">
            <h5 className="font-semibold text-2xl  mb-4">Let Us Help</h5>

            <ul className="space-y-2 font-medium text-white/70 text-sm">
              <li>My Account</li>
              <li>FAQs</li>
              <li>Categories</li>
              <li>All Products</li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold text-2xl mb-4">Policies</h5>
            <ul className="space-y-2 font-medium text-white/70 text-sm">
              <li>Refund Policy</li>
              <li>About Us</li>
              <li>Cancellation Policy</li>
              <li>Terms and Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>

        {/* Right side - Email */}
        <div className="w-full md:w-1/3 space-y-4">
  <h5 className="font-semibold text-2xl">Send Email</h5>

  {/* Input + Button */}
  <div className="relative flex justify-center w-full max-w-xs h-16">
    <input
      type="email"
      placeholder="Email address"
      className="p-3 pr-24 rounded-md w-full text-black bg-white"
    />
    <button
      className="absolute right-1.5 top-1.5 bottom-1.5 bg-[#BE968E] text-white px-8 rounded-xl hover:bg-[#a47f72] transition"
    >
      Send
    </button>
  </div>

  <p className="font-semibold text-sm md:text-left">Follow Us</p>

  {/* Social Icons */}
  <div className="flex text-xl">
    <div className="w-10 h-10 flex items-center justify-center overflow-hidden rounded-full transition cursor-pointer">
      <Image src="/assets/footer/facebook.svg" alt="facebook" width={11} height={18} />
    </div>
    <div className="w-10 h-10 flex items-center justify-center  text-white rounded-full transition cursor-pointer">
      <Image src="/assets/footer/Vector.svg" alt="twitter" width={20.92} height={17} />

    </div>
    <div className="w-10 h-10 flex items-center justify-center  text-white rounded-full transition cursor-pointer">
      <Image src="/assets/footer/inst.svg" alt="instagram" width={20} height={20} />
    </div>
    <div className="w-10 h-10 flex items-center justify-center  text-white rounded-full transition cursor-pointer">
      <Image src="/assets/footer/linked.svg" alt="linkedIn" width={20} height={20} />
    </div>
    <div className="w-10 h-10 flex items-center justify-center  text-white rounded-full transition cursor-pointer">
      <Image src="/assets/footer/whatsapp.svg" alt="whatsapp" width={20} height={20} />
    </div>
    <div className="w-10 h-10 flex items-center justify-center  text-white rounded-full transition cursor-pointer">
      <Image src="/assets/footer/telegram.svg" alt="telegram" width={21} height={17.5} />
    </div>
  </div>
</div>

      </div>
    </footer>
  );
}