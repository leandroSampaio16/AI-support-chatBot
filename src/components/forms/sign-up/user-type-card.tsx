"use Client";

import { Card, CardContent, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useAuthContextHook } from "@/context/use-auth-contex";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { FieldValues, UseFormRegister, useFormContext } from "react-hook-form";
import { User } from "lucide-react";
import { Input } from "@/components/ui/input";

type Props = {
  value: string;
  title: string;
  text: string;
  register: UseFormRegister<FieldValues>;
  userType: "owner" | "student";
  setUserType: React.Dispatch<React.SetStateAction<"owner" | "student">>;
};

const UserTypeCard = ({
  value,
  title,
  text,
  register,
  userType,
  setUserType,
}: Props) => {
  return (
    <Label htmlFor={value}>
      <Card
        className={cn(
          "w-full cursor-pointer",
          userType == value && "border-orange-500"
        )}
      >
        <CardContent className="flex justify-between p-2">
          <div className="flex items-center gap-3">
            <Card
              className={cn(
                "flex justify-center p-3",
                userType == value && "border-orange-500"
              )}
            >
              <User
                size={30}
                className={cn(
                  userType == value ? "text-orange-500" : "text-gray-500"
                )}
              ></User>
            </Card>
            <div className="">
              <CardDescription className="font-bold">{title}</CardDescription>
              <CardDescription className="font-light">{text}</CardDescription>
            </div>
          </div>
          <div>
            <div
              className={cn(
                "w-4 h-4 rounded-full",
                userType == value ? "bg-orange-500" : "text-gray-500"
              )}
            ></div>
            <Input
              {...register("type", {
                onChange: (event) => setUserType(event.target.value),
              })}
              value={value}
              id={value}
              className="hidden"
              type="radio"
            />
          </div>
        </CardContent>
      </Card>
    </Label>
  );
};

export default UserTypeCard;
