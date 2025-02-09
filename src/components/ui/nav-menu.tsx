
import React from 'react';
import { cn } from "@/lib/utils";

interface NavMenuProps {
  className?: string;
}

export const NavMenu = ({ className }: NavMenuProps) => {
  return (
    <nav className={cn("fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 shadow-sm", className)}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="/" className="text-xl font-semibold text-gray-900">
          Logo
        </a>
        <div className="flex items-center space-x-8">
          <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">
            Features
          </a>
          <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">
            About
          </a>
          <button className="bg-primary px-4 py-2 rounded-lg text-white hover:bg-primary/90 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};
