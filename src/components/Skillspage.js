import { Typography } from '@mui/material';
import React, { useState} from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';
import cv_pdf from "./images/Ansioluettelo_Iida_Rokka2.pdf"; 
import cv_pdf_ENG from "./images/Iida_Rokka_CV_ENG.pdf";
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import { Button} from '@mui/material';

function Skillspage() {
  //react-pdf
  //pdf language changing
  const [pdf, setPdf] = useState(cv_pdf_ENG);

  const English = (e) => {
    setPdf(cv_pdf_ENG); 
  }   
  const Finnish = (e) => {
    setPdf(cv_pdf); 
  }   

  return (
    <div id="cv">
        <div id="lan_buttons">
        <Button onClick={ (e) => Finnish(e) }>Finnish</Button>
        <Button onClick={ (e) => English(e) }>English</Button>
         </div>
    <Document file={pdf}>
        <Page pageNumber={1} />
        <Page pageNumber={2} />
      </Document>
    </div>
  );
}

export default Skillspage;