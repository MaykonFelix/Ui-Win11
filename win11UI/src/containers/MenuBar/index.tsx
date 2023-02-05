import React, { useState } from 'react'
import { Box, Stack } from "@mui/material";
import MenuButton from "../../components/MenuButton";
import { menuIcon, cortanaIcon, taskbarApps } from "../../utils/apps";


const MenuBar = () => {

    const [anchorEl, setAnchorEl] = useState(null)
    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    }

    return (
        <Box
            sx={(theme) => ({
                width: "100vw",
                height: 30,
                backdropFilter: "blur(2px)",
            })}
        >
            <Stack
                direction="row"
                alignItems="center"
                spacing={0.2}
                sx={{ height: "100%", pl: 1.5 }}
            >
                <MenuButton onClick={handleClick}>
                    <img src={menuIcon} alt="Start" style={{ height: 18 }} />
                </MenuButton>

                <MenuButton>
                    <img src={cortanaIcon} alt="Cortana" style={{ height: 20 }} />
                </MenuButton>

                {taskbarApps.map((app, i) => (
                    <MenuButton key={i}>
                        <img src={app.icon} alt={app.name} style={{ height: 24 }} />
                    </MenuButton>
                ))}

            </Stack>
        </Box>
    )
}

export default MenuBar