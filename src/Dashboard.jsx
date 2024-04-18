import { useContext } from "react";
import { AuthContext } from "./App";

function Dashboard() {
  const authContext = useContext(AuthContext);

  function handleClick() {
    console.log(authContext.userID);
  }

  return (
    <>
      <h1>{authContext.authContext.userID}</h1>
      <p>hello world</p>
      <button onClick={handleClick}>button</button>
    </>
  );
}

export default Dashboard;
