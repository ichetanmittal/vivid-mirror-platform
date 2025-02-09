import React, { useEffect, useRef } from 'react';
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string;
  delay?: number;
  className?: string;
}

export const AnimatedText = ({ text, delay = 0, className }: AnimatedTextProps) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (element) {
      element.style.animationDelay = `${delay}ms`;
      element.style.animationFillMode = 'forwards';
    }
  }, [delay]);

  return (
    <div
      ref={elementRef}
      className={cn(
        "opacity-0 animate-fade-up",
        className
      )}
    >
      {text}
    </div>
  );
};
