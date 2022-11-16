import * as React from "react";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import resumeEnglish from "../assets/pdf/english/resume.pdf";
import resumeFrench from "../assets/pdf/french/resume.pdf";
import resumeBoth from "../assets/pdf/both/resume.pdf";

export default function Resume() {
  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          display: "flex",
          flexGrow: 1,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          m: 5,
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
          sx={{
            display: "flex",
            justifyContent: "space-between",
            pb: "3em",
            pt: "3em",
          }}
        >
          <Button
            href={resumeEnglish}
            variant="contained"
            color="primary"
            sx={{ p: "1em" }}
            endIcon={<DownloadForOfflineIcon />}
            download="fatima-amzil-en-resume.pdf"
          >
            English version
          </Button>
          <Button
            href={resumeFrench}
            variant="contained"
            color="primary"
            sx={{ p: "1em" }}
            endIcon={<DownloadForOfflineIcon />}
            download="fatima-amzil-fr-resume.pdf"
          >
            French version
          </Button>
          <Button
            href={resumeBoth}
            variant="contained"
            color="primary"
            sx={{ p: "1em" }}
            endIcon={<DownloadForOfflineIcon />}
            download="fatima-amzil-resumes.pdf"
          >
            Both versions
          </Button>
        </Stack>
      </Box>
    </Container>
  );
}
