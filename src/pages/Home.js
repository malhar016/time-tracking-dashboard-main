import { useState } from "react";
import Profile from "../components/Profile";
import TaskBoard from "../components/TaskBoard";
import { TIME_FRAMES } from "../constants/timeFrames";

function Home() {
  const [timeFrame, setTimeFrame] = useState(TIME_FRAMES.weekly);
  return (
    <div className="container">
      <Profile selectedTimeFrame={timeFrame} onTimeFrameChange={setTimeFrame} />
      <TaskBoard selectedTimeFrame={timeFrame} />
    </div>
  );
}

export default Home;
