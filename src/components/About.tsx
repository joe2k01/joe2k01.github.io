import { SectionContainer } from "./SectionContainer";

const center = "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2";

const About: React.FC = () => {
  return (
    <SectionContainer id="about">
      <div className="relative w-72 h-72 mx-auto">
        <div
          className={`absolute w-60 h-60 bg-orange-400/90 rounded-full z-20 ${center} animate-pulse`}
        />
        <div
          className={`absolute w-64 h-64 bg-orange-400/80 rounded-full z-20 ${center} animate-pulse`}
        />
        <div
          className={`absolute w-[17rem] h-[17rem] bg-orange-400/70 rounded-full z-20 ${center} animate-pulse`}
        />
        <img
          src="/assets/giuseppe.jpg"
          className={`rounded-full w-56 h-56 object-cover absolute z-30 ${center}`}
        />
      </div>
      <p className="text-center text-2xl my-4 font-bold gradientText">
        Giuseppe Barillari
      </p>
      <p className="text-center">
        Hi there!<span>👋🏽</span>
        <br />
      </p>
      <p className="mx-4">
        I'm a 21 y.o. 3rd year{" "}
        <a
          href="https://www.york.ac.uk/study/undergraduate/courses/meng-electronic-computer-engineering/"
          className="colourLink"
        >
          Electronic and Computer Engineering (MEng)
        </a>{" "}
        student at The University Of York, UK. My interests are primarily
        focused around:
      </p>
      <ul className="list-none p-4 mx-auto table">
        <li className="before:content-['⚡️']">
          <span className="ml-2">Digital and analogue electronics</span>
        </li>
        <li className="before:content-['👨🏽‍💻']">
          <span className="ml-2">Web development</span>
        </li>
        <li className="before:content-['📲']">
          <span className="ml-2">Embedded programming</span>
        </li>
        <li className="before:content-['🏎']">
          <span className="ml-2">Motorsports</span>
        </li>
        <li className="before:content-['🏋🏽‍♂️']">
          <span className="ml-2">Keeping active</span>
        </li>
      </ul>
    </SectionContainer>
  );
};

export { About };
