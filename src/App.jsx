import { useState, useEffect } from "react";

import LogOrSign from "./components/logOrSign/LogOrSign";

import "./App.css";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log("useeffect hit");
    async function fetchusers() {
      console.log("fetchusers");
      const response = await fetch("http://localhost:5001/users/getAllUsers", {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      await setUsers(data.users);
    }
    fetchusers();
  }, []);

  return (
    <>
      <div className="wrapper">
        <LogOrSign setLoggedIn={setLoggedIn} />

        {!loggedIn ? <p>Please log in</p> : <p>hello {loggedIn.username}</p>}
        {users.length > 0 ? users.map((user) => <p>{user.username}</p>) : null}
      </div>
    </>
  );
}

export default App;
