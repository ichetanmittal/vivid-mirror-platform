
import React from 'react';
import { cn } from "@/lib/utils";

interface NavMenuProps {
  className?: string;
}

export const NavMenu = ({ className }: NavMenuProps) => {
  return (
    <nav className={cn("fixed top-0 left-0 right-0 z-50 bg-[#0D1117]/80 backdrop-blur-md", className)}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="/" className="text-2xl font-bold text-white flex items-center">
          <span className="text-[#C5F82A]">xaults</span>
          <span className="text-[#C5F82A] ml-1">*</span>
        </a>
        <div className="flex items-center space-x-8">
          <a href="/" className="text-white hover:text-[#C5F82A] transition-colors">
            Home
          </a>
          <a href="#solutions" className="text-white hover:text-[#C5F82A] transition-colors">
            Solutions
          </a>
          <a href="#about" className="text-white hover:text-[#C5F82A] transition-colors">
            About Us
          </a>
          <a href="#blogs" className="text-white hover:text-[#C5F82A] transition-colors">
            Blogs
          </a>
          <button className="bg-[#C5F82A] text-black px-6 py-2 rounded-full hover:bg-[#C5F82A]/90 transition-all">
            Book a Demo
          </button>
        </div>
      </div>
    </nav>
  );
};
