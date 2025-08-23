"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
  <div className="w-fit  md:w-full  z-10 top-10 fixed  py-5 flex items-center justify-center">

        <Menu setActive={setActive}>

        <Link   href="/">
        <MenuItem setActive={setActive} active={active} item="Home" >
        </MenuItem>
        </Link>
        <Link   href="/">
        <MenuItem setActive={setActive} active={active} item="Our courses" >
        <div className="flex flex-col space-y-4  text-sm">
            
           <HoveredLink href="/courses/frontend">Frontend Development</HoveredLink>
            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
        </div>
        </MenuItem>
        </Link>
          
          <Link href='/contact' >
          
            <MenuItem setActive={setActive} active={active} item="Conatact Us" >
          
        </MenuItem>
          </Link>
        
        </Menu>
       
    </div>
  )
}

  export default Navbar;