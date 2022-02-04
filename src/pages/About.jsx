import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Grid, Typography, Box, Container, Button, Paper, Avatar, Stack, Tooltip } from "@mui/material";
import PropTypes from "prop-types";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import reseauSncf from "../assets/img/sncf-reseau.png";
import mairieParis from "../assets/img/mairie-paris.png";
import ineris from "../assets/img/ineris.png";
import ministereEnv from "../assets/img/minitere-environement.png";
import MEAE from "../assets/img/meae.jpg";
import techs from "../assets/img/techs.png";

function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        p: 3,
        m: 3,
        color: (theme) =>
          theme.palette.mode === "dark" ? "grey.300" : "grey.800",
        fontSize: "0.875rem",
        fontWeight: "700",
        ...sx,
      }}
      {...other}
    />
  );
}

Item.propTypes = {
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
};

const CLIENTS = [
  {alt: "France railways (SNCF)", logo: reseauSncf, width: "50%"},
  {alt: "Paris City Hall", logo: mairieParis, width: "50%"},
  {alt: "Ministry of the Ecological Transition", logo: ministereEnv, width: "30%"},
  {alt: "INERIS (The French National Institute for Industrial Environment and Risks)", logo: ineris, width: "70%"},
  {alt: "Ministry for Europe and Foreign Affairs", logo: MEAE, width: "40%"}
];


export default function About() {
  return (
    <>
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            flexGrow: 1,
            flexDirection: "row",
            justifyContent: "space-evenly",
            p: 1,
            m: 1,
          }}
        >
          <Item width="750px">
            <Typography
              variant="h3"
              sx={{
                margin: "5px 0px",
                fontSize: "clamp(2.625rem, 1.2857rem + 3.5714vw, 4rem)",
                fontWeight: "800",
                lineHeight: "1.11429",
                maxWidth: "800px",
                fontFamily: '"Segoe UI"',
              }}
            >
              Hi, I'm Fatima AMZIL, a passionate Software Engineer!
            </Typography>
            <Typography variant="body1" gutterBottom>
              I'm specialized in Angular, React, JavaScript, TypeScript and have
              professional experience working with NodeJS and Java. I also have
              experience with Bootstrap, Material UI and PrimeNG. I like working
              on projects that bring value, modernity, and innovation. I mentor
              students and future developers on MyJobGlasses. I write technical
              content on Medium and DEV and I share my passion for web
              developement with people worldwide.
            </Typography>
            <Button
              to="/resume"
              variant="contained"
              sx={{
                padding: "12px 24px",
                marginTop: "20px",
                backgroundColor: "primary",
              }}
              endIcon={<ArrowForwardIosIcon />}
            >
              Get my resume
            </Button>
          </Item>
          <Item
            sx={{
              display: { xs: "none", md: "flex", flexDirection: "row-reverse" },
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <Paper
                  elevation={5}
                  sx={{
                    m: 4,
                    padding: "10px 15px 40px 15px",
                    color: "white",
                    background: 'linear-gradient(to right bottom, rgb(0, 127, 255), rgb(0, 89, 178) 120%)',
                    boxShadow: "rgb(0 0 0 / 10%) 0px 20px 25px, rgb(0 0 0 / 4%) 0px 10px 10px",
                    width: "240px",
                    height: "180px",
                  }}
                >
                  <Typography variant="caption" display="block" gutterBottom>
                    TECHNOLOGIES
                  </Typography>
                  <Stack sx={{ marginTop: "-22px" }}>
                    <img
                      src={techs}
                      alt="Technologies"
                      width="100%"
                      loading="lazy"
                    />
                  </Stack>
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper
                  variant="outlined"
                  sx={{
                    p: 2,
                    opacity: 1,
                    color: "white",
                    backgroundColor: "grey",
                    width: "80px",
                    height: "140px",
                  }}
                >
                  <Typography variant="caption" display="block" gutterBottom>
                    HOBBIES
                  </Typography>
                  <Stack sx={{ padding: "10px" }}>
                    <Typography variant="body1">
                      Workout
                    </Typography>
                    <Typography variant="body1">
                      Reading
                    </Typography>
                    <Typography variant="body1">
                      Writing
                    </Typography>
                    <Typography variant="body1">
                      Learning
                    </Typography>
                  </Stack>
                  
                </Paper>
              </Grid>
              <Grid item xs="auto">
                <Paper
                  variant="outlined"
                  elevarion={10}
                  sx={{
                    p: 2,
                    color: "white",
                    opacity: 1,
                    background: 'linear-gradient(to right bottom, rgb(0, 127, 255), rgb(0, 89, 178) 120%)',
                    boxShadow: "rgb(0 0 0 / 10%) 0px 20px 25px, rgb(0 0 0 / 4%) 0px 10px 10px",
                    width: "240px",
                    height: "190px",
                  }}
                >
                  <Typography variant="caption" display="block" gutterBottom>
                    CLIENTS
                  </Typography>
                  <Stack sx={{ marginTop: "-22px" }}>
                    <ImageList sx={{ width: 244 }} cols={3}>
                      {CLIENTS.map((item) => (
                        <ImageListItem key={item.logo}>
                          <img
                            src={item.logo}
                            srcSet={item.logo}
                            alt={item.alt}
                            width={item.width}
                            loading="lazy"
                          />
                        </ImageListItem>
                      ))}
                    </ImageList>
                  </Stack>
                </Paper>
              </Grid>
            </Grid>
          </Item>
        </Box>
      </Container>
    </>
  );
}
