import { SectionContainer } from "./SectionContainer";

const Volunteering: React.FC = () => {
  return (
    <SectionContainer id="volunteering">
      <h3 className="text-3xl font-bold">
        <span className="gradientText">Volunteering</span>
      </h3>
      <div className="mt-2 text-justify">
        <p>
          During my time at university I've engaged in various volunteering and
          society related activities. I am currently{" "}
          <span>
            <a href="http://www.shocksoc.org/" className="colourLink">
              ShockSoc
            </a>
          </span>
          's secretary as well as{" "}
          <span>
            <a href="https://nouse.co.uk/" className="colourLink">
              Nouse
            </a>
          </span>
          's Deputy Technical Director. I've also covered the role of Student
          Representative for the second year cohort of Electronic Engineers.
          Outside of University, I am a member of the{" "}
          <span>
            <a
              href="https://engx.theiet.org/local-networks/yh2"
              className="colourLink"
            >
              North Yorkshire Group of IET volunteers
            </a>
          </span>
          .
        </p>
      </div>
    </SectionContainer>
  );
};

export { Volunteering };
