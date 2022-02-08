import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Grid, Typography, Box, Container, Button, Paper, Avatar, Stack, Tooltip } from "@mui/material";
import PropTypes from "prop-types";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import reseauSncf from "../assets/img/sncf-reseau.png";
import mairieParis from "../assets/img/mairie-paris-2.png";
import ineris from "../assets/img/ineris.png";
import ministereEnv from "../assets/img/minitere-environement-2.png";
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
  {alt: "INERIS (The French National Institute for Industrial Environment and Risks)", logo: ineris, width: "100%"},
  {alt: "Ministry of the Ecological Transition", logo: ministereEnv, width: "100%"},
  {alt: "France railways (SNCF)", logo: reseauSncf, width: "100%"},
  {alt: "Ministry for Europe and Foreign Affairs", logo: MEAE, width: "100%"},
  {alt: "Paris City Hall", logo: mairieParis, width: "100%"}
];

const HABBIES = [ "Workout", "Writing", "Reading", "Learning"];


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
          <Item>
            <Typography
              variant="h3"
              sx={{
                margin: "30px 0px",
                paddingBottom: "30px",
                fontSize: "clamp(2.625rem, 1.2857rem + 3.5714vw, 4rem)",
                fontWeight: "800",
                lineHeight: "1.11429",
                fontFamily: '"Segoe UI"',
                maxWidth: "800px",
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
              href="/resume"
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
            <Grid container>
              <Grid item xs={12} md={12}>
                <Paper
                  variant="outlined"
                  elevarion={0}
                  sx={{
                    p: 2,
                    ml: 12,
                    bgColor: "background.default",
                    color: "white",
                    width: "240px",
                    height: "190px",
                  }}
                >
                  <Typography variant="caption" display="block" gutterBottom>
                    CLIENTS
                  </Typography>
                  <Stack sx={{ marginTop: "-22px" }}>
                    <ImageList sx={{ height:"180px" }} variant="woven" cols={3}>
                      {CLIENTS.map((item) => (
                        <ImageListItem key={item.logo}>
                          <Tooltip title={item.alt}>
                            <img
                              src={item.logo}
                              srcSet={item.logo}
                              alt={item.alt}
                              width={item.width}
                              loading="lazy"
                            />
                          </Tooltip>
                        </ImageListItem>
                      ))}
                    </ImageList>
                  </Stack>
                </Paper>
              </Grid>
              <Grid item xs={12} md={12}>
                <Paper
                  elevation={0}
                  variant="outlined"
                  sx={{
                    mt: 4,
                    padding: "10px 15px 40px 15px",
                    color: "white",
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
            </Grid>
          </Item>
        </Box>
      </Container>
    </>
  );
}
