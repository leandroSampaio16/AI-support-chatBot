"use client"

import { useAuthContextHook } from "@/context/use-auth-contex";
import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import TypeSelectionForm from "./type-selection-form";
import { cn } from "@/lib/utils";

type Props = {};

const HighLightBar = (props: Props) => {
  
  const { currentStep } = useAuthContextHook();


  return (
  <div className="grid grid-cols-3 gap-3">
        <div className={cn("rounded-full h-2 col-span-1", currentStep == 1 ? "bg-orange-500" : "bg-gray-500")}></div>
        <div className={cn("rounded-full h-2 col-span-1", currentStep == 2 ? "bg-orange-500" : "bg-gray-500")}></div>
        <div className={cn("rounded-full h-2 col-span-1", currentStep == 3 ? "bg-orange-500" : "bg-gray-500")}></div>
  </div>
  )
};

export default HighLightBar;
