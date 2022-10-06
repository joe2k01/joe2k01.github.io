import React from "react";

const TimeLineVariants = {
  orange: {
    headingColour: "text-orange-500",
    subHeadingColour: "text-orange-400",
    trackerColours: "bg-orange-500 shadow-orange-500",
    timelineBorder: "border-orange-400",
  },
  violet: {
    headingColour: "text-violet-500",
    subHeadingColour: "text-violet-400",
    trackerColours: "bg-violet-500 shadow-violet-500",
    timelineBorder: "border-violet-400",
  },
};

const TimeLineContext = React.createContext(TimeLineVariants.orange);

export { TimeLineContext, TimeLineVariants };
