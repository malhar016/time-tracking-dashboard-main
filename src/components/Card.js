function Card({ title, current, previous }) {
  const imageName =
    "/images/icon-" + title.toLowerCase().replace(" ", "-") + ".svg";
  console.log(imageName);
  return (
    <div
      id={`${title.toLowerCase().replace(" ", "-")}`}
      className="card-container"
    >
      <div className="card-content">
        <div className="card-header">
          <div>{title}</div>
          <div>
            <a>
              <img src="/images/icon-ellipsis.svg" />
            </a>
          </div>
        </div>
        <div className="card-body">
          <span className="current-hours">{current} hrs</span>
        </div>
        <div className="card-footer">
          <span className="previous-hours">Last Week - {previous}hrs</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
