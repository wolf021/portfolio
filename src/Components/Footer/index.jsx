import {
  faFacebook,
  faGoogle,
  faInstagram,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import React from "react"
import Logo from "@/Assets/logo.png" 
import Link from "next/link"
import { faMailBulk, faMailReply } from "@fortawesome/free-solid-svg-icons"

const Footer = () => {
  return (
    <>
    <div className="flex xl:justify-around flex-col xl:flex-row items-center space-y-10 mt-10 py-4 bg-black ">
      <div className="justfiy-center flex flex-col items-center space-y-2 xl:w-[30%] text-center ">
        <Image src={Logo} alt="" />
        <p>Tayyab iqbal</p>
        <p> Mern/React Developer having Good industry experiance Tailoring Websites as per the needs of the clients.   </p>
      </div>
      <div>
        <h5 className=" font-semibold text-2xl text-center xl:text-start " >Links</h5>
        <ul className="flex flex-col space-y-3 my-2 text-center xl:text-start " >
          <li>Testimonials</li>
          <li>why us</li>
          <li>Projects</li>
        </ul>
      </div>
      <div className="  ">
      <h5 className=" font-semibold text-2xl text-center xl:text-start  " >Social</h5>
        <ul className="flex justify-between w-full space-x-5 my-5 ">
          <li>
            <Link href={"https://wa.me/+923214308481"} >

            <FontAwesomeIcon size="2x" icon={faWhatsapp} />
            </Link>
          </li>
          <li>
            <Link href={"https://www.facebook.com/tayyabi1?mibextid=2JQ9oc"} >

            <FontAwesomeIcon size="2x" icon={faFacebook} />
            </Link>
          </li>
          <li>
            <Link href={"https://www.linkedin.com/in/tayyab-iqbal-a6a77172?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"} >
            <FontAwesomeIcon size="2x" icon={faLinkedin} />
            </Link>
          </li>
          <li>
            <Link href={"https://instagram.com/iqbal.tayyab?igshid=OGQ5ZDc2ODk2ZA=="} >
            <FontAwesomeIcon size="2x" icon={faInstagram} />
            </Link>
          </li>
          <li>
            <Link href={"mailto:tayyab9021@gmail.com"} >
            <FontAwesomeIcon size="2x" icon={faGoogle} />
            </Link>
          </li>
        </ul>
      </div>
    </div>
    <div className="text-center bg-gradient-to-r  from-blue-600 to-purple-600 py-2 text-xl font-semibold " >
      <p>Tayyab Iqbal Portfolio, 2023</p>
    </div>
    </>
  )
}

export default Footer
