"use client";

import { SessionProvider } from 'next-auth/react'
export const Session = ({ children }: { children: React.ReactNode }) => {
   return ( 
      <SessionProvider>
         {children}
      </SessionProvider>
    );
};