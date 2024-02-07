"use client";

import { useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const sesstion = useSession();
  const router = useRouter();

  if (sesstion.status === "loading") {
    return null;
  }

  if (sesstion.status === "authenticated") {
    return router.push("/settings");
  }

  return (
    <div className="flex justify-center items-center h-full">{children}</div>
  );
};

export default AuthLayout;
