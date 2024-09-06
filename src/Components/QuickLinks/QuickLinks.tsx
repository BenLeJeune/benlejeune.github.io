import React from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import './QuickLinks.css'

type QuickLinks_Props = {}

export default function QuickLinks(props: QuickLinks_Props) {
    return <Container id="QuickLinks" className="pb-2">
        <Row className="pb-5">
            <h1 className="playwrite text-center">What are you here for?</h1>
        </Row>
        <Row className="pt-5 pb-5">
            <Col className="d-flex justify-content-center">
                <a className="link-light h1 rocker link-underline-opacity-0-hover" href="#AboutMe">Online CV</a>
            </Col>
            <Col className="d-flex justify-content-center">
                <a className="link-light h1 rocker link-underline-opacity-0-hover" href="#AboutMe">Projects</a>
            </Col>
            <Col className="d-flex justify-content-center">
                <a className="link-light h1 rocker link-underline-opacity-0-hover" href="#AboutMe">My Art</a>
            </Col>
        </Row>
    </Container>
}