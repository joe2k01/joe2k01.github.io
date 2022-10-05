import { About } from "./About";
import { Education } from "./Education";
import { Volunteering } from "./Volunteering";

const Content: React.FC = () => {
  return (
    <div className="md:ml-48 p-4 flex flex-col items-center">
      <About />
      <Education />
      <Volunteering />
    </div>
  );
};

export { Content };
