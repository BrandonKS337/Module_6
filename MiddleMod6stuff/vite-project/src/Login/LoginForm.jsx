import { useState } from "react";

function LoginForm() {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const handleInputChange = (e) => {
    console.log(e.target.value);

    if (e.target.name === "userEmail") {
      setUserEmail(e.target.value);
    }
    if (e.target.name === "userPassword") {
      setUserPassword(e.target.value);
    }
  };

  return (
    <div>
      <div>
        <label>
          Email Address:
          <input
            type="email"
            value={userEmail}
            name="userEmail"
            // onChange={(e) => setUserEmail(e.target.value)}
            onChange={(e) => handleInputChange(e)}
          />
          {/* e here is shorthand for event */}
        </label>
      </div>
      <div>
        <label>
          Password:
          <input
            type="password"
            value={userPassword}
            name="userPassword"
            // onChange={(e) => setUserPassword(e.target.value)}
            onChange={(e) => handleInputChange(e)}

          />{" "}
          {/* e here is shorthand for event */}
        </label>
      </div>
    </div>
  );
}
export default LoginForm;
