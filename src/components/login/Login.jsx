import { useState } from "react";
import { loginUser } from "../../utils/fetch";

const Login = ({ setLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const changeHandler = (e, setter, state) => {
    setter(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const data = await loginUser(username, password);
    // setUsername(data.user);

    try {
      const data = await loginUser(username, password);
      if (data && data.message) {
        // Login successful
        setLoggedIn(data.user);
      } else {
        // Login failed
        console.error("Login failed:", data.message);
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div>
      <h3>Login</h3>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Username"
          onChange={(e) => changeHandler(e, setUsername, username)}
        />
        <input
          placeholder="Password"
          onChange={(e) => changeHandler(e, setPassword, password)}
        />
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
