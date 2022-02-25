import { Typography } from "@mui/material";
import React from "react"; 
import cv_kuva from "./images/cv_kuva.jpg"; 

function Frontpage() {
  return (
    <div id="intro">
    <img src={cv_kuva} alt="CV_Img" width="320" height="380" />
    <div id="intro_text">
    <Typography>Facebook</Typography>
    <Typography>LinkedIn</Typography>
    <Typography>Github</Typography>
    </div>
    <div id="intro_text2">
    <Typography>Name: Iida Rokka</Typography>
    <Typography>Education: Studying for a Bachelor of Information Technology in Haaga Helia. Graduation in December of 2023.</Typography>
    </div>
    </div>
  );
}

export default Frontpage;