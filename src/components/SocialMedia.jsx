import React from "react";
import { Avatar, Box, Grid } from "@mui/material";
import me from "../assets/img/me.png";
import twitter from "../assets/svg/twitter.svg";
import linkedIn from "../assets/svg/linkedIn.svg";
import youtube from "../assets/svg/youtube.svg";
import github from "../assets/svg/github.svg";
import coffee from "../assets/svg/coffee.svg";
import coffeeBlack from "../assets/img/coffee.png";
import medium from "../assets/svg/medium.svg";
import instagram from "../assets/svg/instagram.svg";
import myjobglasses from "../assets/img/myjobglasses.png";

const socialMedia = [
  {name: "LinkedIn", icon: linkedIn },
  {name: "Twitter", icon: twitter },
  {name: "Github", icon: github },
  {name: "Youtube", icon: youtube },
  {name: "Medium", icon: medium },
  {name: "MyJobGlasses", icon: myjobglasses },
  {name: "Instagram", icon: instagram },
  {name: "Coffee", icon: coffee },
];

export default function SocialMedia() {
  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
      }}
    >
      {socialMedia.map((social) => {
        return (
          <Grid item sx={{ m: 1 }}>
            <Avatar alt={social.name} src={social.icon} sx={{ width: 50, height: 50 }} />
            {/* <img
                src={ social.icon }
                alt={ social.name }
                loading="lazy"
                style={{ width: 50, height: 50 }}
            /> */}
          </Grid>
        );
      })}
    </Box>
  );
}
