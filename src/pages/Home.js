import { Link } from "react-router-dom";

const { Typography } = require("@mui/material");

function Home() {
  return (
    <>
      <Typography variant="h1">This is our home</Typography>
      <Link to="/myactivities">My Activities</Link>
      <Link to="/newactivity">New Activity</Link>
    </>

  )
}

export default Home;