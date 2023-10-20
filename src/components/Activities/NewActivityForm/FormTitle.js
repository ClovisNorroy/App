import { TextField, Typography } from "@mui/material";

function FormTitle (){
    return(
        <>
            <Typography variant="caption">Title of the Activity : </Typography>
            <TextField
                required
                id="title-input"
                label="Title of the activity"
            />
        </>
    )
}

export default FormTitle;