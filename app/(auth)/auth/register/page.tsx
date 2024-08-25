import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AuthLayout } from "@/app/(auth)/components/auth-layout";

const RegisterPage = () => {
  return (
    <AuthLayout
      title="Create your account"
      description="Fill in your details to create your account"
      actionLabel="Already have an account?"
      actionHref="/auth/login"
    >
      <Input placeholder="Email" />
      <Input placeholder="Name" />
      <Input placeholder="Password" />
      <Button size="lg">Register</Button>
    </AuthLayout>
  );
};

export default RegisterPage;