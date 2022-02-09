import React from "react";
import { Avatar, Box, Grid, Link } from "@mui/material";
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
    link: process.env.REACT_APP_SM_LINKEDIN,
  },
  { name: "Twitter", icon: twitter, link: process.env.REACT_APP_SM_TWITTER },
  { name: "Github", icon: github, link: process.env.REACT_APP_SM_GITHUB },
  { name: "Youtube", icon: youtube, link: process.env.REACT_APP_SM_YOUTUBE },
  { name: "Medium", icon: medium, link: process.env.REACT_APP_SM_MEDIUM },
  {
    name: "MyJobGlasses",
    icon: myjobglasses,
    link: process.env.REACT_APP_SM_MYJOBGLASSES,
  },
  {
    name: "Instagram",
    icon: instagram,
    link: process.env.REACT_APP_SM_INSTAGRAM,
  },
  { name: "Coffee", icon: coffee, link: process.env.REACT_APP_SM_BUYMECOFFEE },
];


export default function SocialMedia() {


  return (
    <>
      {socialMedia.map((social, index) => {
        return (
          <Grid item key={index} sx={{ mt: 2}}>
            <Link href={social.link} alt={social.name} target="_blank">
              <Avatar
                alt={social.name}
                src={social.icon}
                sx={{ width: 40, height: 40 }}
              />
            </Link>
          </Grid>
        );
      })}
    </>
  );
}
