import Image from "next/image";
import React from "react";
import hand from "../../imgs/hand.png";

const Vision = () => {
  return (
    <div className="container mx-auto md:max-w-[1728px] flex items-center justify-center px-[130px] mt-[200px]">
      <div className="left w-[664px] h-[240px]">
        <h1 className="text-[#172066] text-4xl font-bold ">Our Vision</h1>
        <p className="text-2xl font-normal text-[#ABABAB] mt-4 leading-[60px] text-justify">
          We are a passionate team of aviation enthusiasts - from pilots and
          mechanics, to engineers and accountants. Our individual backgrounds
          are unique but we share a singular mission: To deliver an aviation
          experience that is the pinnacle of innovation, quality and safety to
          our customers.
        </p>
      </div>
      {/* right side image */}
      <div className="right ml-10">
        <Image src={hand} width={706} className="rounded-xl " alt={"asd"} />
      </div>
    </div>
  );
};

export default Vision;
