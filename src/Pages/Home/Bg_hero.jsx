"use client";
import React from "react";
import { cn } from "../../Components/lib/utils";
import Hero from "./Hero";
import Whoweare from "./Whoweare";
import { Ourproduct } from "./Ourproducts";
import Contact from "./Contact";

export function BackgroundBoxes() {
  return (
    <div className="h-full relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-900 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <div className={cn()}>
      <Hero/>
      <Whoweare/>
      <Ourproduct/>
      <Contact/>
      </div>
     
    </div>
  );
}
