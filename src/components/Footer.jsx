import React from "react";
import { styled } from "@mui/material/styles";
import { Grid, Link, Typography } from "@mui/material";
import SocialMedia from "./SocialMedia";

const pages = [
  { label: "Vlog", link: process.env.REACT_APP_SM_YOUTUBE },
  { label: "Blog", link: "/blog" },
  { label: "Resume", link: "/resume" },
  { label: "About", link: "/about" },
];

export default function Footer() {
  return (
    <footer>
      <Grid
        container
        display="flex"
        alignItems="center"
        direction="column"
        alignContent="center"
        justifyContent="center"
      >
        <Grid container direction="row" justifyContent="center" spacing={2}>
          {pages.map((page, index) => {
            return (
              <Grid item key={index} sx={{ mt: 8 }}>
                <Link key={index} href={page.link} variant="h6" color="text.primary">
                  {page.label}
                </Link>
              </Grid>
            );
          })}
        </Grid>
        <Grid container direction="row" justifyContent="center" spacing={1}>
          <SocialMedia />
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="center"
          sx={{ p: 3, mt: 2 }}
        >
          <Typography variant="p" component="p">
            © Fatima AMZIL, Nantes, France
          </Typography>
        </Grid>
      </Grid>
    </footer>
  );
}
