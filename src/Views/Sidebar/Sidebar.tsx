import React from 'react';
import './sidebar.css';
import useSidebar from "../../Hooks/useSidebar";

export default function Sidebar() {

    const { toggleSidebar, sidebarOpen } = useSidebar()

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
        <p id="SidebarToggle" className={sidebarOpen ? "open" : "closed"} onMouseDown={ () => toggleSidebar() } ><SidebarToggle/></p>
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

function SidebarToggle() {
    return <svg width="20" height="38" viewBox="0 0 20 38" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.9323 19.2666L19.6394 18.5595C19.8269 18.747 19.9323 19.0014 19.9323 19.2666C19.9323 19.5318 19.8269 19.7861 19.6394 19.9737L18.9323 19.2666ZM0.508714 2.25719C0.118189 1.86667 0.118189 1.2335 0.508714 0.842976C0.899238 0.452452 1.5324 0.452452 1.92293 0.842976L0.508714 2.25719ZM1.92293 37.6901C1.5324 38.0807 0.899237 38.0807 0.508713 37.6901C0.118189 37.2996 0.118189 36.6664 0.508714 36.2759L1.92293 37.6901ZM1.92293 0.842976L19.6394 18.5595L18.2252 19.9737L0.508714 2.25719L1.92293 0.842976ZM0.508714 36.2759L18.2252 18.5595L19.6394 19.9737L1.92293 37.6901L0.508714 36.2759Z" fill="#141414"/>
    </svg>

}