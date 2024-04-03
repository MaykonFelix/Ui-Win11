import { Button } from "@mui/material";

interface MenuButtonProps {
  children: React.ReactNode;
}

const MenuButton = ({ children, ...props }: MenuButtonProps) => {
  return (
    <Button
      sx={{
        height: 30,
        minWidth: 30,
        "&:hover": {
          backgroundColor: "rgba(255.255.255.0.1",
        },
      }}
      {...props}
    >
      {children}
    </Button>
  );
};

export default MenuButton;
