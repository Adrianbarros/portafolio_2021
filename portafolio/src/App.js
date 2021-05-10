
import React from "react";
//import pages
import AboutMe from './pages/AboutMe'
import Contact from './pages/Coantact'
import Experience from './pages/Experience'
//Router 
import { Switch, Route, useLocation } from 'react-router-dom';
//import style
import GlobalStyle from "./components/GlobalStyle";
import Nav from './components/Nav'
//animation
import { AnimatePresence } from 'framer-motion';


function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter initial={false}>
        <Switch location={location} key={location.pathname}>
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
      </AnimatePresence>
    </div>
  );
}

export default App;
