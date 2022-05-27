import "./App.css";
import { useState } from "react";
import Login from "./component/Login";

function App() {
  const [user, setUser] = useState({});
  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
