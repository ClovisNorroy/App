import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";


const { default: ActivityCard } = require("components/Activities/ActivityCard");
const { useEffect, useState } = require("react");

function Activities(){
    const [activities, setActivities] = useState();
    const navigate = useNavigate();
    //fetch data once on render
    useEffect(() =>{
        fetch(process.env.REACT_APP_BEBUDDY_API+"/api/activities", {
            method: 'GET',
            credentials: 'include',
            headers: { "Content-Type": "application/json"}
        }).then(response => { console.log(response); return response.json(); }).then(data => {
            console.log(data);
            setActivities(data);
          })
    }, [])
    return(
        <>
        {
           activities ? activities.map( activity => 
                <ActivityCard
                key={activity.id}
                title={activity.Title}
                name={activity.name}
                place={activity.Place}
                nbrparticipants={activity.nbrParticipants}/>)
                : <Typography> Loading </Typography>
        }
        <br/>
        <Button variant="contained" onClick={() => { navigate('/newactivity') }}>Create New Activity</Button>
        </>
    )
}

export default Activities;