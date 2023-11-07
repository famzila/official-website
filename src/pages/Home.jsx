import React from "react";
import { Avatar, Grid, Typography } from "@mui/material";
import me from "../assets/img/profile-photo.png";

export default function Home() {
  return (
    <> 
    <Grid
        container
        display="flex"
        alignItems="center"
        direction="column"
        alignContent="center"
        justifyContent="center"
        marginTop={10}
      >
        <Grid item xs={8}>
          <Avatar
            alt="Fatima AMZIL"
            src={me}
            sx={{ width: 250, height: 250 }}
          />
        </Grid>
        <Grid item xs={8}>
          <Typography
             variant="h3"
             sx= {{
               fontWeight: "800",
               lineHeight: "1.11429",
               fontFamily: '"Segoe UI"',
               color: "text.primary"
             }}
             gutterBottom
          >
            Fatima AMZIL
          </Typography>
        </Grid>

        <Grid item xs={3}>
          <Typography
            variant="h5"
            component="h2"
            justifyContent="center"
            align="center"
          >
            Software Engineer - Frontend lead developer
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography
            variant="h5"
            component="h2"
            justifyContent="center"
            align="center"
          >
            Google Women Developer - Angular GDE - Technical Writer - Mentor
          </Typography>
        </Grid>
      </Grid></>
  );
}
