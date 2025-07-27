import React from "react";
import Flex from "./Flex";

const Item = ({ title,text }) => {
  return (
    <>
      <Flex className="flex-col">
        <h1 className="font-sen text-[19px]">{title}</h1>
        <h2 className="font-sen text-[19px] font-bold">{text}</h2>
      </Flex>
   
    </>
  );
};

export default Item;
