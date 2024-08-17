import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";

const ForgotPasswordPage = () => {
  return (
    <div className="h-full p-4 flex flex-col md:justify-center md:items-center max-w-xl mx-auto">
      <Image src="/logo.svg" alt="logo" width={100} height={100} className="hidden md:block"/>
      <h3 className="text-xl font-bold text-primary">
        Forgot Password?
      </h3>
      <p className="text-sm text-muted-foreground">
        Enter your email to reset your password
      </p>
      <div className="flex flex-col gap-4 mt-5 w-full">
        <Input placeholder="Email" />
        <Button size="lg">Reset Password</Button>
      </div>
      <p className="w-full mt-2 text-xs text-muted-foreground text-right">
        <Link href="/auth/login">Back to login</Link>
      </p>
    </div>
  );
};

export default ForgotPasswordPage;