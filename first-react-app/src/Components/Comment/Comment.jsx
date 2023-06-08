import UserInfo from "./UserInfo";

function Comment(props) {
    return (
      <div className="Comment componentBox">
        <UserInfo user={props.author} />
        <div className="Comment-text">{props.text}</div>
        <div className="Comment-date">{props.date.toLocaleString()}</div>
      </div>
    );
  }

  export default Comment