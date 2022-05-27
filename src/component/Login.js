import { useEffect, useState } from "react";
import Register from "./Register";

const Login = () => {
  const [input, setInput] = useState("");

  useEffect(() => {
    // conponentDidMount
    console.log("conponentDidMount", input);
    setInput("data");
  }, []);

  useEffect(() => {
    // conponentDidupdate
    console.log("conponentDidupdate", input);
  });

  useEffect(() => {
    // componentDidUpdate based on dependency value change
    console.log("componentDidUpdate based on dependency value change", input);
  }, [input]);

  useEffect(() => {
    // componentWillUnmount
    console.log("componentWillUnmount");
    return setInput("");
  }, []);

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
