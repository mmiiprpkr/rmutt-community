import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AuthLayout } from "@/app/(auth)/components/auth-layout";
import Link from "next/link";

const LoginPage = () => {
  return (
    <AuthLayout
      title="Login to your account"
      description="Enter your credentials to access your account"
      actionLabel="Don't have an account?"
      actionHref="/auth/register"
    >
      <Input placeholder="Email" />
      <Input placeholder="Password" type="password" />
      <Link href="/auth/forgot-password" className="text-sm text-primary hover:underline text-left">
        Forgot password?
      </Link>
      <Button size="lg">Login</Button>
    </AuthLayout>
  );
};

export default LoginPage;