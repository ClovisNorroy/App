import { Box, Link, TextField } from "@mui/material";
import { useEffect, useState } from "react";

function NewParticipantField(props) {
  /*   const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [emailHasBeenTouched, setEmailHasBeenTouched] = useState(false);
    const [emailIsInvalid, setEmailIsInvalid] = useState(false);
  
  
  
    useEffect(() => {
      function formValidation() {
        const timeoutId = setTimeout(() => {
          if (emailHasBeenTouched) {
            // eslint-disable-next-line
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
              setEmailIsInvalid(false);
            }
            else
              setEmailIsInvalid(true)
          }
          else
            setEmailIsInvalid(false)
        }, 800)
        return timeoutId
      }
      let timeoutId = formValidation()
      return () => {
        clearTimeout(timeoutId)
      }
  
    }, [email, name, emailHasBeenTouched]) */


  return (
    <Box>
      <TextField
        label="Participant's Email"
        value={props.email}
        onChange={e => props.onChangeFunction(props.participantId, e, "mail")}
        variant="outlined" sx={{ width: 1 / 2 }}
      />
      <TextField
        label="Participant's Name"
        value={props.name}
        onChange={e => props.onChangeFunction(props.participantId, e, "name")}
        variant="outlined"
        sx={{ width: 1 / 4 }}
      />
      <Link sx={{ width: 1 / 4 }} onClick={props.addNewParticpant}>Add New Participant</Link>
    </Box>
  )
}

export default NewParticipantField;