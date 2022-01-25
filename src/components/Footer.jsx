import React from "react";
import { styled } from "@mui/material/styles";
import { Grid, Typography } from "@mui/material";
import SocialMedia from "./SocialMedia";

const pages = ["Vlog", "Blog", "Resume", "About"];

export default function Footer() {
  return (
    <footer>
      <Grid
        container
        spacing={1}
        direction="row"
        alignItems="center"
        justifyContent="center"
      >
        {pages.map((page) => {
          return (
            <Grid item sx={{ mt: 1 }}>
              <Typography variant="h6" component="h6">
                {page}
              </Typography>
            </Grid>
          );
        })}
        <Grid container direction="row" justifyContent="center" sx={{ mt: 1}}>
          <SocialMedia />
        </Grid>
        <Grid container direction="row" justifyContent="center" sx={{ mt: 1, mb: 3 }}>
          <Typography variant="p" component="p">
            © Fatima AMZIL, Nantes, France
          </Typography>
        </Grid>
      </Grid>
    </footer>
  );
}