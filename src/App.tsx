import React from 'react';
import './App.css';
import {Container, Row, Col} from 'react-bootstrap'
import Landing from "./Components/Landing/Landing";
import Canvas from "./Components/AnimatedCanvas/Canvas";

function App() {

  return <>
          <Canvas/>
            <div id="ScrollableContainer">
                <div id="ScrollableContainerInner">
                    <Container>
                        <Landing/>
                        <Landing/>
                        <Landing/>
                        <Landing/>
                        <Landing/>
                    </Container>
                </div>
            </div>
      </>

}

export default App;
