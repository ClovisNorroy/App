import { Button, Stack, TextField, Typography, styled } from "@mui/material";
import { useEffect, useState } from "react";
import { Box } from "@mui/system";
import { DateField } from "@mui/x-date-pickers";
import dayjs from "dayjs";


function MyProfile(){
    const [userProfilePictureFile, setUserProfilePictureFile] = useState();
    const [userProfilePicture, setUserProfilePicture] = useState();
    const [userProfilePlace, setUserProfilePlace] = useState("");
    const [userProfileAbout, setUserProfileAbout] = useState("");
    const [userProfileBirthdate, setUserProfileBirthdate] = useState("");
    const [isSaveButtonDeactivated, setIsSaveButtonDeactivated] = useState(true);
    const [isProfilePictureChanged, setIsProfilePictureChanged] = useState(false)

    function saveChanges(){
        fetch(process.env.REACT_APP_BEBUDDY_API+"/api/userprofile", {
            method: "POST",
            credentials: "include",
            body: JSON.stringify({
                about: userProfileAbout,
                place: userProfilePlace,
                birthdate: dayjs(userProfileBirthdate).format("YYYY/MM/DD")
            })
        })
        .then(response => { console.log(response); return response.text(); })
        .then( data => { console.log(data); });
        if(isProfilePictureChanged)
            sendProfilePicture();
    }

    function sendProfilePicture(){
        const formData = new FormData();
        formData.append('profilepicture', userProfilePictureFile);
        console.log(formData);
        fetch(process.env.REACT_APP_BEBUDDY_API+"/api/profilepicture", {
            method: "POST",
            credentials: "include",
            body: formData
        })
        .then(response => { console.log(response); return response.text() })
        .then(data => { console.log(data); });
    }

    function handleProfilePictureChange(event){
        setIsProfilePictureChanged(true);
        setIsSaveButtonDeactivated(false);
        setUserProfilePictureFile(event.target.files[0]);
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

    useEffect( () => {
        if (!userProfilePictureFile) {
            setUserProfilePicture(undefined)
            return
        }
        const profilePictureURL = URL.createObjectURL(userProfilePictureFile);
        setUserProfilePicture(profilePictureURL);
        return () => URL.revokeObjectURL(profilePictureURL);
    }, [userProfilePictureFile])

    useEffect(
        () =>{
            // Fetch User Profile Picture
            fetch(process.env.REACT_APP_BEBUDDY_API+"/api/profilepicture", {
                method: "GET",
                credentials: "include"
            })
            .then(response => response.blob())
            .then(blob => { setUserProfilePictureFile(blob) });

            // Fetch User Profile Infos
            fetch(process.env.REACT_APP_BEBUDDY_API+"/api/userprofile",{
                method: "GET",
                credentials: "include",
                headers: { "Content-Type": "application/json"}
            })
            .then(response => { return response.json(); })
            .then(data => { 
                console.log(data);
                setUserProfileAbout(data.about);
                setUserProfilePlace(data.place);
                setUserProfileBirthdate(data.userProfileBirthdate);
            })
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
                    <br/>
                <Button component="label" variant="contained">
                    Upload file
                    <VisuallyHiddenInput type="file" onChange={handleProfilePictureChange}/>
                </Button>
            </Box>
            { /* User Infos */ }
            <Box>
                <Box>
                    <TextField
                        id="user-about"
                        label="About"
                        placeholder="A little about you"
                        multiline
                        rows={4}
                        value={userProfileAbout}
                        onChange={(event) => { setUserProfileAbout(event.target.value); setIsSaveButtonDeactivated(false); }}/>
                    <TextField
                        id="user-place"
                        label="place"
                        placeholder="Where are you ?"
                        value={userProfilePlace}
                        onChange={(event)=>{ setUserProfilePlace(event.target.value); setIsSaveButtonDeactivated(false); }}/>
                    <DateField
                        label="Birthday"
                        value={dayjs(userProfileBirthdate)}
                        />
                </Box>
            </Box>
            <br/>
            <Button disabled={isSaveButtonDeactivated} onClick={saveChanges}>Save changes</Button>
            <Button disabled={isSaveButtonDeactivated} onClick={() => window.location.reload(false)}>Cancel changes</Button>
        </Stack>
    )
}

export default MyProfile;