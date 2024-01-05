"use client"
import {
   Avatar,
   AvatarImage,
 } from "@/components/ui/avatar"

export const UserAvatar = ({
   src
}: { src: string }) => {
   return (
      <Avatar>
         <AvatarImage src={src || '/error.png'} alt="Profile" />
    </Avatar>
   )
}