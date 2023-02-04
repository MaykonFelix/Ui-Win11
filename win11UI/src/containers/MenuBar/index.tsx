import { Box } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

const MenuBar = () => {
    return (
        <Box
            sx={(theme) => ({
                width: "100vw",
                height: 50,
                backgroundColor: `${theme.palette.background.grey}D9`,
                backdropFilter: "blur(2px)",
            })}
        >
            <Stack
                direction='row'
                aligntItems="center"
                spacing={0.5}
                sx={{ height: "100%", pl: 1.8 }}
            ></Stack>
        </Box>
    )
}

export default MenuBar