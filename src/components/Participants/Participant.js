import { useState } from "react";

function Participant(props) {
  const [participantName, setParticipantName] = useState(props.pname)

  function changeParticipantName() {
    setParticipantName("Francis");
  }
  return (<li className="participant" onClick={changeParticipantName}>{participantName}</li>)
}

export default Participant;