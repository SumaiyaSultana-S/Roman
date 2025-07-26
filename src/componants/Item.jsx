import React from "react";
import Flex from "./Flex";

const Item = ({ props }) => {
  return (
    <>
      <Flex className="flex-col">
        <h1 className="font-sen text-[19px]">Name:</h1>
        <h2 className="font-sen text-[19px] font-bold">Roman Islam Joy</h2>
      </Flex>
      <Flex className="flex-col">
        <h1 className="font-sen text-[19px]">Email:</h1>
        <h2 className="font-sen text-[19px] font-bold">
          romanislamjoy.12@gmail.com
        </h2>
      </Flex>
      <Flex className="flex-col">
        <h1 className="font-sen text-[19px]">From:</h1>
        <h2 className="font-sen text-[19px] font-bold">Dhaka, Bangladesh</h2>
      </Flex>
      <Flex className="flex-col">
        <h1 className="font-sen text-[19px]">Date of birth:</h1>
        <h2 className="font-sen text-[19px] font-bold">12 January, 2004</h2>
      </Flex>
    </>
  );
};

export default Item;
