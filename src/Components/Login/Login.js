import React from "react";
import useFirebase from "../../Hooks/useFirebase";

const Login = () => {
  const { googleSignIn, error } = useFirebase();

  console.log(error);

  return (
    <div>
      <form>
        <input type='email' placeholder='email' />
        <br />
        <input type='password' placeholder='password' />
        <br />
        <button onClick={googleSignIn}>Google Login</button>
      </form>
    </div>
  );
};

export default Login;
