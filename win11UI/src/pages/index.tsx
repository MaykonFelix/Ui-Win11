import { Box } from "@mui/material";
import Apps from "../containers/Apps";
import MenuBar from "../containers/MenuBar";
import Background from '/background2.jpg'

const Home = () => {
    return (
        <Box
            sx={{
                height: '100vh',
                width: '100vw',
                overflow: 'hidden',
                background: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.4)), url(${Background})`,
                backgroundPosition: 'center center',
                backgroundSize: 'cover',
            }}>

            <Box sx={{ height: '100%' }}>
                <Apps />
            </Box>

            <Box sx={{ bottom: '0px', position: 'fixed' }}>
                <MenuBar />
            </Box>

        </Box >
    )
}

export default Home;