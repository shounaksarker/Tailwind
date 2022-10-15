import Image from "next/image";
import React from "react";
import manL from "../../imgs/manL.png";

const Mission = () => {
  return (
    <div className="container mx-auto md:max-w-[1728px] flex items-center justify-center px-[130px] mt-[196px]">
      <div className="left">
        <Image src={manL} width={706} className=" rounded" alt={"asd"} />
      </div>
      {/* right */}
      <div className="right w-[848px] ml-10">
        <h1 className="text-[#172066] text-4xl font-bold ">Our Mission</h1>
        <h1 className="text-[#72ADD7] text-4xl font-semibold my-5">
          We are World-Class Total Solution Contractor.
        </h1>
        <p className="text-[26px] font-normal text-[#ABABAB] mt-4 leading-[52px] text-justify">
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non pro
          ident.
        </p>

        <div className="flex space-x-[40px] mt-12">
          {/* 1 */}
          <div className='w-[308px]'>
            <div className="w-[101px] h-[101px] bg-[#A1D5FB] rounded-full relative">
              <span className="text-5xl font-bold absolute top-[35px] left-[32px]">
                5M+
              </span>
            </div>
            <p className="text-xl font-medium ml-8 mt-2">
              Nombre total de passagers
            </p>
          </div>
          {/* 2 */}
          <div className='w-[198px]'>
            <div className="w-[101px] h-[101px] bg-[#D2D7FF] rounded-full relative">
              <span className="text-5xl font-bold absolute top-[35px] left-[32px]">
                98%
              </span>
            </div>
            <p className="text-xl font-medium ml-8 mt-2">
            Clients satisfaits
            </p>
          </div>
          {/* 3 */}
          <div className='w-[260px]'>
            <div className="w-[101px] h-[101px] bg-[#C7F2FC] rounded-full relative">
              <span className="text-5xl font-bold absolute top-[35px] left-[32px]">
                15M+
              </span>
            </div>
            <p className="text-xl font-medium ml-8 mt-2">
            Social Media Followers
            </p>
          </div>
        </div>
        {/* rounded part end */}
      </div>
    </div>
  );
};

export default Mission;
