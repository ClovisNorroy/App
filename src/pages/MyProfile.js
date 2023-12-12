import { Button, Stack, Typography, styled } from "@mui/material";
import { useEffect, useState } from "react";
import { Box } from "@mui/system";
import { DateField } from "@mui/x-date-pickers";
import dayjs from "dayjs";


function MyProfile(){

    const [newUserProfilePictureFile, setNewUserProfilePictureFile] = useState();
    const [userProfilePicture, setUserProfilePicture] = useState();
    const [userProfileInfos, setUserProfileInfos] = useState();


    function sendProfilePicture(event){
        const formData = new FormData();
        formData.append('profilepicture', newUserProfilePictureFile);
        console.log(formData);
        fetch(process.env.REACT_APP_BEBUDDY_API+"/api/profilepicture", {
            method: "POST",
            credentials: "include",
            body: formData
        }).then(response => { console.log(response); return response.text() }).then(data => {
            console.log(data);
          });
    }
    function handleProfilePictureChange(event){
        setNewUserProfilePictureFile(event.target.files[0]);
    }

    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
      });

    useEffect(
        () =>{
            // Fetch User Profile Picture
            fetch(process.env.REACT_APP_BEBUDDY_API+"/api/profilepicture", {
                method: "GET",
                credentials: "include"
            })
            .then(response => response.blob())
            .then(blob => { setUserProfilePicture(URL.createObjectURL(blob)) });

            // Fetch User Profile Infos
            fetch(process.env.REACT_APP_BEBUDDY_API+"/api/userprofile",{
                method: "GET",
                credentials: "include",
                headers: { "Content-Type": "application/json"}
            })
            .then(response => { return response.json(); })
            .then(data => { console.log(data); setUserProfileInfos(data)})
        }, []
    )
    return(
        <Stack spacing={2} alignItems="center">
            { /* User Avatar */}
            <Box>
                <label>Avatar</label><br/>
                { userProfilePicture ? 
                    <img src={userProfilePicture} alt="Avatar" width="100" height="100"></img> : 
                    <Typography>Loading PP</Typography> }
                <Button component="label" variant="contained">
                    Upload file
                    <VisuallyHiddenInput type="file" onChange={handleProfilePictureChange}/>
                </Button>
            </Box>
            { /* User Infos */ }
            <Box>
                { userProfileInfos ? 
                    <Box>
                        <Typography>About</Typography>
                        <Typography>{userProfileInfos.description}</Typography>
                        <DateField label="Birthday" value={dayjs(userProfileInfos.birthdate.date)}></DateField>
                    </Box>
                     : 
                    <Typography>Loading</Typography> }
            </Box>
            <br/>

                <Button onClick={sendProfilePicture}>Save changes</Button>
        </Stack>
    )
}

export default MyProfile;