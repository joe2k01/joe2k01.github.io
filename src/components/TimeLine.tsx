import { TimeLineContext, TimeLineVariants } from "./TimeLineContext";

type TimeLineProps = {
  children: JSX.Element[];
};

const TimeLine: React.FC<TimeLineProps> = ({ children }) => {
  return (
    <TimeLineContext.Consumer>
      {(value) => (
        <div className={`mt-4 ml-4 border-l-2 ${value.timelineBorder}`}>
          {children}
        </div>
      )}
    </TimeLineContext.Consumer>
  );
};

export { TimeLine };
