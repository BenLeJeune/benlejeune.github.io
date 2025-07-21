import React, {useEffect, useLayoutEffect, useRef, useState} from 'react';
import './App.css';
import {Container, Row, Col} from 'react-bootstrap'
import Landing from "./Components/Landing/Landing";
import Canvas from "./Components/AnimatedCanvas/Canvas";
import AboutMe from "./Components/AboutMe/AboutMe";
import QuickLinks from "./Components/QuickLinks/QuickLinks";
import Projects from "./Components/Projects/Projects";
import MyArt from "./Components/MyArt/MyArt";
import {scroll_callback} from "./helpers";


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

        const el = document.getElementById('ScrollableContainer')
        if (el) el.addEventListener('scroll', scroll_listener)

        return () => {
            if (el) el.removeEventListener('scroll', scroll_listener)
        }

    }, [])

    const topleftRef = useRef<HTMLHeadingElement>(null)
    useEffect(() => {
        if (!topleftRef.current) return
        const target = topleftRef.current

        const source = document.getElementById('Landing')
        if (!source || !source.children[0]) return

        const source_span = source.children[0]
        target.className = source_span.className + ' d-inline-block p-2'
    })

    const scroll_listener = () => {
        const el = document.getElementById('ScrollableContainer')
        if (!el) return

        if (el.scrollTop > 0) {
            setShowBar(true)
        }
        else {
            setShowBar(false)
        }
    }

    const [showBar, setShowBar] = useState(false)
    const [showNav, setShowNav] = useState(false)

    const scroll_to_top = () => {
        const el = document.getElementById('ScrollableContainer')
        if (el) el.scrollTo({top: 0, left: 0, behavior: "smooth"})
    }

    const wrapped_scroll = (id:string) => {
        scroll_callback(id)()
        setShowNav(false)
    }

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
                        <br/><br/><br/><br/><br/><br/><br/>
                    </Container>
                </div>
            </div>
      <div className={`m-2 TopBar ${showBar ? 'shown' : ''}`}>
        <h1 ref={topleftRef} onClick={scroll_to_top}>Ben Le Jeune</h1>
          <div onClick={() => setShowNav(prev => !prev)} className="EntireNavMenu d-inline-block m-3 mt-1 p-1">
              <Hamburger/>
          </div>
      </div>

      <div id="FullScrenNav" className={showNav ? 'shown' : 'hidden'}>
          <div className={`m-2 TopBar ${showBar ? 'shown' : ''}`}>
              <div onClick={() => setShowNav(prev => !prev)} className="EntireNavMenu d-inline-block m-3 mt-1 p-1">
                  <Hamburger/>
              </div>
          </div>

          <Container className="floating_nav_container pt-5 pb-5 text-center d-flex
          align-items-center justify-content-center">
              <br/> <br/> <br/> <br/>
              <Col>
                  <Row>
                      <h1 className="d-inline-block display-1 baskerville" onClick={() => wrapped_scroll('AboutMe')}>
                          About Me
                      </h1>
                  </Row>

                  <Row>
                      <h1 className="d-inline-block display-2 baskerville" onClick={() => wrapped_scroll('AboutMeAcademic')}>
                          Academic Record
                      </h1>
                  </Row>

                  <Row>
                      <h1 className="d-inline-block display-2 baskerville" onClick={() => wrapped_scroll('AboutMeResearch')}>
                          Research
                      </h1>
                  </Row>

                  <Row>
                      <h1 className="d-inline-block display-2 baskerville" onClick={() => wrapped_scroll('AboutMeWork')}>
                          Work Experience
                      </h1>
                  </Row>

                  <Row>
                      <h1 className="d-inline-block display-2 baskerville" onClick={() => wrapped_scroll('Projects')}>
                          Projects
                      </h1>
                  </Row>

                  <Row>
                      <h1 className="d-inline-block display-2 baskerville" onClick={() => wrapped_scroll('MyArt')}>
                          Art
                      </h1>
                  </Row>
              </Col>


          </Container>

      </div>
      </>

}

export default App;

const Hamburger = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-list" viewBox="0 0 16 16">
    <path fill-rule="evenodd"
          d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
</svg>