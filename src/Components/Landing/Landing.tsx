import React from 'react';
import './Landing.css'
import BouncingLetters from "../BouncingLetter/BouncingLetters";
import {Row} from "react-bootstrap";

type Landing_Props = {}

export default function Landing(props: Landing_Props) {
    return (
        <Row className="d-flex align-items-center justify-content-center">
            <div className="landingContainer display-1">
                <BouncingLetters floats text="Ben Le Jeune"/>
            </div>
        </Row>
    )
}