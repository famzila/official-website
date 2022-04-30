    import PropTypes from "prop-types";
    import { Link as RouterLink } from "react-router-dom";
    import VisibilityIcon from "@mui/icons-material/Visibility";
    import ShareIcon from "@mui/icons-material/Share";
    import ForumIcon from "@mui/icons-material/Forum";
    import AcUnitIcon from '@mui/icons-material/AcUnit';
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
    height: 30,
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
    const { name, code, thumbnail, demo, description } = post;

    const POST_INFO = [
        { number: 0, icon: ForumIcon },
        { number: 0, icon: VisibilityIcon },
        { number: 0, icon: ShareIcon },
    ];

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
            <CardActions sx={{display: "flex", justifyContent: "end"}}>
                <IconButton aria-label="add to favorites">
                    <AcUnitIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <AcUnitIcon />
                </IconButton>
            </CardActions>
        </Card>
        </Grid>
    );
}
