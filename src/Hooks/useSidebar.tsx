import React, {useEffect, useState} from 'react';

export default function useSidebar() {

    const [ sidebarOpen, setSidebarOpen ] = useState<boolean>(false);

    const toggleSidebar = () => setSidebarOpen( prev => !prev )

    useEffect(() => {
        const ids = [
            "SidebarColumn",
            "ViewportMargins",
            "ViewsWrapper"
        ] //The ids of the elements that need to be transformed
        for ( let index in ids ) {
            const id = ids[index];
            try {
                console.log("Reached this bit, trying for " + id)
                const el = document.getElementById(id);
                if (el) el.style.transform = `translateX(${ sidebarOpen ? '2' : '' }0vw)`
                console.log(el)
            }
            catch (e) { console.log(e) }
        }
    }, [ sidebarOpen ])

    return {
        sidebarOpen,
        setSidebarOpen,
        toggleSidebar
    }

}