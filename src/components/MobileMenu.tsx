import { useState } from "react";
import { MdClose, MdMenu } from "react-icons/md/index";
import MobileMenuLink from "./MobileMenuLink";

const expandedClassName =
  "bg-orange-400 border-gray-200 dark:border-gray-900 shadow-gray-300 dark:shadow-black";

const collapsedClassName =
  "bg-gray-200 dark:bg-gray-900 border-orange-400 shadow-orange-500";

const MobileMenu: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);
  const closeMenu = () => setShowMenu(false);
  return (
    <>
      <button
        className={`md:hidden fixed top-0 right-0 m-4 z-50 p-4 rounded-xl shadow-md border-2 ${
          showMenu ? expandedClassName : collapsedClassName
        } transition-colors ease-in-out duration-300`}
        onClick={() => setShowMenu((m) => !m)}
      >
        {showMenu ? (
          <MdClose className="fill-gray-200 dark:fill-gray-900" size={40} />
        ) : (
          <MdMenu className="fill-orange-400" size={40} />
        )}
      </button>
      <div
        className={`fixed left-0 top-0 w-full h-full flex flex-col justify-center transition-transform ease-in-out duration-300 bg-orange-500 z-40 ${
          showMenu ? "translate-x-0" : "translate-x-[200vw]"
        }`}
      >
        <MobileMenuLink link="about" closeMenu={closeMenu} />
        <MobileMenuLink link="education" closeMenu={closeMenu} />
        <MobileMenuLink link="volunteering" closeMenu={closeMenu} />
        <MobileMenuLink link="career" closeMenu={closeMenu} />
        <MobileMenuLink link="contact me" closeMenu={closeMenu} />
      </div>
    </>
  );
};

export default MobileMenu;
