import Participant from './Participant';
import styles from './ParticipantList.module.css';
import { ListItem, List, Box, ListItemButton } from '@mui/material';

function ParticipantList(props) {
  function goToParticipantPage() {
    console.log("We are going to [name]'s page");
  }

  return (
    <Box>
      <List>
        {props.participants.map((participant, index) =>
          <ListItem key={index}>
            <ListItemButton>
              {participant}
            </ListItemButton>
          </ListItem>
        )}
        5/5
      </List>
    </Box>

  );
}

export default ParticipantList;