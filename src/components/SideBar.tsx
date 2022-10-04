import { SideBarLink } from "./SideBarLink";

const SideBar: React.FC = () => {
  return (
    <div className="hidden md:flex h-full fixed p-4 top-0 w-40 left-0 flex-col bg-orange-600 shadow-xl shadow-orange-500 justify-center items-center">
      <SideBarLink link="about" />
      <SideBarLink link="education" />
      <SideBarLink link="volunteering" />
      <SideBarLink link="career" />
    </div>
  );
};

export { SideBar };
