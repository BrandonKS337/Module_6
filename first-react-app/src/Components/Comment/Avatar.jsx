function Avatar(props) {
  return (
    <>
      <img
        className="Avatar" //THIS IS USER BECAUSE OF <UserInfo user={props.author} on line 17 ish. It changes author to user
        src={props.user.avatarUrl}
        alt={props.user.name}
      />
    </>
  );
}

export default Avatar