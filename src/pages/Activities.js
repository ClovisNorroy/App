import { Typography } from "@mui/material";

const { default: ActivityCard } = require("components/Activities/ActivityCard");
const { useEffect, useState } = require("react");

function Activities(){
    const [activities, setActivities] = useState();
    //fetch data once on render
    useEffect(() =>{
        fetch("https://127.0.0.1:8000/api/activities", {
            method: 'GET',
            credentials: 'include',
            headers: { "Content-Type": "application/json"}
        }).then(response => { console.log(response); return response.json(); }).then(data => {
            console.log(data);
            //setActivities(data);
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
        </>
    )
}

export default Activities;