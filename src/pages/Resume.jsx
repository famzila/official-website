import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { Avatar, Button, Card, Chip, Divider, Grid, IconButton, Stack, Switch, Typography } from "@mui/material";
import { styled } from "@mui/system";
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import RotateLeftIcon from '@mui/icons-material/RotateLeft';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import { Edit, LocationOn } from "@mui/icons-material";
import me from "../assets/img/me.png";
import { grey } from "@mui/material/colors";

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
        // <Grid
        // spacing={2}
        // container
        // display="flex"
        // alignItems="center"
        // direction="column"
        // alignContent="center"
        // justifyContent="center"
        // paddingTop="180px"
        // paddingBottom="150px"
        //     >
        //     <Card>
        //         <Box sx={{ p: 2, display: 'flex', direction: "row" }}>
        //             <Avatar variant="square" alt="Profil image" src={me}  sx={{ width: 56, height: 56 }}/>
        //             <Typography color="white">My resume</Typography>
        //         </Box>
        //         <Divider />
        //         <Stack
        //             direction="row"
        //             alignItems="center"
        //             justifyContent="space-between"
        //             sx={{ px: 2, py: 1, bgcolor: 'background.default' }}
        //         >
        //             <Chip>Active account not working</Chip>
        //             <Switch />
        //         </Stack>
        //     </Card>
        // </Grid>
        <>
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
                    Download my {type} resumee in {language} 
                </Typography>
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
                    <Button variant="contained" endIcon={<DownloadForOfflineIcon />}>
                        Download
                    </Button>
                </Stack>
            </Grid>
        </>
    );
}
