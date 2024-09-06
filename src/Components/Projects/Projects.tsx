import React, {useState} from 'react';
import {Carousel, Col, Container, Row, Tab, Tabs} from "react-bootstrap";
import './Projects.css'

type Projects_Props = {}

const PROJECTS = ['EnGen', '...and more?']

export default function Projects(props: Projects_Props) {

    const [currentProj, setCurrentProj] = useState<string>(PROJECTS[0])

    const get_tab_content = () => {
        if (currentProj === 'EnGen') return <EngenProject/>
        else if (currentProj === '...and more?') return <p>More to follow (probably)...</p>
    }

    return <Container id="Projects">
        <Row>
            <Col>
                <h1 className="text-center display-1 jacquard">Projects</h1>
                <Tabs
                    id="ControlledTabs"
                    activeKey={currentProj}
                    onSelect={proj => setCurrentProj(proj as string)}
                    className="mb-3"
                >
                    {PROJECTS.map(
                            proj =>
                            <Tab tabClassName="handjet btn-outline-light btn" eventKey={proj} title={proj}>
                                {get_tab_content()}
                            </Tab>
                        )}
                </Tabs>
            </Col>
        </Row>
    </Container>
}

function EngenProject() {
    return <>
        <h1 className="handjet">EnGen</h1>
        <Container>
            <Row>
                <Col sm>
                    <p className="lead">100,000 data entries parsed. 1,000 encounters generated. </p>
                    <p>
                        EnGen is an graph-based encounter generator for DnD 5e that produces sets of enemies by traversing an enormous graph.
                    </p>

                    <p>
                        Data from a DnD discord bot was parsed to create a graph representing shared encounters. Then,
                        machine learning algorithms were used to predict missing edges. Edges of the graph were then
                        weighted by attributes such as the monster's type, environment, alignment, and spoken languages.
                    </p>

                    <p>
                        Alongside generating encounters, EnGen can suggest a location for the encounter to take place in
                        based on the environment or type of the enemies present, alongside specific hazards to make combat dynamic.

                        The tool also suggests a strategy for the creatures to follow, based on the number of creatures
                        and their strengths relative to one another, as well as an alternative objective to encourage
                        decision-making by the players.
                    </p>
                </Col>
                <Col sm className="image-column d-flex flex-column align-items-center">
                    <img src="/assets/engen_preview.jpeg" alt="" className="img-fluid mb-5"/>
                    <a className="link-light h1 rocker link-underline-opacity-0-hover" href="https://engen.benlejeune.com">Visit the site</a>
                </Col>
            </Row>
        </Container>
    </>
}