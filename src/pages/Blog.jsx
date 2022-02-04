import { useEffect, useState } from "react";
// material
import {
  Grid,
  Container,
  Stack,
  Typography,
  IconButton,
  Button,
} from "@mui/material";
// components
import avatar from "../assets/img/me.png";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import PostCard from "../components/Card";
import { Box } from "@mui/system";

// ----------------------------------------------------------------------

const SORT_OPTIONS = [
  { value: "latest", label: "Latest" },
  { value: "popular", label: "Popular" },
  { value: "oldest", label: "Oldest" },
];

// ----------------------------------------------------------------------

export default function Blog() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@famzil"
    )
      .then((resp) => resp.json())
      .then((data) => {
        const results = data.items.map((item) => ({
          id: item.guid,
          cover: item.thumbnail,
          title: item.title,
          createdAt: item.pubDate,
          link: item.link,
          view: "",
          comment: "",
          share: "",
          favorite: "",
          author: {
            name: item.author,
            avatarUrl: avatar,
          },
        }));
        setPosts(results);
      });
  }, [posts]);

  return (
    <Box>
      <title>Blog</title>
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          pt={10}
          pb={3}
        >
          <Typography
            variant="h4"
            color= "text.primary"
            gutterBottom
          >
            My Blog
          </Typography>
          <Button
            variant="contained"
            href="https://famzil.medium.com/"
            target="_blank"
            sx={{ color: "primary", bgcolor: "background.neutral" }}
            aria-label="See more posts"
            startIcon={<DoubleArrowIcon />}
          >
            See more
          </Button>
        </Stack>
        {posts ? (
          <Grid container spacing={3}>
            {posts.map((post, index) => (
              <PostCard key={post.id} post={post} index={index} />
            ))}
          </Grid>
        ) : (
          ""
        )}
      </Container>
    </Box>
  );
}
