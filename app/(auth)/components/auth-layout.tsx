import Link from 'next/link';
import { ReactNode } from 'react';

interface AuthLayoutProps {
  title: string;
  description: string;
  children: ReactNode;
  actionLabel: string;
  actionHref: string;
}

const AuthLayout = ({ title, description, children, actionLabel, actionHref }: AuthLayoutProps) => {
  return (
    <div className="flex flex-col items-center md:justify-center h-full p-4 max-w-xl mx-auto">
      <h1 className="text-6xl font-bold">🔐</h1>
      <h3 className="text-xl font-bold text-primary">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
      <div className="flex flex-col gap-4 mt-5 w-full">
        {children}
      </div>
      <p className="mt-2 text-xs text-muted-foreground text-right w-full">
        <Link href={actionHref}>{actionLabel}</Link>
      </p>
    </div>
  );
};

export { AuthLayout };