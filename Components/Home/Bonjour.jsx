/* eslint-disable react/no-unescaped-entities */
import { faArrowRight, faMessage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";
import plane from "../../imgs/plane.png";
import vector from "../../imgs/Vector 1.png";

const Bonjour = () => {
  const msgIcon = <FontAwesomeIcon icon={faMessage} />;
  const arrowIcon = <FontAwesomeIcon icon={faArrowRight} />;
  return (
    <div className="container mx-auto md:max-w-[1728px] flex px-[130px] items-center justify-center mt-14">
      <Image src={vector} alt="" />
      <div className="w-[875px] h-[458px] flex flex-col justify-center ml-5">
        <h6 className="text-[#72ADD7] font-bold text-[24px] font-Poppins">
          Bonjour,
        </h6>
        <h1 className="text-4xl font-bold w-[768px] mt-[13px] mb-[16px] font-poppins leading-[68.6px]">
          Ce que nous faisons est ce qui nous rend Qui somme Nous
        </h1>
        <p className="text-[22px] font-Poppins font-[400px] text-[#ABABAB] keading-[37.73px] mb-10">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled.
        </p>
        <div>
          <div className="flex">
            <div className="flex items-center justify-center font-semibold text-white bg-[#72ADD7] text-sm w-[136px] h-[54px] rounded">
              Parlons <span className="w-4 ml-2">{msgIcon}</span>
            </div>
            <div className="ml-7 flex items-center justify-center font-medium text-[#172066] text-[22px]">
              Consultez nos services
              <span className="w-4 ml-3 text-[#72ADD7] mt-2">{arrowIcon}</span>
            </div>
          </div>
        </div>
      </div>
      {/* right */}
      <div className="right ml-[106px] w-[525.79px] drop-shadow-[0_-25px_2px_#72add73d]">
        <Image src={plane} alt="asd" width={525} />
      </div>
    </div>
  );
};

export default Bonjour;
