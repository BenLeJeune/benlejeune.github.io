import React from 'react';
import './Landing.css'
import BouncingLetters from "../BouncingLetter/BouncingLetters";

type Landing_Props = {}

export default function Landing(props: Landing_Props) {
    return (
        <div className="landingContainer display-1">
            <BouncingLetters text="Ben Le Jeune"/>
        </div>
    )
}