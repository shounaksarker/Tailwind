import {
  faEnvelope,
  faLocation,
  faPhone,
  faPrint,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ftr from "../../imgs/ftr.png";
import fb from "../../imgs/svg/facebook-f.svg";
import insta from "../../imgs/svg/instagram.svg";
import tweeter from "../../imgs/svg/twitter.svg";
import yt from "../../imgs/svg/youtube.svg";

const Footer = () => {
  const phone = <FontAwesomeIcon icon={faPhone} />;
  const email = <FontAwesomeIcon icon={faEnvelope} />;
  const location = <FontAwesomeIcon icon={faLocation} />;
  const fax = <FontAwesomeIcon icon={faPrint} />;
  return (
    <div className="bg-[#27282B] w-[100%] h-[581px] mx-auto pt-[66px] flex flex-col items-center mt-[200px]">
      {/* <div className="w-1728x]"> */}
      <Image src={ftr} alt="" width={270.87} height={70} />
      <p className="w-[936.25px] h-[58px] text-center text-[#8C8C8C] text-lg leading-[28.5px] text-bold mt-[38px]">
        We ara a lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud equip ex ea commodo consequat...{" "}
        <span className="text-[#AEBDE5]">Read More</span>
      </p>
      <div className="social mt-7 flex items-center justify- space-x-[38px]">
        <div className="w-[50px] h-[50px] rounded-full bg-[#3D3D40] flex justify-center">
          <Image width={13} height={23} className="" src={fb} alt="" />
        </div>

        <div className="w-[50px] h-[50px] rounded-full bg-[#3D3D40] flex justify-center">
          <Image width={19} height={23} className="" src={tweeter} alt="" />
        </div>

        <div className="w-[50px] h-[50px] rounded-full bg-[#3D3D40] flex justify-center">
          <Image width={19} height={23} className="" src={yt} alt="" />
        </div>

        <div className="w-[50px] h-[50px] rounded-full bg-[#3D3D40] flex justify-center">
          <Image width={19} height={23} className="" src={insta} alt="" />
        </div>
      </div>
      {/* social end */}

      <div className="flex justify-center items-center space-x-[120px] mt-[77px]">
        <div className="flex text-white justify-center items-center">
          <div className="p-[17px] w-[65px] rounded-full bg-[#343538]">
            {phone}
          </div>
          <div className="ml-[14.26px]">
            <h6 className="text-[#8C8C8C]">Tel</h6>
            <h3 className="text-xl font-medium">310-437-2766</h3>
          </div>
        </div>
        <div className="flex text-white justify-center items-center">
          <div className="p-[17px] w-[65px] rounded-full bg-[#343538]">
            {email}
          </div>
          <div className="ml-[14.26px]">
            <h6 className="text-[#8C8C8C]">Tel</h6>
            <h3 className="text-xl font-medium">310-437-2766</h3>
          </div>
        </div>
        <div className="flex text-white justify-center items-center">
          <div className="p-[17px] w-[65px] rounded-full bg-[#343538]">
            {location}
          </div>
          <div className="ml-[14.26px]">
            <h6 className="text-[#8C8C8C]">Tel</h6>
            <h3 className="text-xl font-medium">310-437-2766</h3>
          </div>
        </div>
        <div className="flex text-white justify-center items-center">
          <div className="p-[17px] w-[65px] rounded-full bg-[#343538]">
            {fax}
          </div>
          <div className="ml-[14.26px]">
            <h6 className="text-[#8C8C8C]">Tel</h6>
            <h3 className="text-xl font-medium">310-437-2766</h3>
          </div>
        </div>
      </div>
      {/* icons end  */}
      <div className="text-[#8C8C8C] flex justify-between w-[1154px] mt-[82px]">
        <nav>
          <ul className="flex justify-center items-center space-x-[47.53px]">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/">Avions</Link>
            </li>
            <li>
              <Link href="/">Services</Link>
            </li>
            <li>
              <Link href="/">Amenites</Link>
            </li>
            <li>
              <Link href="/">Contact Us</Link>
            </li>
          </ul>
        </nav>
        <p>© 2000-2021, All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
