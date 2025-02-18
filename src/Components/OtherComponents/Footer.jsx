import React from "react"
import Logo from "../../assets/logo.avif"
import { IoLogoLinkedin } from "react-icons/io"
import { FaFacebookF, FaInstagramSquare } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa6"

function Footer() {
  return (
    <footer className="bg-gray-700/80 pt-4 ">
      <div className="max-w-7xl mx-auto flex flex-col gap-4 md:flex-row  text-white py-4 px-8">
        <div className="md:w-[40%] flex flex-col gap-4">
          <img src={Logo} alt="Eat Easy" className="w-20" />
          <p>
            Its mission is to ensure nobody has a bad meal by helping people
            discover restaurants, building dining experiences, and enabling
            restaurants to create experiences.
          </p>
        </div>
        <div className="flex justify-between gap-8 flex-wrap  flex-1">
          <div>
            <h4 className="text-xl font-medium"> Company</h4>
            <ul className="space-y-2 mt-4">
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li>Blog</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-medium"> Contact Us</h4>
            <ul className="space-y-2 mt-4">
              <li>Help & Support </li>
              <li>Partner with us</li>
              <li>Ride with us</li>
            </ul>
          </div>
          <div className="">
            <h4 className="text-xl font-medium"> Social Links</h4>
            <ul className="flex space-x-4  sm:space-x-0 sm:flex-col text-gray-900/80 justify-between items-center space-y-1 ">
              <button>
                <IoLogoLinkedin className="w-6 h-6" />
              </button>
              <button>
                <FaInstagramSquare className="w-6 h-6" />
              </button>
              <button>
                <FaFacebookF className="w-6 h-6" />
              </button>
              <button>
                <FaTwitter className="w-6 h-6" />
              </button>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
