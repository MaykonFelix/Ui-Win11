import { Popover } from "@mui/material";


}

const Menu = ({ open, anchorEl, handleClose }) => {
    const MenuContent = () => <div>Hello</div>;
    return (
        <Popover 
        open={open} 
        anchorEl={anchorEl} 
        onClose={handleClose} 
        transformOrigin={{vertical: "bottom", horizontal: "left"}}
        PaperProps={{style: {backgroundColor: "transparent", boxShadow: "none"}}}
        >
            <MenuContent />
            
             </Popover>
    )
}

export default Menu