    import PropTypes from "prop-types";
    import { Link as RouterLink } from "react-router-dom";
    
    import Stack from '@mui/material/Stack';
    import CodeIcon from '@mui/icons-material/Code';
    import VisibilityIcon from '@mui/icons-material/Visibility';

    // material
    import { alpha, styled } from "@mui/material/styles";
    import {
    Box,
    Link,
    Card,
    Grid,
    Avatar,
    Typography,
    CardContent,
    Icon,
    CardActions,
    IconButton,
    Chip,
    } from "@mui/material";
    import { fDate } from "../utils/formatters";
    import SvgIconStyle from "./SvgIconStyle";
    // utils

    // ----------------------------------------------------------------------

    const CardMediaStyle = styled("div")({
    position: "relative",
    paddingTop: "calc(100% * 3 / 4)",
    });

    const TitleStyle = styled(Link)({
    height: 30,
    overflow: "hidden",
    WebkitLineClamp: 2,
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    });
    const DescriptionStyle = styled("p")({
    height: 50,
    overflow: "hidden",
    WebkitLineClamp: 2,
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    color: "white"
    });

    const CoverImgStyle = styled("img")({
    top: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    position: "absolute",
    });

    // ----------------------------------------------------------------------

    ProjectCard.propTypes = {
    post: PropTypes.object.isRequired,
    index: PropTypes.number,
    };

    export default function ProjectCard({ post, index }) {
    const { name, code, thumbnail, demo, description, tags } = post;

    const tagsArray = tags?.split(",")?.slice(0, 4);

    return (
        <Grid
        item
        xs={12}
        sm={12}
        md={6}
        >
        <Card sx={{ position: "relative" }}>
            <CardMediaStyle>
                <CoverImgStyle alt={name} src={require(`../assets/img/projects/${thumbnail}.png`)}/>
            </CardMediaStyle>

            <CardContent sx={{ padding: "16px 0 0 16px"}}>
                <Typography
                    gutterBottom
                    variant="caption"
                    sx={{ color: "text.disabled", display: "block" }}
                >
                    {fDate("2022-04-25 00:54:15")}
                </Typography>

                <TitleStyle
                    to={code}
                    variant="h6"
                    color= "primary.contrastText"
                    underline="hover"
                    component={RouterLink}
                >
                    {name}
                </TitleStyle>
                <DescriptionStyle
                    to={code}
                    variant="caption"
                    color= "primary.contrastText"
                    underline="hover"
                    component={RouterLink}
                >
                    {description}
                </DescriptionStyle>
            </CardContent>
            <CardActions sx={{display: "flex", justifyContent: "space-between"}}>
                <Stack direction="row" spacing={1}>
                    {tagsArray?.map((tag, index) => {
                        return <Chip key={index} label={tag}  />
                    })}
                </Stack>
                <Stack direction="row">
                    <IconButton sx={{ color: "white"}} aria-label="add to favorites" href={code} target="_blank">
                        <CodeIcon />
                    </IconButton>
                    <IconButton sx={{ color: "white"}} aria-label="share" href={demo} target="_blank">
                        <VisibilityIcon />
                    </IconButton>
                </Stack>
            </CardActions>
        </Card>
        </Grid>
    );
}
