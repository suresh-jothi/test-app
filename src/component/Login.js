import { useEffect, useState } from "react";
import Register from "./Register";

const Login = () => {
  const [input, setInput] = useState("");

  const Handlechange = (value) => {
    setInput(value);
  };
  return (
    <div>
      <input
        type="text"
        name="fname"
        placeholder="fname"
        value={input}
        onChange={(e) => Handlechange(e.target.value)}
      />

      <Register input={input} change={Handlechange} />
    </div>
  );
};
export default Login;
