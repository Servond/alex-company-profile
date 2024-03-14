import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Bars3Icon } from "@heroicons/react/16/solid";
import Image from "next/image";
import Link from "next/link";

interface Props {
  openNav: () => void;
}

const Navigation = () => {
  const [isRouting, setisRouting] = useState(false);
  const path = usePathname();
  const [isActive, setisActive] = useState(path);
  const [prevPath, setPrevPath] = useState("/");

  useEffect(() => {
    if (prevPath !== path) {
      setisRouting(true);
    }
  }, [path, prevPath]);

  useEffect(() => {
    if (isRouting) {
      setPrevPath(path);
      const timeout = setTimeout(() => {
        setisRouting(false);
      }, 1200);
      return () => clearTimeout(timeout);
    }
  }, [isRouting]);

  return null;
};

const Nav = ({ openNav }: Props) => {
  const handleNavLinkClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-[100%] h-[50px] fixed z-[10000] top-0 has-[12vh] bg-[#37a6b0] shadow-md">
      <div className="flex items-center justify-between w-[80%] mx-auto px-[50px] h-[100%]">
        <div>
          <h1>
            <Image src="/images/Logo.png" alt="photo" width={150} height={50} />
          </h1>
        </div>
        <h2 className="text-white"></h2>
        {/* Navigation links using Link component */}
        <div
          className="nav-link"
          onClick={() => handleNavLinkClick("home-section")}
        >
          Home
        </div>
        <div
          className="nav-link"
          onClick={() => handleNavLinkClick("about-section")}
        >
          About Us
        </div>
        <div
          className="nav-link"
          onClick={() => handleNavLinkClick("products-section")}
        >
          Products
        </div>
        <div
          className="nav-link"
          onClick={() => handleNavLinkClick("teams-section")}
        >
          Our Team
        </div>
        <div
          className="nav-link"
          onClick={() => handleNavLinkClick("testimonials-section")}
        >
          Testimonials
        </div>
        <div
          className="nav-link"
          onClick={() => handleNavLinkClick("contact-section")}
        >
          Contact
        </div>
        <div onClick={openNav}>
          <Bars3Icon className="w-[2rem] md:hidden h-[2rem] cursor-pointer text-orange-600" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
