import { useEffect, useState } from "react";
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
import PostCard from "../components/Card";
import { Box } from "@mui/system";
import { styled } from "@mui/material/styles";

import projectsData from "../data/projects.json";
import avatar from "../assets/img/me.png";
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
    const [projects, setProjects] = useState(projectsData);
    const [loading, setLoading] = useState(true);


    return (
        <Box>
        <title>Projects</title>
        {!projects && (
            <LoaderStyle>
                <CircularProgress color="inherit" />
            </LoaderStyle>
        )}
        {projects && (
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
                sx={{ color: "primary", bgcolor: "background.neutral" }}
                aria-label="See more projects"
                startIcon={<DoubleArrowIcon />}
                >
                See more
                </Button>
            </Stack>
            {projects ? (
                <Grid container spacing={3}>
                {projects.map((project, index) => (
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
