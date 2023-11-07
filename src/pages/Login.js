import { Button, TextField } from "@mui/material";
import { useRef } from "react";

function Login() {
  const usernameRef = useRef('');
  const passwordRef = useRef('');

  function sendLogin() {
    fetch(process.env.REACT_APP_BEBUDDY_API+"/api/login_check", {
      method: 'POST',
      credentials: "include",
      body: JSON.stringify({ username: usernameRef.current.value, password: passwordRef.current.value }),
      headers: { "Content-Type": "application/json"}
    }).then(response => { console.log(response); return response; }).then(data => {
      console.log(data);
    });
  }

  return (
    <>
      <TextField id="username-field" label="Username" variant="standard" inputRef={usernameRef} />
      <TextField id="password-field" label="Password" variant="standard" type="password" inputRef={passwordRef} />
      <Button id="button-send-login" onClick={sendLogin}>Login</Button>
    </>
  )
}

export default Login;