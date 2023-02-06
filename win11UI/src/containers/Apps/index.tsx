import { Box } from "@mui/material"
import React, { useEffect, useState } from "react"
import { desktopApps } from "../../utils/apps";


const Apps = () => {
    const [app, setApps] = useState({});

    useEffect(() => {
        const _apps = {};

        desktopApps.map((app, i) => {
            _apps[app.name] = {
              left: 20,
              top: i * 100 + 20,
              name: app.name,
              icon: app.icon,
            };
          });
      
          setApps(_apps);
        }, []);

    return (
        < Box sx={{ width: '100%', height: '100%', position: 'relative' }
        }>


        </Box >
    )
}

export default Apps