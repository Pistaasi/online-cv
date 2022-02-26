import { Typography } from '@mui/material';
import React, { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import cv_pdf from "./images/Ansioluettelo_Iida_Rokka2.pdf"; 
import cv_pdf_ENG from "./images/Iida_Rokka_CV_ENG.pdf";

function Skillspage() {
  //react-pdf

  return (
    <div id="cv">
    <Document file={cv_pdf_ENG}>
        <Page pageNumber={1} />
        <Page pageNumber={2} />
      </Document>
    </div>
  );
}

export default Skillspage;