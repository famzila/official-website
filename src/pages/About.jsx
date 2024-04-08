import React from "react";
import PropTypes from "prop-types";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {
  Grid,
  Typography,
  Box,
  Container,
  Button,
  Tooltip,
  CardMedia,
  Card,
  CardHeader,
  Link
} from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import CardContent from "@mui/material/CardContent";

import reseauSncf from "../assets/img/sncf-reseau.png";
import mairieParis from "../assets/img/mairie-paris-2.png";
import ineris from "../assets/img/ineris.png";
import ministereEnv from "../assets/img/minitere-environement-2.png";
import MEAE from "../assets/img/meae.png";
import AFKLM from "../assets/img/afklm.png";
import techs from "../assets/img/techs.png";

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
  { alt: "Paris City Hall", logo: mairieParis, width: "100%" },
  {
    alt: "INERIS (The French National Institute for Industrial Environment and Risks)",
    logo: ineris,
    width: "100%",
  },
  {
    alt: "Ministry of the Ecological Transition",
    logo: ministereEnv,
    width: "100%",
  },
  { alt: "France railways (SNCF)", logo: reseauSncf, width: "100%" },
  { alt: "Ministry for Europe and Foreign Affairs", logo: MEAE, width: "100%" },
  { alt: "Air France & KLM", logo: AFKLM, width: "100%" },
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
             Hello, I'm Fatima AMZIL, a software engineer based in France with 7 years of experience specializing in Frontend development.<br/><br/>
             I've collaborated with prestigious clients like the French Railway Network, the French retirement system, and France Airlines (AFKLM). 
             Currently, I contribute my expertise to ASP (Agence de Services Et de Paiement) as a cross-functional frontend technical leader. <br/><br/>Beyond work, I'm a technical writer on Medium, a mentor at MyJobGlasses, 
             and an Angular Google Developer Expert (GDE), sharing insights about Angular on YouTube. Passionate about innovation and continuous learning,
             I'm dedicated to personal and professional growth.
             <br/><br/>
             Find all my certifications here: <Link  color="inherit" rel="noopener" href="https://www.linkedin.com/in/fatima-amzil/details/certifications/">Certifications</Link>
            </Typography>
            <Button
              href="/resume"
              variant="contained"
              color="primary"
              sx={{
                padding: "12px 24px",
                marginTop: "20px",
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
                <Card
                  sx={{
                    maxWidth: 309,
                    ml: 12,
                    mb: 5,
                    bgColor: "background.default",
                    color: "white",
                    width: "250px",
                    height: "230px",
                  }}
                >
                  <CardHeader subheader="CLIENTS" />
                  <CardContent sx={{ padding: "0 12px 0 12px" }}>
                    <ImageList
                      sx={{ overflow: "hidden", mt: 0 }}
                      variant="woven"
                      cols={3}
                    >
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
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={12}>
                <Card sx={{ maxWidth: 309 }}>
                  <CardHeader subheader="TECHNOLOGIES" />
                  <CardMedia
                    sx={{ padding: "0 12px 0 12px", marginBottom: "24px" }}
                    component="img"
                    height="220"
                    width="100%"
                    image={techs}
                    alt="Technologies"
                  />
                </Card>
              </Grid>
            </Grid>
          </Item>
        </Box>
      </Container>
    </>
  );
}
