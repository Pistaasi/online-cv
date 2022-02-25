import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Outlet, Link } from "react-router-dom";


function AppBarMUI () {


return (
<div>
<AppBar position='static'>
<Toolbar>

    <Typography variant='h6'>Iida Rokka - Online CV</Typography>
    <div id="navLinks">
    <Link style={{ textDecoration: 'none', color: "#0054A5"}} id="link1" to="/">Introduction</Link>
    <Link style={{ textDecoration: 'none', color: "#0054A5"}} id="link2" to="/front">Skills</Link>
    <Link style={{ textDecoration: 'none', color: "#0054A5"}} id="link3" to="/test">Contact</Link>
    </div>

</Toolbar>
</AppBar>
<Outlet/>
</div>
  )
}

export default AppBarMUI;