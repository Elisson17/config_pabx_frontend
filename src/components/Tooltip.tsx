import React from "react";
import {
  Tooltip as TooltipComponent,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ReactNode } from "react";

interface TooltipsProps {
  className?: any;
  side?: any;
  title: string;
  children: ReactNode;
}

export default function Tooltip({
  title,
  children,
  side,
  className,
}: TooltipsProps) {
  return (
    <>
      <TooltipProvider delayDuration={100}>
        <TooltipComponent>
          <TooltipTrigger>{children}</TooltipTrigger>
          <TooltipContent className={`${className} drop-shadow-md`} side={side}>
            {title}
          </TooltipContent>
        </TooltipComponent>
      </TooltipProvider>
    </>
  );
}
