import { SectionContainer } from "./SectionContainer";

const Contact: React.FC = () => {
  return (
    <SectionContainer id="contact me">
      <h3 className="text-3xl font-bold">
        <span className="gradientText">Get in Touch</span>
      </h3>
      <div className="mt-2">
        <p>
          If you'd like to get in touch with me, please email me at{" "}
          <span>
            <a
              href="mailto:gb1149@york.ac.uk"
              className="colourLink"
            >
              gb1149@york.ac.uk
            </a>
          </span>
          .
        </p>
      </div>
    </SectionContainer>
  );
};

export { Contact };
