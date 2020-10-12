import React from 'react';
import './about.css';
import useInView from "../../Hooks/useInView";

export default function About() {

    const { visible } = useInView("InViewTest");

    return <div id="InViewTest">
        HELLO. THIS IS THE NEXT SECTION
    </div>

}