import React from 'react';
import './sidebar.css';
import useSidebar from "../../Hooks/useSidebar";

export default function Sidebar() {

    const { toggleSidebar } = useSidebar()

    return <div id="SidebarColumn">
        <p id="SidebarToggle" onMouseDown={ () => toggleSidebar() } >Toggle</p>
    </div>
}