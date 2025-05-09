import React, {useState, useEffect, useRef} from "react";
import {Link, useLocation} from "react-router-dom";
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

// MenuItem and Menu components remain unchanged
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
              : "absolute top-[calc(100%+0.5rem)] left-1/2 transform -translate-x-1/2 pt-2"
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

const Header = () => {
  const [active, setActive] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef(null); // Ref to track the menu container

  // Close dropdowns and mobile menu on route change
  useEffect(() => {
    setActive(null);
    setMenuOpen(false);
  }, [location]);

  // Close dropdown on scroll
  useEffect(() => {
    const handleScroll = () => {
      setActive(null);
      setMenuOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setActive(null);
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const menuItems = [
    {
      title: "About",
      submenu: [
        {title: "About School", path: "/about/school"},
        {title: "Our Vision", path: "/about/vision"},
        {title: "Principal's Desk", path: "/about/principal"},
        {title: "Chairman's Message", path: "/about/chairman"},
        {title: "Aims & Objectives", path: "/about/aims"},
      ],
    },
    {
      title: "Admission",
      submenu: [
        {title: "Procedure/Requirements", path: "/admission/procedure"},
        {title: "Evaluation System", path: "/admission/evaluation"},
        {title: "Promotion Policy", path: "/admission/promotion"},
        {title: "Fee Structure", path: "/admission/fees"},
      ],
    },
    {
      title: "Academics",
      submenu: [
        {title: "Syllabus", path: "/academics/syllabus"},
        {title: "Academics Overview", path: "/academics/overview"},
        {title: "Curriculum Overview", path: "/academics/curriculum"},
        {title: "Examination Schedule", path: "/academics/examination"},
        {title: "TC", path: "/academics/tc"},
        {title: "Circular/Notices", path: "/academics/circular"},
      ],
    },
    {
      title: "Infrastructure",
      submenu: [
        {title: "School Building", path: "/infrastructure/building"},
        {
          title: "Digital Classrooms",
          path: "/infrastructure/digital-classrooms",
        },
        {title: "Laboratories", path: "/infrastructure/laboratories"},
        {title: "Games & Sports", path: "/infrastructure/games-sports"},
      ],
    },
    {title: "Result", path: "/result"},
    {title: "Gallery", path: "/gallery"},
    {title: "Contact Us", path: "/contact"},
  ];

  return (
    <nav
      ref={menuRef}
      className="bg-white text-gray-800 sticky top-0 z-50 shadow-lg"
    >
      <div className="container mx-auto px-4 flex items-center justify-between py-2">
        <Link to="/">
          <img
            src={nmlogo}
            alt="N.M. Public School Logo"
            className="h-16 md:h-16"
          />
        </Link>

        {/* Mobile Hamburger */}
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
            {menuItems.map((item, idx) =>
              item.submenu ? (
                <MenuItem
                  key={idx}
                  item={item.title}
                  active={active}
                  setActive={setActive}
                  isMobile={false}
                >
                  <div className="flex flex-col space-y-2">
                    {item.submenu.map((sub, i) => (
                      <Link
                        key={i}
                        to={sub.path}
                        className="px-4 py-2 hover:bg-gray-100 rounded"
                      >
                        {sub.title}
                      </Link>
                    ))}
                  </div>
                </MenuItem>
              ) : (
                <Link
                  key={idx}
                  to={item.path}
                  className="px-4 py-2 text-gray-800 hover:text-blue-600 transition-transform duration-200 hover:scale-105 font-medium"
                >
                  {item.title}
                </Link>
              )
            )}
          </Menu>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4">
          <Menu setActive={setActive} className="flex-col space-y-2">
            {menuItems.map((item, idx) =>
              item.submenu ? (
                <MenuItem
                  key={idx}
                  item={item.title}
                  active={active}
                  setActive={setActive}
                  isMobile={true}
                >
                  <div className="flex flex-col">
                    {item.submenu.map((sub, i) => (
                      <Link
                        key={i}
                        to={sub.path}
                        className="px-4 py-2 hover:bg-gray-100 rounded"
                      >
                        {sub.title}
                      </Link>
                    ))}
                  </div>
                </MenuItem>
              ) : (
                <Link
                  key={idx}
                  to={item.path}
                  className="px-4 py-2 text-gray-800 hover:text-blue-600 transition-transform duration-200 hover:scale-105 font-medium"
                >
                  {item.title}
                </Link>
              )
            )}
          </Menu>
        </div>
      )}
    </nav>
  );
};

export default Header;
