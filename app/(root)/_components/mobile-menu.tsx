"use client"

import { UserAvatar } from "@/components/avatar"
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Separator } from "@/components/ui/separator";
import { User } from "@prisma/client";
import { signOut } from "next-auth/react";
import Link from "next/link";

export const MenuBar = ({ data}: { data: User }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <UserAvatar src={data?.image!} />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Munu bar</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href='settings'>
            Settings
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>Write</DropdownMenuItem>
        <DropdownMenuItem>MyBlog</DropdownMenuItem>
        <Separator />
        <Button onClick={() => signOut()} className="w-full py-2">
          Logout
        </Button>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
