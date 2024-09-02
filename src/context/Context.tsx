import Header from "@/components/Header";
import React from "react";

interface ContextProps {
  children: React.ReactNode;
}

export default function Context({ children }: ContextProps) {
  
  return (
    <>
      <Header />
      <main className="flex my-2 h-full w-full justify-center items-center"> 
        <section>{children}</section>
      </main>
    </>
  );
}
