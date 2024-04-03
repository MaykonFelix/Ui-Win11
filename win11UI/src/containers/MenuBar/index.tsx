import { MouseEventHandler, useState } from "react";
import { Box, Stack } from "@mui/material";
import MenuButton from "../../components/MenuButton";
import { menuIcon, cortanaIcon, taskbarApps } from "../../utils/apps";
import Menu from "../Menu";

const MenuBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (e: any) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={(theme) => ({
        width: "100vw",
        height: 30,
        display: "flex",
        justifyContent: "center",
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

      <Menu open={open} anchorEl={anchorEl} handleClose={handleClose} />
    </Box>
  );
};

export default MenuBar;
