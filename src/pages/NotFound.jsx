import React from "react";
import { CardMedia, Container } from "@mui/material";
import notfoundImage from "../assets/img/404.png";

export default function NotFound() {
  return (
    <>
      <Container sx={{ width: "500px", height: "500px", padding: "100px", marginBottom: "20px" }}>
        <CardMedia
          component="img"
          image={notfoundImage}
          alt="Ops! Page not found ..."
        />
      </Container>
    </>
  );
}
