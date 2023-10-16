import { TextField } from "@mui/material";

function NewActivity() {
  return (
    <form>
      <TextField id="title" label="Title" variant="outlined" />
      <br />
      <TextField id="description" label="Description" variant="outlined" />
      <br />
      <TextField id="activity" label="Activity" variant="outlined" />
    </form>
  );
}

export default NewActivity;