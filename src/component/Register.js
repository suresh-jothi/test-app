const Register = (props) => {
  return (
    <div>
      i am register {props.input}
      <button onClick={() => props.change("userdata")}>
        change input value
      </button>
    </div>
  );
};
export default Register;
