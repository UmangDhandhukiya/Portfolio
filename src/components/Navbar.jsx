import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { label: "Home", link: "#home" },
    { label: "About Me", link: "#about" },
    { label: "Skill", link: "#skills" },
    { label: "Project", link: "#project" },
    { label: "Contact", link: "#contact" },
  ];

  return (
    <div className="fixed top-0 z-20 w-full h-16 px-4 flex justify-between items-center text-white backdrop-blur-sm bg-black/30">
      <h1 className="text-2xl sm:text-3xl font-bold">Umang_./</h1>

      <ul className="hidden md:flex gap-8 font-medium">
        {menuItems.map((item, index) => (
          <li key={index}>
            <a
              href={item.link}
              className="cursor-pointer hover:text-gray-300 transition"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      <button className="hidden md:block h-9 px-4 border rounded-md font-normal hover:bg-white hover:text-black transition">
        Hire Me!
      </button>

      <div className="md:hidden">
        <button onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-black/90 flex flex-col items-center py-6 gap-6 text-lg font-medium md:hidden">
          {menuItems.map((item, index) => (
            <li key={index} className="list-none">
              <a
                href={item.link}
                onClick={() => setIsOpen(false)}
                className="cursor-pointer hover:text-gray-300 transition"
              >
                {item.label}
              </a>
            </li>
          ))}
          <button className="h-9 px-4 border rounded-md hover:bg-white hover:text-black transition">
            Hire Me!
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
