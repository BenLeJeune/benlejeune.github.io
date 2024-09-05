import React from 'react';
import './App.css';
import {Container, Row, Col} from 'react-bootstrap'
import Landing from "./Components/Landing/Landing";
import Canvas from "./Components/AnimatedCanvas/Canvas";
import AboutMe from "./Components/AboutMe/AboutMe";
import QuickLinks from "./Components/QuickLinks/QuickLinks";

function App() {

  return <>
          <Canvas/>
            <div id="ScrollableContainer">
                <div id="ScrollableContainerInner">
                    <Container>
                        <Landing/>
                        <QuickLinks/>
                        <br/> <br/> <br/> <br/> <br/> <br/> <br/>
                        <AboutMe/>
                        <Landing/>
                        <Landing/>
                        <Landing/>
                    </Container>
                </div>
            </div>
      </>

}

export default App;
