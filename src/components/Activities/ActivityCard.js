import { Card, CardContent, Typography } from "@mui/material";

function ActivityCard(props){
    return(
        <Card
            variant="outlined"
            sx={{
                display: "inline-block"
            }}
        >
            <CardContent>
                <Typography>{props.title}</Typography>
                <Typography>{props.name}</Typography>
                <Typography>{props.place}</Typography>
                <Typography>{props.nbrparticipants}</Typography>
            </CardContent>
        </Card>
    )
}

export default ActivityCard;