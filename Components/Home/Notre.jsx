import Image from "next/image";
import React from "react";
import manS from '../../imgs/manS.png'

const Notre = () => {
    const clip = {
        clipPath: 'polygon(0 11%, 7% 0, 100% 0, 100% 100%, 0 100%)'
    }
  return (
    <div className='container mx-auto md:max-w-[1728px] flex items-center justify-center px-[130px] mt-[200px]'>
      <div className="left w-[664px] h-[240px]">
        <h1 className='text-[#172066] text-4xl font-bold '>Notre Histoire</h1>
        <p className='text-2xl font-normal text-[#0E0E2C99] mt-4 leading-[48px] text-justify'>
          Since 2012, Solicians Law Firm has served over 2,500+ clients with
          various law disputes. Our lawyers represent a wide range of clients,
          but clients with complex legal issues and/or high conflict situations
          will benefit most from our law firm.
        </p>
      </div>
    {/* right side  */}
    <div className="right ml-10">
        <Image style={clip} src={manS} width={706} className="w=[706px] rounded-br-[200px] rounded-tl-[50px] " alt={'asd'}/>
    </div>
    </div>
  );
};

export default Notre;
