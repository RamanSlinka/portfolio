import React from 'react'
import './App.css';
import Header from "./header/Header";
import Main from "./main/Main";
import Skills from "./skills/Skills";
import Projects from "./my works/Projects";
import DistantWork from "./distant work/DistantWork";
import Contacts from "./contacts/Contacts";
import Footer from "./footer/Footer";



function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <DistantWork />
            <Contacts />
            <Footer />
        </div>
    );
}

export default App;
