"use client"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { MenuBar } from "./mobile-menu"
import { ModeToggle } from "@/components/mode-toggle"
import { User } from "@prisma/client"

interface NavbarProps {
  user: User
}

export const Navbar =  ({
  user
}: NavbarProps) => {
   return (
      <div className="border-b">
      <nav className="h-20 flex items-center justify-between px-10 md:px-20">
        <div className="relative h-16 w-16">
          <Image src='/error.png' alt="logo" fill />
        </div>
        <div className="flex items-center justify-center gap-x-2">
          <ModeToggle />
          {
            !user ?
            <Button asChild>
              <Link href='signin'>
                Signin
              </Link>
            </Button>
            : 
              <MenuBar data={user} />
          }
        </div>
      </nav>
    </div>
   )
}