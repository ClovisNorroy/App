import { Box, Button, TextField } from "@mui/material";
import { Container } from "@mui/system";
import styles from './NewActivity.module.css';
import { DatePicker } from "@mui/x-date-pickers";
import { useRef } from "react";

function NewActivity() {
  const activityTitle = useRef('');
  const activityName = useRef('');
  const maximumNumberOfParticipants = useRef('');
  const activityDescription = useRef('');



  return (
    <Container>
      <Box
sx={{
  display: "flex",
  flexDirection: "column",
  marginTop: 8,
  alignItems: 'center',
}}>
        <form>
        <TextField
          className={styles.input}
          required
          id="title-input"
          label="Title"
          inputRef={activityTitle}
        /><br/>
        <TextField
          required
          id="name-input"
          label="Which activity"
          placeholder="League of Legends"
          inputRef={activityName}
        /><br/>
        <TextField
          required
          id="number-of-participants-input"
          label="Number of particpants"
          placeholder="0 = unlimited"
          inputRef={maximumNumberOfParticipants}
        /><br/>
        <TextField
          id="description-input"
          label="Description"
          inputRef={activityDescription}
        /><br/>
        <DatePicker/><br/>
        <Button>Create New Activity</Button>
        </form>
      </Box>

    </Container>

  );
}

export default NewActivity;