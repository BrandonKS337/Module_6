import { useState } from "react";

function SubmitForm() {
  const [submitResult, setSubmitResult] = useState("");

  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault(); //prevents page default behavior which is refresh webpage on submit

    //adds password validation
    if (userPassword.length < 5) {
      setSubmitResult("Password must be at least 5 characters long");
    } else if (userPassword === userEmail) {
      setSubmitResult("Password must not match email address");
    } else {
      setSubmitResult("Successful login.");
    }
    console.log(e.target[1].type)

  };

  return (
    <div className="LoginForm componentBox">
      <form onSubmit={handleSubmit}>
        <label>
          {" "}
          Email:
          <input
            type="email"
            onChange={(e) => setUserEmail(e.target.value)}
            name="userEmail"
            value={userEmail}
          ></input>
        </label>
        <label>
          {" "}
          Password:
          <input
            type="password"
            onChange={(e) => setUserPassword(e.target.value)}
            name="userPassword"
            value={userPassword}
          ></input>
        </label>
        <button>Log In</button>
        <p>{submitResult}</p>
      </form>
    </div>
  );
}


export default SubmitForm