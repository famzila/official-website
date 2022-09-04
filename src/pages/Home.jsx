import React from "react";
import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import me from "../assets/img/me.png";

function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        m: 1,
        color: (theme) =>
          theme.palette.mode === "dark" ? "grey.300" : "grey.800",
        fontSize: "0.875rem",
        fontWeight: "700",
        display: "flex",
        flexGrow: 1,
        flexDirection: "column",
        justifyContent: "center",
        ...sx,
      }}
      {...other}
    />
  );
}

export default function Home() {
  return (
    <>
      <Container maxWidth="xl">
          <Item>
            <Avatar
              alt="Fatima AMZIL"
              src={me}
              sx={{ width: 300, height: 300 }}
            />
          </Item>
          <Item>
            <Typography
              variant="h3"
              sx={{
                fontWeight: "800",
                lineHeight: "1.11429",
                fontFamily: '"Segoe UI"',
                color: "text.primary"
              }}
              gutterBottom
            >
              Fatima AMZIL
            </Typography>
          </Item>
          <Item>
            <Typography
              variant="h5"
              component="h2"
              align="center"
            >
              Software Engineer - Frontend lead developer
            </Typography>
          </Item>
          <Item>
            <Typography
              variant="h5"
              component="h3"
              align="center"
            >
              Google Women Developer - Angular GDE - Technical Writer - Mentor
            </Typography>
          </Item>
      </Container>
    </>
  );
}
