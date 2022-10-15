import Image from "next/image";
import React from "react";
import abel from '../../imgs/abel.png';
import diara from '../../imgs/Rectangle 28mouss.png';
import salif from '../../imgs/salif.png';

const Equipe = () => {
  return (
    <div className="container mx-auto max-w-[1728px] flex items-center justify-center px-[130px] mt-[200px]">
      <div className="left w-[502px] font-bold">
        <h6 className="text-[#172066] text-[30px]">Notre Equipe</h6>
        <h1 className="text-[55px] text-[#0B0B0B]">
          rencontrez le <span className="text-[#72ADD7]">membre génial</span> de
          notre équipe.
        </h1>
      </div>
      <div className="right w-[1042px] flex space-x-[26px] ml-11">
        <div>
            <Image src={abel} width={330} height={335} alt="" className="rounded-md" />
            <h3 className="text-[#0E0E2C] font-bold text-2xl mt-4">Abel SAWADOGO</h3>
            <p className='text-[#0E0E2C] text-xl mt-2.5'>CO-Founder</p>
        </div>
        <div>
            <Image src={salif} width={330} height={335} alt="" className="rounded-md" />
            <h3 className="text-[#0E0E2C] font-bold text-2xl mt-4">Salif OUEDRAOGO</h3>
            <p className='text-[#0E0E2C] text-xl mt-2.5'>Founder</p>
        </div>
        <div>
            <Image src={diara} width={330} height={335} alt="" className="rounded-md" />
            <h3 className="text-[#0E0E2C] font-bold text-2xl mt-4">Moussa DIARRA</h3>
            <p className='text-[#0E0E2C] text-xl mt-2.5'>CEO</p>
        </div>
      </div>
    </div>
  );
};

export default Equipe;
