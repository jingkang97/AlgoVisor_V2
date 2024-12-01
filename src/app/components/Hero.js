import React from "react";
import CustomButton from "./CustomButton";
import Tile from "./Tile";
import GradientButton from "./GradientButton";
import { ArrowRightIcon, MapIcon } from "@heroicons/react/24/outline";
import MainTextTypingEffect from "./MainTextTypingEffect";
import TileGrid from "./TileGrid";
import MainText from "./MainText";
import { Spotlight } from "./ui/Spotlight";
export default function Hero() {
  return (
    <main className="w-full relative">
      <section
        className="relative w-full grid grid-cols-20 h-[90vh] overflow-y-clip"
        style={{
          maskImage:
            "radial-gradient(circle, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 80%)",
          WebkitMaskImage:
            "radial-gradient(circle, rgba(0, 0, 0, 1) 30%, rgba(0, 0, 0, 0) 70%)",
          maskSize: "cover",
          WebkitMaskSize: "cover",
        }}
      >
        {Array.from(Array(50 * 50), (_, i) => (
          <Tile key={i} />
        ))}
        <TileGrid />
      </section>
      <div className="pointer-events-none absolute inset-0 flex flex-col gap-5 items-center justify-center z-10 mb-3">
        <div className="pointer-events-auto">
          <GradientButton
            text={
              <div className="flex items-center space-x-2">
                <MapIcon className="h-5 w-5 text-white" />
                <span>View roadmap</span>
                <ArrowRightIcon className="h-5 w-5 text-white" />
              </div>
            }
          />
        </div>
        {/* <h1 className=" text-9xl tracking-tight">Code your way to success</h1> */}
        {/* <MainTextTypingEffect /> */}
        <Spotlight className="-top-[100px] left-[650px]" fill="white" />
        <MainText />
        <p>By alumni from</p>
        <div className="flex items-center justify-center gap-4 mt-[-20px]">
          <img
            alt="NUS"
            src="/NUS_2.png"
            className="h-20 w-auto transition duration-300 ease-in-out hover:filter hover:drop-shadow-[0_0_6px_#fff]"
          />
          <img
            alt="NTU"
            src="/NTU.png"
            className="h-12 w-auto transition duration-300 ease-in-out hover:filter hover:drop-shadow-[0_0_6px_#fff]"
          />
        </div>
        <p className="w-1/2 text-xl text-center tracking-wide">
          One stop DSA learning platform
        </p>
        <div className="pointer-events-auto flex space-x-4">
          <CustomButton
            bgColor="white"
            text="Get Started"
            color="text-black"
            hoverColor="hover:bg-gray-200"
          />
          <CustomButton text={"Try a question"} />
        </div>
      </div>
    </main>
  );
}
