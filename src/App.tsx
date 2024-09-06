import React, {useLayoutEffect} from 'react';
import './App.css';
import {Container, Row, Col} from 'react-bootstrap'
import Landing from "./Components/Landing/Landing";
import Canvas from "./Components/AnimatedCanvas/Canvas";
import AboutMe from "./Components/AboutMe/AboutMe";
import QuickLinks from "./Components/QuickLinks/QuickLinks";
import Projects from "./Components/Projects/Projects";
import MyArt from "./Components/MyArt/MyArt";


function App() {

    useLayoutEffect(() => {

        const options = {
            animate: true,
            patternWidth: 100,
            patternHeight: 100,
            grainOpacity: 0.2,
            grainDensity: 10,
            grainWidth: 5,
            grainHeight: 1
        }

        // @ts-ignore
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        grained("#BgCanvasContainer", options)
    }, [])


  return <>
          <Canvas/>
            <div id="ScrollableContainer">
                <div id="ScrollableContainerInner">
                    <Container>
                        <Landing/>
                        <br/>
                        <QuickLinks/>
                        <br/> <br/> <br/> <br/> <br/> <br/> <br/>
                        <AboutMe/>
                        <br/> <br/> <br/> <br/> <br/> <br/> <br/>
                        <Projects/>
                        <br/><br/><br/><br/><br/><br/><br/>
                        <MyArt/>
                        <Landing/>
                        <Landing/>
                    </Container>
                </div>
            </div>
      </>

}

export default App;
