type SectionContainerProps = {
  id: string;
  children: JSX.Element[] | JSX.Element;
};

const SectionContainer: React.FC<SectionContainerProps> = ({
  id,
  children,
}) => {
  return (
    <div id={id} className="mt-10 flex-col w-full">
      {children}
    </div>
  );
};

export { SectionContainer };
