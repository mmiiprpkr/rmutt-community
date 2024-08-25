import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AuthLayout } from "@/app/(auth)/components/auth-layout";

const ForgotPasswordPage = () => {
  return (
    <AuthLayout
      title="Forgot Password?"
      description="Enter your email to reset your password"
      actionLabel="Back to login"
      actionHref="/auth/login"
    >
      <Input placeholder="Email" />
      <Button size="lg">Reset Password</Button>
    </AuthLayout>
  );
};

export default ForgotPasswordPage;