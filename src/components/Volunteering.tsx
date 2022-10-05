import { SectionContainer } from "./SectionContainer";

const Volunteering: React.FC = () => {
  return (
    <SectionContainer id="volunteering">
      <h3 className="text-3xl font-bold w-min">
        <span className="gradientText">Volunteering</span>
      </h3>
      <div>
        <p>
          During my time at university I've engaged in various volunteering and
          society related activities. I currently am{" "}
          <span>
            <a
              href="http://www.shocksoc.org/"
              className="text-orange-400 hover:text-orange-500 visited:text-violet-600"
            >
              ShockSoc
            </a>
          </span>
          's secretary as well as{" "}
          <span>
            <a
              href="https://nouse.co.uk/"
              className="text-orange-400 hover:text-orange-500 visited:text-violet-600"
            >
              Nouse
            </a>
          </span>
          's Deputy Technical Director. I've also covered the role of Student
          Representative for the second year cohort of Electronic Engineers.
          Furthermore, I am a member of the{" "}
          <span>
            <a
              href="https://engx.theiet.org/local-networks/yh2"
              className="text-orange-400 hover:text-orange-500 visited:text-violet-600"
            >
              North Yorkshire Group of IET volunteers
            </a>
          </span>.
        </p>
      </div>
    </SectionContainer>
  );
};

export { Volunteering };
