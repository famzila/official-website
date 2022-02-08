import * as React from "react";
import Paper from "@mui/material/Paper";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { Button, Grid, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';

const CV = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    alignContent: 'center',
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.background.default,
    lineHeight: "60px",
    padding: "50px"
}));

export default function Resume() {
    const types = ["Short", "Long"];
    const languages = ["French", "English"];
    const [type, setType] = React.useState(types[0]);
    const [language, setLangugae] = React.useState(languages[0]);


    const handleLanguageSelect = (event, newValue) => {
        setLangugae(newValue);
        console.log(language);
    };
    const handleTypeSelect = (event, newValue) => {
        setType(newValue);
        console.log(type);
    };

    return (
        <Grid
            spacing={2}
            container
            display="flex"
            alignItems="center"
            direction="column"
            alignContent="center"
            justifyContent="center"
            padding="123px"
        >
            <Typography color="text.primary" variant="h4" sx={{ mb: 5, fontSize: "clamp(2.625rem, 1.2857rem + 3.5714vw, 2rem)", fontWeight: "800", lineHeight: "1.11429", fontFamily: '"Segoe UI"',}}>
            </Typography>
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
                Got a good opportunity for me? Here is my {type} resumee in {language} 
            </Typography>
            <CV variant="outlined" >
                <Stack spacing={2} direction="row" sx={{ mb: 5}}>
                    <ToggleButtonGroup
                        color="primary"
                        value={language}
                        exclusive
                        onChange={handleLanguageSelect}
                        >
                        <ToggleButton value="French">French</ToggleButton>
                        <ToggleButton value="English">English</ToggleButton>
                    </ToggleButtonGroup>
                    <ToggleButtonGroup
                        color="primary"
                        value={type}
                        exclusive
                        onChange={handleTypeSelect}
                        >
                        <ToggleButton value="Short">Short</ToggleButton>
                        <ToggleButton value="Long">Long</ToggleButton>
                    </ToggleButtonGroup>
                </Stack>
                <Stack direction="row">
                    <Button variant="contained" sx={{ color: "primary.contrastText", bgcolor: "primary.light" }} endIcon={<DownloadForOfflineIcon />}>
                        Download
                    </Button>
                </Stack>
            </CV> 
        </Grid>
    );
}
