type SideBarLinkProps = {
  link: string;
};

const SideBarLink: React.FC<SideBarLinkProps> = ({ link }) => {
  return (
    <a
      href={`#${link}`}
      className="rounded bg-transparent p-4 text-xs text-gray-200 dark:text-gray-900 hover:bg-orange-700 transition-colors ease-in-out duration-200 uppercase"
    >
      {link}
    </a>
  );
};

export { SideBarLink };
