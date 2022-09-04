// material
import {
  Grid,
  Container,
  Stack,
  Typography,
  Button,
  CircularProgress,
} from "@mui/material";

// components
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import { Box } from "@mui/system";
import { styled } from "@mui/material/styles";

import projectsData from "../data/projects.json";
import ProjectCard from "../components/Project";

// ----------------------------------------------------------------------
const LoaderStyle = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    padding: "200px",
}));

export default function Projects() {
    return (
        <Box>
        <title>Projects</title>
        {!projectsData && (
            <LoaderStyle>
                <CircularProgress color="inherit" />
            </LoaderStyle>
        )}
        {projectsData && (
            <Container>
            <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                pt={10}
                pb={3}
            >
                <Typography
                variant="h3"
                sx={{
                    fontWeight: "800",
                    lineHeight: "1.11429",
                    fontFamily: '"Segoe UI"',
                    color: "text.primary",
                }}
                gutterBottom
                >
                My Projects
                </Typography>
                <Button
                variant="contained"
                href="https://github.com/famzila"
                target="_blank"
                color="primary"
                aria-label="See more projects"
                startIcon={<DoubleArrowIcon />}
                >
                See more
                </Button>
            </Stack>
            {projectsData ? (
                <Grid container spacing={3}>
                {projectsData.map((project, index) => (
                    <ProjectCard key={project.name} post={project} index={index} />
                ))}
                </Grid>
            ) : (
                ""
            )}
            </Container>
        )}
        </Box>
    );
}
