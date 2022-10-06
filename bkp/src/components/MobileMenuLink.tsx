type MobileMenuLinkProps = {
  link: string;
  closeMenu: () => void;
};

const MobileMenuLink: React.FC<MobileMenuLinkProps> = ({ link, closeMenu }) => {
  return (
    <>
      <a
        href={`#${link}`}
        className="text-gray-200 dark:text-gray-900 uppercase w-full text-center text-3xl my-10"
        onClick={() => closeMenu()}
      >
        {link}
      </a>
      <hr className="border-2 border-gray-200 dark:border-gray-900" />
    </>
  );
};

export { MobileMenuLink };
