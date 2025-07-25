import React from "react";
import Image from "./Image";
import BannerImage from "../assets/Banner_1.png";


const Banner = () => {
  return (
   
      <section style={{backgroundImage:`url(${BannerImage})`}} className="w-full bg-no-repeat bg-cover bg-center pt-[266px] pb-[153px]">
         <div className="text-center">
          <h1 className="font-pop font-bold text-white text-[35px]">HI, I'M A FREELANCER</h1>
          <h2 className="font-pop font-bold text-white text-[110px]">DESIGNER  </h2>
          <p className="font-pop font-bold text-white text-[23px]">based in Uttara Dhaka, BANGLADESH.</p>
          <button className="font-pop font-medium text-black text-[20px] py-[15px] px-[25px] bg-[#F7DE4D] mt-[26px] border border-transparent hover:bg-transparent hover:border-white duration-500 hover:text-[#fff]">View My Works</button>
         </div>
      </section>
       

      
  );
};

export default Banner;
