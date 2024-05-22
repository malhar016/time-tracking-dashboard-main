import { TIME_FRAMES } from "../constants/timeFrames";

function TimeFrame({ option, selected, setSelected }) {
  return (
    <a
      className={option === selected ? "selected" : "non-selected"}
      onClick={() => setSelected(option)}
    >
      {option}
    </a>
  );
}

export default TimeFrame;
