import { TimeLineContext } from "./TimeLineContext";

type TimeLineItemProps = {
  heading: string;
  subHeading: string;
  children: JSX.Element;
};

const TimeLineItem: React.FC<TimeLineItemProps> = ({
  heading,
  subHeading,
  children,
}) => {
  return (
    <TimeLineContext.Consumer>
      {(value) => (
        <div className="ml-10 mt-4 relative lg:w-1/2">
             <div
            className={`absolute w-6 h-6 -top-[0.125rem] rounded-full -ml-[41px] -translate-x-1/2 animate-pulse ${value.trackerColours}`}
          />
          <div
            className={`absolute w-5 h-5 top-0 rounded-full -ml-[41px] -translate-x-1/2 ${value.trackerColours}`}
          />
          <p className={value.headingColour}>{heading}</p>
          <p className={value.subHeadingColour}>{subHeading}</p>
          {children}
        </div>
      )}
    </TimeLineContext.Consumer>
  );
};

export { TimeLineItem };
