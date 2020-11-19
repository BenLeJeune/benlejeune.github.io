import React from 'react';
import './sidebar.css';
import useSidebar from "../../Hooks/useSidebar";

export default function Sidebar() {

    const { toggleSidebar } = useSidebar()

    const navigation : { [key:string]:string } = {
        "About Me": "AboutContainer",
        "My Skills": "AboutSkills",
        "Portfolio": "PortfolioContainer",
        "Follow Me": "ContactContainer"
    }

    const navigate = ( key: string ) => {
        const destination = navigation[key];
        if (destination) {
            console.log("Found destination")
            const targetEl = document.getElementById( destination );
            if (targetEl) {
                console.log("Scrolling")
                window.scrollTo({ top: targetEl.offsetTop - 20, behavior: "smooth" })
                toggleSidebar()
            }
        }
    }

    const logoPress = () => {
        window.scrollTo(0, 0);
        toggleSidebar()
    }

    return <div id="SidebarColumn">
        <p id="SidebarToggle" onMouseDown={ () => toggleSidebar() } >Toggle</p>
        <div id="SidebarContent">
            <img id="SidebarLogo" onMouseDown={ logoPress } src="/assets/logo-flat.svg" alt="Logo"/>
            {
                Object.keys( navigation ).map(
                    key =>
                    <p className="navButton" onMouseDown={ () => navigate(key) }>
                        <span>{ key }</span>
                    </p>
                )
            }
        </div>
    </div>
}