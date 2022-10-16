import Image from "next/image";
import Link from "next/link";
import logo from "../../imgs/logo.png";

export default function Navbar() {
  return (
    <div className="font-Montserrat flex items-center space-x-[102px] mx-auto justify-center py-[28px] px-[40px] h-[126px] mx-auto shadow-[0_0px_10px_0px_rgba(0,0,0,0.3)]">
      <Image src={logo} className="max-w-[270.87px] max-h-[70px]" alt="asd" />
      <div>
        <ul className="menu-items flex space-x-[50px]">
          <li className=" text-[#ABABAB] text-lg font-medium hover:text-black hover:font-bold hover:text-[18px]">
            <Link
              href="#">
              Accueil
            </Link>
          </li>
          <li className=" text-[#ABABAB] text-lg font-medium hover:text-black hover:font-bold hover:text-[18px]">
            <Link
              href="#">
              Avions
            </Link>
          </li>
          <li className=" text-[#ABABAB] text-lg font-medium hover:text-black hover:font-bold hover:text-[18px]">
            <Link
              href="#">
              Services
            </Link>
          </li>

          <li className=" text-[#ABABAB] text-lg font-medium hover:text-black hover:font-bold hover:text-[18px]">
            <Link
              href="#">
              Qui somme Nous
            </Link>
          </li>
          <li className=" text-[#ABABAB] text-lg font-medium hover:text-black hover:font-bold hover:text-[18px]">
            <Link
              href="#">
              Contactez-Nous
            </Link>
          </li>
        </ul>
      </div>
      {/* sign  */}
      <div>
        <a
          href="#"
          className="w-[190px] h-[60px] mr-[20px] inline-flex items-center justify-center  rounded-md border border-[#72ADD7] px-4 py-2 bold font-medium text-[#72ADD7] shadow-sm hover:bg-indigo-700"
        >
          Sign in / Sign Up
        </a>
        <a
          href="#"
          className="w-[190px] h-[60px] inline-flex items-center justify-center whitespace-nowrap rounded-md border border-[#72ADD7] bg-[#72ADD7] px-4 py-2 bold font-medium text-white shadow-sm hover:bg-indigo-700"
        >
          Make a Booking
        </a>
      </div>
    </div>
  );
}
