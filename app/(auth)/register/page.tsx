import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";

const RegisterPage = () => {
  return (
    <div className="h-full p-4 flex flex-col md:justify-center md:items-center max-w-xl mx-auto">
      <Image src="/logo.svg" alt="logo" width={100} height={100} className="hidden md:block"/>
      <h3 className="text-xl font-bold text-primary">
        Create your account
      </h3>
      <p className="text-sm text-muted-foreground">
        Fill in your details to create your account
      </p>
      <div className="flex flex-col gap-4 mt-5 w-full">
        <Input placeholder="Email" />
        <Input placeholder="Name" />
        <Input placeholder="Password" />
        <Button size="lg">Login</Button>
      </div>
      <p className="w-full mt-2 text-xs text-muted-foreground text-right">
        <Link href="/auth/login">Already have an account?</Link>
      </p>
    </div>
  );
};

export default RegisterPage;