import { Typography } from "@mui/material";
import Activity from "pages/Activity";
import ActivityForm from "components/Activities/ActivityForm";
import { useState } from "react";

const activityList = [
  {
    name: "Valheim",
    id: 1,
    participants: "Didier,Maxime,Francoise"
  },
  {
    name: "LOL",
    id: 2,
    participants: "Sel,Acide,Chaussette"
  },
  {
    name: "Subnautica",
    id: 3,
    participants: "Clovis"
  }
];

function MyActivities() {
  //fetch('https://www.boredapi.com/api/activity').then((response) => console.log(response.json()))
  const [activities, setActivities] = useState(activityList);

  function onClickSubmit(newActivity) {
    setActivities(prevActivities => {
      return [...prevActivities, newActivity];
    })
  }

  let warningTooManyActivities = activities.length > 3 ? <Typography>Too many Activities</Typography> : <Typography></Typography>

  return (
    <div>
      {/* {activities.map(activity => <Activity activityName={activity.name} key={activity.id} participants={activity.participants} />)} */}
      <ActivityForm clickFunction={onClickSubmit}></ActivityForm>
      {warningTooManyActivities}
    </div>
  );
};

export default MyActivities;