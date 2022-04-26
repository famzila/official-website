import React, { useEffect, useState } from "react";
import { Avatar, Grid, Link } from "@mui/material";
import { getSocialMediaIcons } from "../data/data";



export default function SocialMedia(props) {
  const darkMode = props.dark;
  const [data, setData] = useState(getSocialMediaIcons(darkMode));

  useEffect(() => {
    // Update icons based on dark mode
    setData(getSocialMediaIcons(darkMode));
  }, [darkMode]);
  return (
    <>
      {data.map((social, index) => {
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
