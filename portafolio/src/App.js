
import React from "react";
//import pages
import AboutMe from './pages/AboutMe'
import Contact from './pages/Coantact'
import Experience from './pages/Experience'
//Router 
import { Switch, Route } from 'react-router-dom';
//import style
import GlobalStyle from "./components/GlobalStyle";
import Nav from './components/Nav'


function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route path="/" exact>
          <AboutMe />
        </Route>
        <Route path="/experience">
          <Experience />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
