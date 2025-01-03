import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/Text-generate-effect";
import Button from "./ui/Button";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="blue"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="white"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="white" />
      </div>
      {/* grid */}
      <div className="h-screen w-full dark:bg-black  dark:bg-grid-white/[0.03] bg-grid-black/[0.3]  flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_1%,black)]"></div>
      </div>

      {/* name */}
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col gap-4  items-center justify-center">
          <h2 className="uppercase text-[#E4ECFF] text-xs">
            Dynamic Web Magic With Me
          </h2>
          <TextGenerateEffect
            words="Transforming Concepts into Seamless User Experiences"
            className=" text-center font-extrabold "
          />
          <Button text="Let's Work Together" className="mt-10" beam={true} />
        </div>
      </div>
    </div>
  );
};

export default Hero;