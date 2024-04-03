import {
  Box,
  Avatar,
  Button,
  IconButton,
  Popover,
  Stack,
  Typography,
  useTheme,
  TextField,
  InputAdornment,
  Grid,
} from "@mui/material";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import SearchIcon from "@mui/icons-material/Search";
import { pinnedApps, recommendedApps } from "../../utils/apps";

interface propsOpen {
  open: boolean;
  anchorEl: any;
  handleClose: () => void;
}

interface propsTitle {
  title: string;
  buttonText: string;
}

const Menu = ({ open, anchorEl, handleClose }: propsOpen) => {
  const theme = useTheme();

  const MenuLabel = ({ title, buttonText }: propsTitle) => (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{ px: { xs: 2, lg: 4 }, mb: 2 }}
    >
      <Typography variant="body2">{title}</Typography>

      <Button
        size="small"
        variant="contained"
        disableElevation
        sx={{
          cursor: "not-allowed",
          ...theme.typography.caption,
          textTransform: "inherit",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.2)",
          },
        }}
      >
        {buttonText}
      </Button>
    </Stack>
  );

  const MenuContent = () => (
    <Stack
      sx={{
        width: "50vw",
        height: "85vh",
      }}
    >
      {/* Apps */}
      <Box
        sx={{
          p: 3,
          flex: 1,
          backgroundColor: "#333333e0",
          backdropFilter: "blur(5px)",
          border: "1px solid #525252",
          borderTopLeftRadius: 5,
          borderTopRightRadius: 5,
        }}
      >
        {/*Search */}
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
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon fontSize="small" />
              </InputAdornment>
            ),
          }}
        />

        {/*Pinned Text */}
        <MenuLabel title="Pinned" buttonText="All Apps >" />

        {/*Pinned Apps */}
        <Stack
          direction="row"
          flexWrap="wrap"
          justifyContent="flex-start"
          sx={{ mb: 3 }}
        >
          {pinnedApps.map((app, i) => (
            <Button
              key={app.name}
              sx={{
                height: 85,
                minWidth: 98,
                width: 98,
                color: "#fff",
                textTransform: "inherit",
                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.2)",
                },
              }}
            >
              <Stack
                spacing={1}
                direction="column"
                alignItems="center"
                justifyContent="center"
              >
                <img src={app.icon} alt={app.name} style={{ height: 30 }} />
                <Typography variant="caption">{app.name}</Typography>
              </Stack>
            </Button>
          ))}
        </Stack>

        {/*Recommended Text*/}
        <MenuLabel title="Recommened" buttonText="More >" />

        {/*Recommedend Apps*/}
        <Grid
          container
          direction="row"
          flexWrap="wrap"
          justifyContent="flex-start"
          spacing={2}
          sx={{ px: 2 }}
        >
          {recommendedApps.map((app, i) => (
            <Grid item key={app.name} xs={12} lg={6}>
              <Button
                fullWidth
                sx={{
                  py: 1,
                  px: 2,
                  justifyContent: "flex-start",
                  textTrasform: "inherit",
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                  },
                }}
              >
                <Stack direction="row" alignItems="center" spacing={2}>
                  <img src={app.icon} alt={app.name} style={{ height: 30 }} />

                  <Stack alignItems="flex-start">
                    <Typography variant="caption" sx={{ color: "#fff" }}>
                      {app.name}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{ color: theme.palette.primary.light }}
                    >
                      Recently Added
                    </Typography>
                  </Stack>
                </Stack>
              </Button>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* User */}
      <Stack
        justifyContent="center"
        sx={{
          px: 3,
          height: 60,
          backgroundColor: "#2324258b",
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
            sx={{
              textTransform: "inherit",
              color: "#fff",
              "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.1)" },
            }}
          >
            <Avatar
              sx={{ mr: 1.5, width: 30, height: 30 }}
              src="/avatarMaykon.png"
            />
            <Typography>Maykon</Typography>
          </Button>

          <IconButton size="small">
            <PowerSettingsNewIcon fontSize="small" />
          </IconButton>
        </Stack>
      </Stack>
    </Stack>
  );

  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      sx={{ translate: "100px -20px" }}
      transformOrigin={{ vertical: "bottom", horizontal: "center" }}
      PaperProps={{
        style: { backgroundColor: "transparent", boxShadow: "none" },
      }}
    >
      <MenuContent />
    </Popover>
  );
};

export default Menu;
