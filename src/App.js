import './App.css';
import Header from './Header'; 
import Body from './Body';
import About from './About';
import Contact
 from './Contact';
import { Route,Routes } from 'react-router-dom';

import { useState } from 'react';
let color = "black";
let lightdarkmode = 'white'


function App() {
  
  const toggle = () =>{
    if(mode==="light"){
      setmode("dark")
      document.body.style.background = '#383838'
      color = "white"
      lightdarkmode = "#484848"

    }
    else{
      setmode("light")
      document.body.style.background = 'white'
      color = "black"
      lightdarkmode = 'white'
    }
  }

  const [mode, setmode] = useState("light")
  return (
    <>
      <Header textmode = "Textform" mode = {mode} toggle = {toggle}/>
      <Routes>
        <Route path="/" 
          element ={
            <div className='container'>
                <Body heading = "Enter text below to analyse." mode = {mode}/>
            </div>
          }
        />
        <Route path="/about" 
          element = {
            <div className='container'>
              <About color= {color} mode={lightdarkmode} />
            </div>
          }
        />
        <Route path="/contact" 
          element = {
            <div className='container'>
              <Contact color = {color} mode={lightdarkmode} />
            </div>
          }
        />
      </Routes>
    </>
  );
}

export default App;
