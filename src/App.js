import React from "react";
import { Footer , Blog , Possibility , Features , WhatGPT3  , Header } from './containers/Index'
import { CTA ,  Brand , Navbar } from './component/Index'
import './App.css'


function App() {
     return (
       <div>
         <div className="App">
            <div className="gradient__bg">
             <Navbar/>
             <Header/>
            </div>
            <Brand/>
            <WhatGPT3 />
            <Features/>
            <Possibility/>
            <CTA/>
            <Blog/>
            <Footer/>
         </div>
    
    </div>
  );
}

export default App;
