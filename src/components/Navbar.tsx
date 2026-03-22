"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50",
        "w-full h-16 flex items-center justify-center",
        "bg-transparent backdrop-blur-md",
        "border-b border-border/10"
      )}
    >
      <div className="w-full max-w-375 flex items-center justify-between px-6 md:px-10">
        <div className="flex items-center gap-2">
          <img
            src="/logo_alb.png" 
            className="h-10 w-auto block" 
          />
        </div>

        <div className="flex items-center gap-3">
          <Button variant="ghost" className="text-sm font-medium">
            Calendario de eventos
          </Button>
          
          <Button className="text-sm font-medium px-5">
            Conoce más
          </Button>
        </div>
      </div>
    </header>
  );
}