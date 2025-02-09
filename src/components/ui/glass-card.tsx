
import React from 'react';
import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const GlassCard = ({ children, className, ...props }: GlassCardProps) => {
  return (
    <div
      className={cn(
        "backdrop-blur-md bg-card/80 rounded-2xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
