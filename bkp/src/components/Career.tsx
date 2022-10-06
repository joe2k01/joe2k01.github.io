import { SectionContainer } from "./SectionContainer";
import { TimeLine } from "./TimeLine";
import { TimeLineContext, TimeLineVariants } from "./TimeLineContext";
import { TimeLineItem } from "./TimeLineItem";

const Career: React.FC = () => {
  return (
    <SectionContainer id="career">
      <h3 className="text-3xl font-bold">
        <span className="gradientText">Career</span>
      </h3>
      <TimeLineContext.Provider value={TimeLineVariants.violet}>
        <TimeLine>
          <TimeLineItem
            heading="School of Physics, Engineering and Technology - The University Of
            York 2021-22"
            subHeading="Student Ambassador"
          >
            <p className="text-justify">
              The role of a Student Ambassador is to provide insight to visiting
              prospective students of the PET School. Whether during an open day
              or an interview day, a Student Ambassador explains life at
              university 🎓.
            </p>
          </TimeLineItem>
          <TimeLineItem
            heading="Sky"
            subHeading="Software Developer Summer Intern 2022"
          >
            <p className="text-justify">
              While interning at Sky, I worked with one full-stack web
              development and DevOps team. I had the privilege to get my hands
              dirty with front-end technologies, back-end ones and everything in
              between. From documentation management to Docker containerization
              🐳.
            </p>
          </TimeLineItem>
          <TimeLineItem
            heading="TSYS"
            subHeading="DocOps Cloud Engineer Summer Intern 2021"
          >
            <p className="text-justify">
              Working at TSYS, I had the freedom to design the DocOps flow used
              by the Knaresborough branch. My work heavily relied on Python and
              Docker during the prototyping stage and AWS and GCP during the
              deployment phase ☁️.
            </p>
          </TimeLineItem>
        </TimeLine>
      </TimeLineContext.Provider>
    </SectionContainer>
  );
};

export { Career };
