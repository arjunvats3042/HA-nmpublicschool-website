import React, {useState, useEffect} from "react";
import {motion} from "framer-motion";
import nmlogo from "../assets/nmnew.png";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({setActive, active, item, children, isMobile}) => {
  const isActive = active === item;

  return (
    <div
      onMouseEnter={() => !isMobile && setActive(item)}
      onClick={() => isMobile && setActive(isActive ? null : item)}
      className="relative px-4 py-2"
    >
      <motion.p
        transition={{duration: 0.3}}
        className="cursor-pointer text-gray-800 hover:text-blue-600 font-medium transition-transform duration-200 hover:scale-105 flex items-center"
      >
        {item}
        {/* Arrow for mobile and desktop */}
        {children && (
          <span className="ml-2">
            {isMobile ? (isActive ? "▼" : "▶") : "▼"}
          </span>
        )}
      </motion.p>
      {(isActive || (!isMobile && active === item)) && (
        <motion.div
          initial={{opacity: 0, scale: 0.85, y: 10}}
          animate={{opacity: 1, scale: 1, y: 0}}
          transition={transition}
          className={`${
            isMobile
              ? "mt-2"
              : "absolute top-[calc(100%_+_0.5rem)] left-1/2 transform -translate-x-1/2 pt-2"
          }`}
        >
          <motion.div
            transition={transition}
            layoutId="active"
            className="bg-white rounded-md shadow-lg border border-gray-100 overflow-hidden"
          >
            <motion.div layout className="w-max h-full p-4">
              {children}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({setActive, children, className = ""}) => (
  <nav
    className={`flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-6 ${className}`}
  >
    {children}
  </nav>
);

export const ProductItem = ({title, href}) => (
  <a href={href} className="flex space-x-2">
    <div>
      <h4 className="text-md font-medium text-gray-800 hover:text-blue-600">
        {title}
      </h4>
    </div>
  </a>
);

export const HoveredLink = ({children, ...rest}) => (
  <div className="px-4 py-2">
    <a
      {...rest}
      className="text-gray-800 hover:text-blue-600 transition-transform duration-200 hover:scale-105 font-medium"
    >
      {children}
    </a>
  </div>
);

const Header = () => {
  const [active, setActive] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleCloseDropdown = () => {
      if (!menuOpen) setActive(null);
    };

    document.addEventListener("click", handleCloseDropdown);
    window.addEventListener("scroll", handleCloseDropdown);
    return () => {
      document.removeEventListener("click", handleCloseDropdown);
      window.removeEventListener("scroll", handleCloseDropdown);
    };
  }, [menuOpen]);

  const menuItems = [
    {
      title: "About",
      submenu: [
        {title: "About School", href: "#"},
        {title: "Our Vision", href: "#"},
        {title: "Principal's Desk", href: "#"},
        {title: "Chairman's Message", href: "#"},
        {title: "Aims & Objectives", href: "#"},
      ],
    },
    {
      title: "Admission",
      submenu: [
        {title: "Procedure/Requirements", href: "#"},
        {title: "Evaluation System", href: "#"},
        {title: "Promotion Policy", href: "#"},
        {title: "Fee Structure", href: "#"},
      ],
    },
    {
      title: "Academics",
      submenu: [
        {title: "Sallybus", href: "#"},
        {title: "HomeWork", href: "#"},
        {title: "Assignments", href: "#"},
        {title: "TC", href: "#"},
        {title: "Circular/Notices", href: "#"},
      ],
    },
    {
      title: "Infrastructure",
      submenu: [
        {title: "School Building", href: "#"},
        {title: "Digital Classrooms", href: "#"},
        {title: "Laboratories", href: "#"},
        {title: "Games & Sports", href: "#"},
      ],
    },
    {title: "Result", href: "#"},
    {title: "Gallery", href: "#"},
    {title: "Contact Us", href: "#"},
  ];

  return (
    <nav className="bg-white text-gray-800 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <div className="flex items-center">
          <img src={nmlogo} alt="Company Logo" className="h-18 md:h-16 mr-4" />
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-800 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:block">
          <Menu setActive={setActive}>
            {menuItems.map((item, index) =>
              item.submenu ? (
                <MenuItem
                  key={index}
                  setActive={setActive}
                  active={active}
                  item={item.title}
                  isMobile={false}
                >
                  <div className="flex flex-col space-y-2">
                    {item.submenu.map((subItem, subIndex) => (
                      <ProductItem
                        key={subIndex}
                        title={subItem.title}
                        href={subItem.href}
                      />
                    ))}
                  </div>
                </MenuItem>
              ) : (
                <HoveredLink key={index} href={item.href}>
                  {item.title}
                </HoveredLink>
              )
            )}
          </Menu>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4">
          <Menu setActive={setActive} className="flex-col space-y-2">
            {menuItems.map((item, index) =>
              item.submenu ? (
                <MenuItem
                  key={index}
                  setActive={setActive}
                  active={active}
                  item={item.title}
                  isMobile={true}
                >
                  <div className="flex flex-col space-y-2">
                    {item.submenu.map((subItem, subIndex) => (
                      <ProductItem
                        key={subIndex}
                        title={subItem.title}
                        href={subItem.href}
                      />
                    ))}
                  </div>
                </MenuItem>
              ) : (
                <HoveredLink key={index} href={item.href}>
                  {item.title}
                </HoveredLink>
              )
            )}
          </Menu>
        </div>
      )}
    </nav>
  );
};

export default Header;
