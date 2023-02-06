import { Box, Avatar, Button, IconButton, Popover, Stack, Typography, useTheme, TextField, InputAdornment } from "@mui/material";
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import SearchIcon from '@mui/icons-material/Search';


const Menu = ({ open, anchorEl, handleClose }) => {
    const theme = useTheme()

    const MenuLabel = ({ title, buttonText }) => (
        <Stack
            direction="row"
            alignItems="center"
            justifyContent='space-between'
            sx={{ px: { xs: 2, lg: 4 }, mb: 2 }}
        >
            <Typography variant="body2">{title}</Typography>

            <Button
                size="small"
                variant="contained"
                disableElevation
                sx={{
                    cursor: "wait",
                    ...theme.typography.caption,
                    textTransform: "inherit",
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    "&:hover": {
                        backgroundColor: "rgba(255, 255, 255, 0.2"
                    },

                }}>{buttonText}</Button>
        </Stack>
    );

    const MenuContent = () =>
        <Stack
            sx={{
                width: "94vw",
                height: "94vh",
                [theme.breakpoints.up('lg')]: {
                    width: 640,
                    height: 750,
                }
            }}>

            {/* Apps */}
            <Box
                sx={{
                    p: 3,
                    flex: 1,
                    backgroundColor: "#333333e0",
                    backdropFilter: "blur(5px)",
                    border: '1px solid #525252',
                    borderTopLeftRadius: 5,
                    borderTopRightRadius: 5,
                }}>

                {/*Secarch */}
                <TextField
                    variant="filled"
                    fullWidth
                    size="small"
                    hiddenLabel
                    placeholder="Type here, but it does not work...😅"

                    sx={{
                        pb: { xs: 2, lg: 4 },
                        "& .MuiFilledInput-root": {
                            background: "rgba(0,0,0,0.3)",
                        }
                    }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon fontSize="small" />
                            </InputAdornment>
                        ),


                    }} />

                {/*Pinned Text */}
                <MenuLabel title='Pinned' buttonText="All Apps >" />
                {/*Pinned Apps */}

                {/*Recommended Text*/}

                {/*Recommedend Apps*/}
            </Box>

            {/* User */}
            <Stack
                justifyContent="center"
                sx={{
                    px: 3,
                    height: 60,
                    /* backgroundColor: "rgba(255, 255, 255, 0.1)", */
                    backgroundColor: "#232425",
                    border: "1px solid #525252",
                    borderTop: "none",
                    borderBottomLeftRadius: 5,
                    borderBottomRightRadius: 5,

                }}
            >

                <Stack
                    direction={"row"}
                    alignItems="center"
                    justifyContent="space-between"
                    sx={{ px: { xs: 2, lg: 4 } }}
                >
                    <Button
                        direction="row"
                        spacing={1}
                        alignContent="center"
                        sx={{
                            textTransform: "inherit",
                            color: "#fff",
                            "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.1)" },
                        }}
                    >
                        <Avatar sx={{ mr: 1.5, width: 30, height: 30 }} src="/avatarMaykon.png" />
                        <Typography>Maykon</Typography>
                    </Button>

                    <IconButton size="small"><PowerSettingsNewIcon fontSize="small" /></IconButton>
                </Stack>
            </Stack>
        </Stack >;

    return (
        <Popover
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            transformOrigin={{ vertical: "bottom", horizontal: "left" }}
            PaperProps={{ style: { backgroundColor: "transparent", boxShadow: "none" } }}
        >
            <MenuContent />

        </Popover>
    )
}

export default Menu