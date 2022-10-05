import { About } from "./About";
import { Education } from "./Education";

const Content: React.FC = () => {
  return (
    <div className="md:ml-40 p-4 flex flex-col items-center">
      <About />
      <Education />
    </div>
  );
};

export { Content };
