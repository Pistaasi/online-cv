import logo from './logo.svg';
import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import pink from '@mui/material/colors/pink';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppBarMUI from "./components/AppBarMUI";
import Frontpage from "./components/Frontpage"; 
import Test from "./components/Test";
import ReactDOM from "react-dom";

const theme = createTheme({
  palette: {
    primary: {main: "#FFFFFF", contrastText: "#0054A5"},
    secondary: {main: "#C0F4F0", contrastText: '#FFFFFF'},
    text: {primary: "#48D2C7 ", secondary: "#48D2C7", contrastText: '#FFFFFF'},
    action: {active: pink[500], hover:pink[50], selected: pink[300], contrastText: '#FFFFFF' },
    background: {default: '#0054A5 '},
    card: {default: "F4F9F9"}
   },
  typography: {fontFamily: ['Arial']},
});


function App() {
  return (
    
    <ThemeProvider theme={ theme }>
    <CssBaseline />
  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppBarMUI />}>
          <Route path="test" element={<Test />} />
          <Route path="front" element={<Frontpage />} />
        </Route>
      </Routes>
    </BrowserRouter>

    </ThemeProvider>
  
  );
}

export default App;
