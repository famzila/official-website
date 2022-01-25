import React from "react";
import { Avatar, Typography } from "@mui/material";
import me from "../assets/img/me.png";

export default function Home() {
  return (
    <>
        <Avatar alt="Fatima AMZIL" src={me} sx={{ width: 300, height: 300 }} />
        <Typography variant="h2" component="h2">
          Fatima AMZIL
        </Typography>
        <Typography variant="h5" component="h2">
          Software Engineer - FrontEnd developer - Technical Writer
        </Typography>
    </>
  );
}
