import { Button } from '@mui/material'


const MenuButton = ({ children, ...props }) => {
    return (
        <Button
            sx={{
                height: 30,
                width: 30,
                '&:hover': {
                    backgroundColor: "rgba(255.255.255.0.1",
                }
            }} 
            {...props}
            >{children}
        </Button >
    )

}

export default MenuButton