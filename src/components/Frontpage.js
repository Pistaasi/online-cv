import { Typography } from "@mui/material";
import React from "react"; 
import cv_kuva from "./images/cv_kuva.jpg"; 
import { Outlet, Link } from "react-router-dom";

function Frontpage() {
  return (
    <div id="intro">
    <img src={cv_kuva} alt="CV_Img" width="320" height="380" />
    <div id="intro_text">
    <a href="https://www.facebook.com/Iida.Rokka/" style={{ textDecoration: 'none', color: "#FFFFFF"}}>Facebook</a>
    <a href="https://www.linkedin.com/in/iida-rokka-a87b6722b/" style={{ textDecoration: 'none', color: "#FFFFFF"}}>LinkedIn</a>
    <a href="https://github.com/Pistaasi" style={{ textDecoration: 'none', color: "#FFFFFF"}}>GitHub</a>
    </div>
    <div id="intro_text2">
    <Typography variant="h4">Iida Rokka</Typography>
    <Typography><b>Education:</b> Studying for a Bachelor of Information Technology in Haaga Helia. Graduating in December of 2023.</Typography>
    <Typography><b>Skills:</b> I major in software development, and in terms of languages I have used Java, Javascript, Typescript, SQL and python. I have experience with React, React native, Node js, Thymeleaf and Expo in making web and mobile applications, as well as Photoshop Elements 14 and CS6 with editing. </Typography>
    <Typography><b>About me:</b> I'd describe myself as calm, collected, resourceful and a good team player. My hobbies are art, skating and gaming.</Typography>
    </div>
    </div>
  );
}

export default Frontpage;