'use client'

import { SessionProvider } from "next-auth/react";

const AuthProvider = ({children}) => {
  return (
    // wrapping all children with  session provider for access of user 
    <SessionProvider>
      {children}
    </SessionProvider>
  );
};

export default AuthProvider;