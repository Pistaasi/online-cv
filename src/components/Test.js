import { Typography } from "@mui/material";
import React from "react"; 
import cv_kuva from "./images/cv_kuva.jpg"; 

function Test() {
  return (
    <div id="intro">
    <div id="contact_links">
    <a href="https://www.facebook.com/Iida.Rokka/" style={{ textDecoration: 'none', color: "#FFFFFF"}}>Facebook</a>
    <a href="https://www.linkedin.com/in/iida-rokka-a87b6722b/" style={{ textDecoration: 'none', color: "#FFFFFF"}}>LinkedIn</a>
    <a href="https://github.com/Pistaasi" style={{ textDecoration: 'none', color: "#FFFFFF"}}>GitHub</a>
    </div>
    <div id="contact_text">

    <Typography variant="h4"><b>Contact me</b></Typography>
    <br></br>

    <Typography variant="h6"><b>Email:</b> iida.rokka@hotmail.fi</Typography>
    <br></br>

    <Typography variant="h6"><b>Phone:</b> 040 352 9213</Typography>
    <br></br>

    <Typography variant="h6"><b>Address: </b> Kylätie 14 A 5 Helsinki 00320</Typography>
    <br></br>

    <Typography variant="h6"><b>About this website:</b> I had the sudden realisation my job applications didn't really stand out, and spent 8 hours of my friday evening / night making this.
    Intended to be viewed on PC. </Typography>
   
    </div>
    </div>
  );
}

export default Test;