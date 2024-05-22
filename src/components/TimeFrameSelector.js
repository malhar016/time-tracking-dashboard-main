import { TIME_FRAMES } from "../constants/timeFrames";
import TimeFrame from "./TimeFrame";

function TimeFrameSelector({ selectedTimeFrame, onTimeFrameChange }) {
  return (
    <div className="time-frames">
      {Object.keys(TIME_FRAMES).map((t) => (
        <TimeFrame
          key={TIME_FRAMES[t]}
          option={TIME_FRAMES[t]}
          selected={selectedTimeFrame}
          setSelected={onTimeFrameChange}
        />
      ))}
    </div>
  );
}

export default TimeFrameSelector;
