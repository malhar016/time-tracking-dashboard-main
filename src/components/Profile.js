import TimeFrameSelector from "./TimeFrameSelector";

function Profile({ selectedTimeFrame, onTimeFrameChange }) {
  return (
    <div className="profile-container">
      <div className="profile">
        <div className="avatar">
          <img src="/images/image-jeremy.png" alt="profile-pic" />
        </div>
        <div className="profileName">
          <div>Report for</div>
          <h1>Jeremy Robson</h1>
        </div>
      </div>
      <TimeFrameSelector
        selectedTimeFrame={selectedTimeFrame}
        onTimeFrameChange={onTimeFrameChange}
      />
    </div>
  );
}

export default Profile;
