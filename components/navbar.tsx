import Link from "next/link";
import Image from "next/image";
import { MenuIcon } from "lucide-react";

import { Button } from "./ui/button";

export const Navbar = () => {
  return (
    <div className="fixed bg-[#F2F1E9] z-50 h-[72px] w-full">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="logo" width={55} height={55} />
          <h1 className="hidden md:block md:text-2xl font-bold">Rmutt Community</h1>
        </Link>
        <div className="hidden md:flex items-center gap-2">
          <Link href="/auth/login">
            <Button>เข้าสู่ระบบ</Button>
          </Link>
          <Link href="/auth/register">
            <Button variant="secondary">สมัครสมาชิก</Button>
          </Link>
        </div>
        <div className="md:hidden">
          <Button variant="outline">
            <MenuIcon />
          </Button>
        </div>
      </div>
    </div>
  );
};