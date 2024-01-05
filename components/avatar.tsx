"use client"

import Image from "next/image"

export const UserAvatar = ({
   src
}: { src: string }) => {
   return (
    <div className="relative rounded-full w-12 h-12">
      <Image src={src || '/error.png'} alt="profile" fill className="rounded-full" />
    </div>
   )
}