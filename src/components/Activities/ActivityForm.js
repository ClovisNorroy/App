import { TextField, Box, Button } from "@mui/material";
import NewParticipantField from "components/Participants/NewParticipantField";
import { useRef, useState } from "react";

function ActivityForm(props) {
  const [participants, setParticipants] = useState([{ name: "", mail: "" }]);
  const descriptionInputRef = useRef();

  function addNewParticpant() {
    setParticipants([...participants, { name: "", mail: "" }])
  }

  function submitForm() {
    console.log(participants)
  }

  function handleParticipantChange(index, event, name) {
    let newFormValues = [...participants];
    newFormValues[index][name] = event.target.value;
    setParticipants(newFormValues);
  }

  return (
    <form>
      <Box sx={{ display: 'grid', gridTemplateRows: 'repeat(3, 1fr)' }}>
        <TextField id="activity-name-input" label="Activity Name" variant="standard" />
        <TextField id="activity-description-input" label="Activity Description" variant="standard" inputRef={descriptionInputRef} />
        {participants.map((participant, index) => (
          <NewParticipantField key={index} participantId={index}
            mail={participant.mail}
            name={participant.name}
            addNewParticpant={addNewParticpant} onChangeFunction={handleParticipantChange} />
        ))
        }
        <Button onClick={submitForm}>Submit Form</Button>
      </Box>
    </form>
  )
};

export default ActivityForm;