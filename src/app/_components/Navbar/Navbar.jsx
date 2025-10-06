'use client'
import Image from "next/image"

export default function Navbar() {
  return (
    <nav className="navbar bg-white shadow-sm px-4 md:px-10 py-3 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* ===== Left Section (Logo + Menu) ===== */}
        <div className="flex items-center gap-8 navbar-start">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <Image
              src="/assets/Layer_1.svg"
              alt="Logo"
              width={65.95}
              height={51}
              className="object-contain"
            />
          </a>
          {/* ===== Menu ===== */}
          <ul className="hidden lg:flex gap-6 font-medium text-gray-700">
            <li className="flex gap-1 items-center">
              <Image src="/assets/icons/navicon/home 04.svg" alt="Home" width={20} height={20} />
              <a href="/" className="text-[#8A8A8A]">Home</a>
            </li>
            <li className="flex gap-1 items-center">
              <Image src="/assets/icons/navicon/apps.svg" alt="category" width={20} height={20} />
              <a href="/" className="text-[#8A8A8A]">Our Category</a>
            </li>
            <li className="flex gap-1 items-center">
              <Image src="/assets/icons/navicon/about.svg" alt="about" width={20} height={20} />
              <a href="/" className="text-[#8A8A8A]">About Us</a>
            </li>
            <li className="flex gap-1 items-center">
              <Image src="/assets/icons/navicon/contact.svg" alt="contact" width={20} height={20} />
              <a href="/" className="text-[#8A8A8A]">Contact Us</a>
            </li>
            <li className="flex gap-1 items-center">
              <Image src="/assets/icons/navicon/faq.svg" alt="faq" width={20} height={20} />
              <a href="/" className="text-[#8A8A8A]">FAQs</a>
            </li>
          </ul>
        </div>
        {/* ===== Right Section ===== */}
        <div className="flex items-center gap-4">
          {/* ===== Icons ===== */}
          <div className="hidden lg:flex items-center gap-4">
            <Image src={"/assets/icons/navicon/shopping.svg"} alt="shopping" width={20} height={20} />
            <Image src={"/assets/icons/navicon/notification.svg"} alt="notification" width={20} height={20} />
            <Image src={"/assets/icons/navicon/love.svg"} alt="love" width={20} height={20} />
            <Image src={"/assets/icons/navicon/Frame.svg"} alt="frame" width={98} height={24} />
          </div>
          {/* ===== Mobile Menu Button ===== */}
          <div className="lg:hidden">
            <div className="dropdown dropdown-end">
              <Image tabIndex={0} src={"/assets/icons/navicon/toggle.svg"} className="cursor-pointer" alt="toggle" width={24} height={24} />
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-white rounded-box shadow-lg mt-3 right-0 w-52 z-[100]">
                <li><a>Home</a></li>
                <li><a>Our Category</a></li>
                <li><a>About Us</a></li>
                <li><a>Contact Us</a></li>
                <li><a>FAQs</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
