import React from 'react';
import './MyArt.css'
import {Col, Container, Row} from "react-bootstrap";

type MyArt_Props = {}

export default function MyArt(props: MyArt_Props) {
    return <>
        <h1 className="text-center rocker display-1">My Art</h1>
        <p className="text-center lead">I do art for fun, and for money.</p>
        <Container id="MyArt">
            <Row>
                <Col sm>
                    <h1 className="text-center rocker">Commissions</h1>
                    <p className="text-center">
                        I mostly take commissions through <strong>Fiverr</strong> (linked below).
                    </p>
                    <p className="text-center">
                        If you're a business and would like to arrange something more consistent,
                        then you can <strong>email me directly</strong> at <a href="mailto:me.benlejeune@gmail.com" className="link-light">me.benlejeune@gmail.com</a>
                    </p>
                </Col>
                <Col sm>
                    <h1 className="text-center rocker">My Portfolios</h1>
                    <p className="text-center">
                        Find me on <strong>Artstation</strong> at <a href="https://www.artstation.com/ben-le-jeune" className="link-light">ben-le-jeune.</a>
                    </p>
                    <p className="text-center">
                        Find me on <strong>Instagram</strong> at <a href="http://instagram.com/ben_le_jeune_" className="link-light">ben_le_jeune_.</a>
                    </p>
                </Col>
            </Row>
            <Row>
                <p className="text-center lead">
                    Items & Weapons (Available for Commission)
                </p>
            </Row>
            <Row>
                <Col sm className="col-6">
                    <img src="/assets/trans/Cockatrice%20Broomstick%20NoBG.png" alt="" className="img-fluid"/>
                </Col>
                <Col sm className="col-6">
                    <img src="/assets/trans/Frozen%20Dagger%20NOBG.png" alt="" className="img-fluid"/>
                </Col>
                <Col sm className="col-6">
                    <img src="/assets/trans/Frozen%20Armour%20NOBG.png" alt="" className="img-fluid"/>
                </Col>
                <Col sm className="col-6">
                    <img src="/assets/trans/Fan%20Colours%20NOBG.png" alt="" className="img-fluid"/>
                </Col>
                <Col sm className="col-6">
                    <img src="/assets/trans/Cosmic%20Lyre.png" alt="" className="img-fluid"/>
                </Col>
                <Col sm className="col-6 d-block d-sm-none">
                    <img src="/assets/trans/Faelight%20Lantern.png" alt="" className="img-fluid"/>
                </Col>
            </Row>
            <Row>
                <Col sm className="col-6">
                    <img src="/assets/trans/Beckoner's%20Pact%20Rod%20Medium.png" alt="" className="img-fluid"/>
                </Col>
                <Col sm className="col-6">
                    <img src="/assets/trans/Staff%20of%20the%20Horned%20Prince.png" alt="" className="img-fluid"/>
                </Col>
                <Col sm className="col-6">
                    <img src="/assets/trans/Flail%20Snail%20Shield%20Fragment.png" alt="" className="img-fluid"/>
                </Col>
                <Col sm className="col-6">
                    <img src="/assets/trans/Flametongue_NoBG.png" alt="" className="img-fluid"/>
                </Col>
                <Col sm className="col-6 d-none d-sm-block">
                    <img src="/assets/trans/Faelight%20Lantern.png" alt="" className="img-fluid"/>
                </Col>
            </Row>
        </Container>
    </>
}