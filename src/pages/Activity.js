import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import ParticipantList from "components/Participants/ParticipantList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Activity(props) {

  /*   const [activityName, setActivityName] = useState(props.activityName);
    const [participants, setParticipants] = useState(props.participants); */
  const activityName = "League of Legends";
  const participants = ["Engywook", "Kodo", "Palaindrome", "Paomine", "Georges"];
  let [activity, setActivity] = useState(null);
  let { id } = useParams();

  useEffect(() => {
    fetch('http://127.0.0.1:8000/activity/' + id).then(response => response.json()).then(data => { console.log(data); setActivity(data) })
  }, []);
  return (
    <>
      {activity &&
        <Container maxWidth="md">
          <Typography variant="h4">{activity.Title}</Typography>
          <Typography variant="body1">Description : {activity.Description}</Typography>

          <Typography variant="body1">Place :{activity.Place}</Typography>
          <Typography variant="body1"> {activity.isPublic ? "public" : "private"}</Typography>
          <ParticipantList participants={participants}></ParticipantList>
        </Container>
      }
    </>
  );
};

export default Activity;