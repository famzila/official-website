import * as React from "react";
import Paper from "@mui/material/Paper";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import resumeEnglish from "../assets/pdf/english/resume.pdf";
import resumeFrench from "../assets/pdf/french/resume.pdf";

export default function Resume() {
  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          display: "flex",
          flexGrow: 1,
          flexDirection: "column",
          justifyContent: "space-between",
          p: 1,
          m: 1,
        }}
      >
        <Typography
          variant="h3"
          sx={{
            paddingBottom: "30px",
            fontSize: "clamp(2.625rem, 1.2857rem + 3.5714vw, 4rem)",
            fontWeight: "800",
            lineHeight: "1.11429",
            fontFamily: '"Segoe UI"',
            maxWidth: "800px",
          }}
        >
          Got a good opportunity for me? Here is my resume!
        </Typography>

        <Stack
          direction="row"
          spacing={3}
          sx={{ display: "flex", justifyContent: "center", pb: "2em" }}
        >
          <Button
            href={resumeEnglish}
            variant="contained"
            color="primary"
            sx={{ p: "20px" }}
            endIcon={<DownloadForOfflineIcon />}
            download
          >
            English version
          </Button>
          <Button
            href={resumeFrench}
            variant="contained"
            color="primary"
            sx={{ p: "20px" }}
            endIcon={<DownloadForOfflineIcon />}
            download
          >
            French version
          </Button>
        </Stack>
      </Box>
    </Container>
  );
}
