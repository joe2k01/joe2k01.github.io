import { SectionContainer } from "./SectionContainer";

const Career: React.FC = () => {
  return (
    <SectionContainer id="career">
      <h3 className="text-3xl font-bold">
        <span className="gradientText">Career</span>
      </h3>
      <div className="mt-4 ml-4 border-l-2 border-violet-500">
        <div className="ml-10 relative lg:w-1/2">
          <div className="absolute w-5 h-5 top-0 bg-violet-500 shadow-md shadow-violet-500 rounded-full -ml-[41px] -translate-x-1/2" />
          <p className="text-violet-500">
            School of Physics, Engineering and Technology - The University Of
            York 2021-22
          </p>
          <p className="text-violet-400">Student Ambassador</p>
          <p className="text-justify">
            The role of a Student Ambassador is to provide insight to visiting
            prospective students of the PET School. Whether during an open day
            or an interview day, a Student Ambassador explains life at
            university 🎓.
          </p>
        </div>
        <div className="ml-10 mt-4 relative lg:w-1/2">
          <div className="absolute w-5 h-5 top-0 bg-violet-500 shadow-md shadow-violet-500 rounded-full -ml-[41px] -translate-x-1/2" />
          <p className="text-violet-500">Sky</p>
          <p className="text-violet-400">
            Software Developer Summer Intern 2022
          </p>
          <p className="text-justify">
            While interning at Sky, I worked with one full-stack web development
            and DevOps team. I had the privilege to get my hands dirty with
            front-end technologies, back-end ones and everything in between.
            From documentation management to Docker containerization 🐳.
          </p>
        </div>
        <div className="ml-10 mt-4 relative lg:w-1/2">
          <div className="absolute w-5 h-5 top-0 bg-violet-500 shadow-md shadow-violet-500 rounded-full -ml-[41px] -translate-x-1/2" />
          <p className="text-violet-500">TSYS</p>
          <p className="text-violet-400">
            DocOps Cloud Engineer Summer Intern 2021
          </p>
          <p className="text-justify">
            Working at TSYS, I had the freedom to design the DocOps flow used by
            the Knaresborough branch. My work heavily relied on Python and
            Docker during the prototyping stage and AWS and GCP during the
            deployment phase ☁️.
          </p>
        </div>
      </div>
    </SectionContainer>
  );
};

export { Career };
