import { Button, Typography, styled } from "@mui/material";
import { useEffect, useState } from "react";



function MyProfile(){

    const [profilePictureFile, setProfilePictureFile] = useState(null);


    function sendProfilePicture(event){
        event.preventDefault();
        const formData = new FormData();
        formData.append('profilepicture', profilePictureFile);
        console.log(formData);
        fetch(process.env.REACT_APP_BEBUDDY_API+"/api/profilepicture", {
            method: "POST",
            credentials: "include",
            headers: { "Content-Type": "multipart/form-data"},
            body: formData
        }).then(response => { console.log(response); return response.text() }).then(data => {
            console.log(data);
          });
    }
    function handleProfilePictureChange(event){
        setProfilePictureFile(event.target.files[0]);
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

    const [userProfile, setUserProfile] = useState();

    useEffect(
        () =>{
            fetch(process.env.REACT_APP_BEBUDDY_API+"/api/userprofile",{
                method: "GET",
                credentials: "include",
                headers: { "Content-Type": "application/json"}
            }).then(response => { console.log(response); return response.json(); }).then(data => {
                console.log(data);
                setUserProfile(data);
              })
        }, []
    )
    return(
        <>
            {
                userProfile ? <Typography>{userProfile.age}</Typography> : <Typography>Loading</Typography>
            }
            <form onSubmit={sendProfilePicture}>
                <Button component="label" variant="contained">
                    Upload file
                    <VisuallyHiddenInput type="file" onChange={handleProfilePictureChange}/>
                </Button>
                <Button type="submit">Save changes</Button>
            </form>
        </>
    )
}

export default MyProfile;