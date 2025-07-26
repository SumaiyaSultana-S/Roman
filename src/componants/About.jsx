import Container from "./Container";
import Flex from "./Flex";
import immg from "../assets/03.png";
import Image from "./Image";
import Item from "./Item";

const About = () => {
  return (
    <section className="relative">
      <Container>
        <div className=" text-center mt-[69px] ">
          <span className="text-[23px] font-oswald px-[23px] py-[8px] bg-[#F7DE4D]">
            About Me
          </span>
          <br />
          <span className="text-[33px] font-robo font-bold mt-[16px]">
            Know Me More
          </span>
        </div>
        <Flex className="justify-around">
          <div className="">
            <h1 className=" font-sen text-[32px] font-normal">
              Hi, I'm
              <span className="font-sun text-[38px] font-medium ml-[10px] border-[#F7DE4D] border-b-2">
                Roman Islam Joy
              </span>
            </h1>
            <p className="font-sen text-[19px] w-[782px] mt-[15px]">
              I'm a designer & developer with a passion for web design. I enjoy
              developing simple, clean and slick websites that provide real
              value to the end user. Thousands of clients have procured
              exceptional results while working with me. Delivering work within
              time and budget which meets client’s requirements is our moto.
            </p>
          </div>
          <div className="relative mt-[25px] ">
            <h1 className="h-[120px] w-[120px] bg-[#F7DE4D] relaive ml-[60px] rounded-[100%]"></h1>
            <span className=" absolute top-[10px] left-[60px] ">
              <Image src={immg} />
            </span>
            <h2 className="font-open text-[23px]">
              Years of
              <span className="font-open text-[33px] font-bold ml-[10px]">
                Experiance
              </span>
            </h2>
          </div>
        </Flex>
        <div className="">
          <Flex className="justify-around  mt-[51px]">
            <Item />
          </Flex>
        </div>
      </Container>
    </section>
  );
};

export default About;
