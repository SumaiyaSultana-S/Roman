import React from 'react'
import { IoMdColorPalette } from "react-icons/io";
import { MdMonitor } from "react-icons/md";
import { MdOutlineDesignServices } from "react-icons/md";
import { AiOutlineCodepen } from "react-icons/ai";
import { GrGallery } from "react-icons/gr";
const What = () => {
  return (
    <section className='h-[500px] bg-[#EFEFEF] mt-[40px] pt-[40px]'>
        <div className=" text-center mt-[69px] ">
          <span className="text-[23px] font-oswald px-[23px] py-[8px] bg-[#F7DE4D]">
            What I Do
          </span>
          <br />
          <span className="text-[33px] font-robo font-bold mt-[16px]">
            How I can help your next project
          </span>
        </div>
        <div className="">
            <h1>{IoMdColorPalette}</h1>
            <h1>{MdMonitor}</h1>
            <h1>
                {MdOutlineDesignServices}
            </h1>
            <h1>{AiOutlineCodepen}</h1>
            <h1>{GrGallery}</h1>
        </div>
    </section>
  )
}

export default What
