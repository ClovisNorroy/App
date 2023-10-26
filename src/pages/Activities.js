const { default: ActivityCard } = require("components/Activities/ActivityCard");
const { useEffect, useState } = require("react");

function Activities(){
    const [activities, setActivities] = useState();
    //fetch data once on render
    useEffect(() =>{
        fetch("http://127.0.0.1:8000/api/activities", {
            method: 'GET',
            headers: { "Content-Type": "application/json" }
        }).then(response => { console.log(response); return response.json(); }).then(data => {
            console.log(data);
            setActivities(data);
          })
    }, [])
    return(
        <>
        {
            activities.map( activity => 
                <ActivityCard
                key={activity.id}
                title={activity.Title}
                name={activity.name}
                place={activity.Place}
                nbrparticipants={activity.nbrParticipants}/>)
        }
        </>
    
    )
}

export default Activities;