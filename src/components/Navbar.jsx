import React, { useEffect, useState } from "react";
import logo from "../assets/react.svg";

import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const navItems = [
  { label: "Features", link: "#features" },
  { label: "Workflow", link: "#" },
  { label: "Pricing", link: "#" },
  { label: "Testimonials", link: "#" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  //handling the resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg border-b py-3 border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img src={logo} alt="logo" className="size-10 mr-2" />
            <span className="text-xl tracking-tight text-white">Sam Comp</span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.link} className="text-white font-bold">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a
              href="#"
              className="border rounded-md px-3 py-2 border-white text-white font-bold"
            >
              Sign In
            </a>
            <a
              href="#"
              className="bg-gradient-to-r from-orange-400 to-orange-900 py-2 px-3 rounded-md text-white font-bold"
            >
              Create an Account
            </a>
          </div>
          <div className="lg:hidden md:flex flex:col justify-end">
            <Button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-5">
                  <a href={item.link} className="font-bold text-white">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <a
                href="#"
                className="border rounded-md px-3 py-2 border-white text-white font-bold"
              >
                Sign In
              </a>
              <a
                href="#"
                className="bg-gradient-to-r from-orange-400 to-orange-900 py-2 px-3 rounded-md text-white font-bold"
              >
                Sign Up
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
