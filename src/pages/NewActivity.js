import { Box, Button, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from "@mui/material";
import { Container } from "@mui/system";
import styles from './NewActivity.module.css';
import { DatePicker } from "@mui/x-date-pickers";
import { useRef, useState } from "react";
import dayjs from "dayjs";

function NewActivity() {
  const activityTitleRef = useRef('');
  const activityNameRef = useRef('');
  const activityPlaceRef = useRef('');
  const [date, setDate] = useState();
  const maximumNumberOfParticipantsRef = useRef(0);
  const activityDescriptionRef = useRef('');
  const [privacy, setPrivacy] = useState('0');

function sendNewActivity(){
  fetch("http://127.0.0.1:8000/api/activity/new", {
    method: 'POST',
    body: JSON.stringify({
      title: activityTitleRef.current.value,
      description: activityDescriptionRef.current.value,
      name: activityNameRef.current.value,
      place: activityPlaceRef.current.value,
      date: dayjs(date).format("YYYY/MM/DD"),
      nbrparticipants: maximumNumberOfParticipantsRef.current.value,
      privacy: privacy
     }),
    headers: { "Content-Type": "application/json" }
  }).then(response => { console.log(response); return response.json(); }).then(data => {
    console.log(data)
  })
}

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
          inputRef={activityTitleRef}
        /><br/>
        <TextField
          required
          id="name-input"
          label="Which activity"
          placeholder="League of Legends"
          inputRef={activityNameRef}
        /><br/>
          <TextField
            required
            id="place-input"
            label="Place of the activity"
            placeholder="Online"
            inputRef={activityPlaceRef}
        /><br/>
        <TextField
          required
          id="number-of-participants-input"
          label="Number of particpants"
          placeholder="0 = unlimited"
          inputRef={maximumNumberOfParticipantsRef}
        /><br/>
        <TextField
          id="description-input"
          label="Description"
          inputRef={activityDescriptionRef}
        /><br/>
        <DatePicker value={date} format="YYYY/MM/DD" onChange={(newDate) => setDate(newDate)}/><br/>
        <FormLabel id="privacy-label">Privacy</FormLabel>
        <RadioGroup
        row
          aria-labelledby="privacy-label"
          defaultValue="private"
          name="radio-privacy-group"
          value={privacy}
          onChange={setPrivacy}
          >
            <FormControlLabel value="0" control={<Radio/>} label="private" />
            <FormControlLabel value="1" control={<Radio/>} label="public" />
          </RadioGroup>
        <Button onClick={sendNewActivity}>Create New Activity</Button>
        </form>
      </Box>

    </Container>

  );
}

export default NewActivity;