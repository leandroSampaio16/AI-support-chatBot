import { useAuthContextHook } from "@/context/use-auth-contex";
import React, { useState } from "react";
import { FieldValues, UseFormRegister, useFormContext } from "react-hook-form";
import UserTypeCard from "./user-type-card";

type Props = {
    register: UseFormRegister<FieldValues>  
    userType: "owner" | "student"
    setUserType: React.Dispatch<React.SetStateAction<"owner" | "student">>
};

const TypeSelectionForm = ({register, userType, setUserType}: Props) => {
  

  return (
        <>
            <h2 className="text-gravel md:text-4xl font bold">
                Create an account
            </h2>

            <p className="text-iridium md:text-sm">
                some really greate text about Something <br/> and some more text
            </p>
            <UserTypeCard register={register} setUserType={setUserType} userType={userType} value="owner" title="i own a business" text="Setting up my account for my company"/>
            <UserTypeCard register={register} setUserType={setUserType} userType={userType} value="student" title="im a student" text="Looking to learn about the tool"/>
        </>
    )
};

export default TypeSelectionForm;
