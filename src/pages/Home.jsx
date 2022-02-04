import React from "react";
import { Avatar, Box, Grid, Typography } from "@mui/material";
import me from "../assets/img/me.png";

export default function Home() {
  return (
    <>
      <Grid
        container
        padding="25px"
        display= "flex"
        alignItems= "center"
        direction="column"
        alignContent="center"
        justifyContent="center"
      >
        <Grid item xs={8}>
          <Avatar
            alt="Fatima AMZIL"
            src={me}
            sx={{ width: 300, height: 300 }}
          />
        </Grid>
        <Grid item xs={8} >
          <Typography variant="h2" component="h2">
            Fatima AMZIL
          </Typography>
        </Grid>

        <Grid item xs={3}>
          <Typography variant="h5" component="h2" justifyContent="center" alignContent="center">
            Software Engineer - FrontEnd developer - Technical Writer
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
