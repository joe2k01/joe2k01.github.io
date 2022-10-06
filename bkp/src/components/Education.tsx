import { SectionContainer } from "./SectionContainer";
import { TimeLine } from "./TimeLine";
import { TimeLineContext, TimeLineVariants } from "./TimeLineContext";
import { TimeLineItem } from "./TimeLineItem";

const Education: React.FC = () => {
  return (
    <SectionContainer id="education">
      <h3 className="text-3xl font-bold">
        <span className="gradientText">Education</span>
      </h3>
      <TimeLineContext.Provider value={TimeLineVariants.orange}>
        <TimeLine>
          <TimeLineItem
            heading="University 2020-2024"
            subHeading="The University of York (York, UK) - MEng Electronic and Computer
            Engineering"
          >
            <p className="text-justify">
              I am currently in my 3rd year at The University Of York studying
              Electronic and Computer Engineering. In my first year I achievied
              91% overall. I concluded my second year with 84% overall.
            </p>
          </TimeLineItem>
          <TimeLineItem
            heading="High School / A Levels Equivalent 2015-2020"
            subHeading="Liceo Scientifico Antonio Pacinotti (Cagliari, Sardinia, Italy)"
          >
            <p className="text-justify">
              I passed the{" "}
              <a
                href="https://en.wikipedia.org/wiki/Liceo_scientifico"
                className="colourLink"
              >
                Esame di Stato
              </a>{" "}
              with a final grade of 96/100. My strongest subjects were
              Mathematics (9/10), Physics (9/10) and English literature and
              language (10/10).
            </p>
          </TimeLineItem>
        </TimeLine>
      </TimeLineContext.Provider>
    </SectionContainer>
  );
};

export { Education };
