import data from "../data.json";
import Card from "./Card";

function TaskBoard({ selectedTimeFrame }) {
  console.log(data, selectedTimeFrame);
  return data.map((task) => {
    const { current, previous } = task.timeframes[selectedTimeFrame];
    return (
      <Card
        key={task.title}
        title={task.title}
        current={current}
        previous={previous}
      />
    );
  });
}

export default TaskBoard;
