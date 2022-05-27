import React, { useEffect, useState } from "react";
import { Avatar, Grid, Link } from "@mui/material";
import { getSocialMediaIcons } from "../data/data";

import { styled } from "@mui/material/styles";


export default function SocialMedia(props) {
  const darkMode = props.dark;
  const [data, setData] = useState(getSocialMediaIcons(darkMode));

  const StyledLink = styled(Link)({
    height: 44,
    overflow: "hidden",
    WebkitLineClamp: 2,
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
  });

  useEffect(() => {
    // Update icons based on dark mode
    setData(getSocialMediaIcons(darkMode));
  }, [darkMode]);
  return (
    <>
      {data.map((social, index) => {
        return (
          <Grid item key={index} sx={{ mt: 2}}>
            <StyledLink
              key={index}
              href={social.link} 
              alt={social.name} 
              target="_blank"
              variant="subtitle2"
              color= "primary.contrastText"
              underline="hover"
            >
              <Avatar
                  key={social.name}
                  alt={social.name}
                  src={social.icon}
                  sx={{ width: 40, height: 40 }}
              />
            </StyledLink>
          </Grid>
        );
      })}
    </>
  );
}
