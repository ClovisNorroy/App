import { useMemo, useRef, useState } from "react";
import { Avatar, Box, Button, Container, Grid, TextField, ThemeProvider, Typography } from "@mui/material";

function Signup() {
  const usernameRef = useRef('');
  const passwordRef = useRef('');
  const emailRef = useRef('');
  const [usernameError, setUsernameError] = useState(false);

  const usernameInputBlurHandler = event =>{
    setUsernameError(true);
    if(usernameRef.current.value.length < 3){
      setUserNameTextHelper("Must be more than 3");
      setUsernameError(true);
    }
   else{
    setUserNameTextHelper("");
    setUsernameError(false);
   }
  }

  const [ userNameHelperText, setUserNameTextHelper ] = useState("");

  function sendSignup() {
    fetch("http://127.0.0.1:8000/api/register", {
      method: 'POST',
      body: JSON.stringify({email: emailRef.current.value, username: usernameRef.current.value, password: passwordRef.current.value }),
      headers: { "Content-Type": "application/json" }
    }).then(response => { console.log(response); return response.json(); }).then(data => {
      console.log(data)
    })
  }


  return (
    <>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
          >
            <Typography component="h1" variant="h5">Sign Up
            </Typography>
            <Box component="form" noValidate onSubmit={sendSignup} sx={{ mt: 3}}>
              <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                required
                fullWidth
                onBlur={usernameInputBlurHandler}
                error={usernameError}
                id="username"
                label="Username"
                name="username"
                helperText={userNameHelperText}
                inputRef={usernameRef}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  inputRef={emailRef}
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  inputRef={passwordRef}
                  autoComplete="new-password"
                />
              </Grid>
              </Grid>
              <Button
                fullWidth
                variant="contained"
                disabled={usernameError}
                onClick={sendSignup}
                sx={{ mt: 3, mb: 2}}>Sign Up</Button>
            </Box>
          </Box>
      </Container>
    </>
  )
}

export default Signup;