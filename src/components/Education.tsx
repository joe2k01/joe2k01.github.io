import { SectionContainer } from "./SectionContainer";

const Education: React.FC = () => {
  return (
    <SectionContainer id="education">
      <h3 className="text-3xl font-bold w-min">
        <span className="gradientText">Education</span>
      </h3>
      <div className="mt-4 ml-4 border-l-2 border-orange-400">
        <div className="ml-10 relative">
          <div className="absolute w-5 h-5 top-0 bg-orange-500 shadow-md shadow-orange-500 rounded-full -ml-[41px] -translate-x-1/2" />
          <p className="text-orange-500">University 2020-2024</p>
          <p className="text-orange-400">
            The University of York (York, UK) - MEng Electronic and Computer
            Engineering
          </p>
          <p>
            I am currently in my 3rd year at The University Of York studying
            Electronic and Computer Engineering. In my first year I achievied
            91% overall. I concluded my second year with 84% overall.
          </p>
        </div>
        <div className="ml-10 mt-4 relative">
          <div className="absolute w-5 h-5 top-0 bg-orange-500 shadow-md shadow-orange-500 rounded-full -ml-[41px] -translate-x-1/2" />
          <p className="text-orange-500">
            High School / A Levels Equivalent 2015-2020
          </p>
          <p className="text-orange-400">
            Liceo Scientifico Antonio Pacinotti (Cagliari, Sardinia, Italy)
          </p>
          <p>
            I graduated the{" "}
            <a
              href="https://en.wikipedia.org/wiki/Liceo_scientifico"
              className="text-orange-400 hover:text-orange-500 visited:text-violet-600"
            >
              Esame di Stato
            </a>{" "}
            with a final grade of 96/100. My strongest subjects were Mathematics
            (9/10), Physics (9/10) and English litterature and language (10/10).
          </p>
        </div>
      </div>
    </SectionContainer>
  );
};

export { Education };
