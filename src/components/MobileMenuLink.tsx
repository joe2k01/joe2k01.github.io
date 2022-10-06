type MobileMenuLinkProps = {
  link: string;
  closeMenu: () => void;
};

const MobileMenuLink: React.FC<MobileMenuLinkProps> = ({ link, closeMenu }) => {
  return (
    <>
      <a
        href={`#${link}`}
        className="text-white dark:text-black uppercase w-full text-center text-3xl my-10"
        onClick={() => closeMenu()}
      >
        {link}
      </a>
      <hr className="border-2 border-white dark:border-black" />
    </>
  );
};

export { MobileMenuLink };
