import React from "react";
import { Avatar, Box, Grid } from "@mui/material";
import twitter from "../assets/svg/twitter.svg";
import linkedIn from "../assets/svg/linkedIn.svg";
import youtube from "../assets/svg/youtube.svg";
import github from "../assets/svg/github.svg";
import github2 from "../assets/svg/github2.svg";
import coffee from "../assets/svg/coffee.svg";
import coffeeBlack from "../assets/img/coffee.png";
import medium from "../assets/svg/medium.svg";
import instagram from "../assets/svg/instagram.svg";
import myjobglasses from "../assets/img/myjobglasses.png";

const socialMedia = [
  {
    name: "LinkedIn",
    icon: linkedIn,
    linkTo: process.env.REACT_APP_SM_LINKEDIN,
  },
  { name: "Twitter", icon: twitter, linkTo: process.env.REACT_APP_SM_TWITTER },
  { name: "Github", icon: github, linkTo: process.env.REACT_APP_SM_GITHUB },
  { name: "Youtube", icon: youtube, linkTo: process.env.REACT_APP_SM_YOUTUBE },
  { name: "Medium", icon: medium, linkTo: process.env.REACT_APP_SM_MEDIUM },
  {
    name: "MyJobGlasses",
    icon: myjobglasses,
    linkTo: process.env.REACT_APP_SM_MYJOBGLASSES,
  },
  {
    name: "Instagram",
    icon: instagram,
    linkTo: process.env.REACT_APP_SM_INSTAGRAM,
  },
  { name: "Coffee", icon: coffee, linkTo: process.env.REACT_APP_SM_INSTAGRAM },
];

export default function SocialMedia() {
  return (
    <>
      {socialMedia.map((social, index) => {
        return (
          <Grid item key={index} sx={{ mt: 2 }}>
            <Avatar
              to={social.linkTo}
              alt={social.name}
              src={social.icon}
              sx={{ width: 40, height: 40 }}
            />
          </Grid>
        );
      })}
    </>
  );
}
