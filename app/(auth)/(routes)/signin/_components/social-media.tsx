"use client";

import { IconType } from "react-icons";

import { Button } from "@/components/ui/button";

interface SocailMediaProps {
   label: string
   icon: IconType;
   onClick: () => void
}

export const SocailMedia = ({
   icon: Icon,
   onClick,
   label
}: SocailMediaProps) => {
   return (
      <Button variant="default" className="w-full flex items-center justify-center" onClick={onClick}>
         {label} 
         <Icon className="h-4 w-4 ml-2"/>
      </Button>
   )
}