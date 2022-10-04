import { useState } from "react";
import { IconContext } from "react-icons";
import { MdClose, MdMenu } from "react-icons/md";
import { MobileMenuLink } from "./MobileMenuLink";

const MobileMenu: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);
  const closeMenu = () => setShowMenu(false);
  return (
    <>
      <button
        className="md:hidden fixed h-10 top-0 right-0 m-4 z-50"
        onClick={() => setShowMenu((m) => !m)}
      >
        <IconContext.Provider
          value={{
            className: showMenu ? "fill-black" : "fill-orange-400",
            size: "40",
          }}
        >
          {showMenu ? <MdClose /> : <MdMenu />}
        </IconContext.Provider>
      </button>
      <div
        className={`fixed left-0 top-0 w-full h-full flex flex-col justify-center transition-transform ease-in-out duration-300 bg-orange-500 z-40 ${
          showMenu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <MobileMenuLink link="about" closeMenu={closeMenu} />
        <MobileMenuLink link="education" closeMenu={closeMenu} />
        <MobileMenuLink link="volunteering" closeMenu={closeMenu} />
        <MobileMenuLink link="career" closeMenu={closeMenu} />
      </div>
    </>
  );
};

export { MobileMenu };
