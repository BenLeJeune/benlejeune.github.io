import React, {useEffect, useState} from 'react';

export type useInViewProps = {
    id:string
}

//Only works for vertical atm
export default function useInView( id:string ) {

    const [ visible, setVisible ] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onScroll = () => {
        const targetEl = document.getElementById(id);
        const padding = 50
        if ( targetEl ) {
            const rect = targetEl.getBoundingClientRect();
            // console.log(`Top: ${ rect.top }`);
            // console.log(`Bottom: ${ rect.bottom }`);
            // console.log(`Window Height: ${ window.innerHeight }`);
            // console.log("--------------------------");
            setVisible( ( targetEl.offsetTop + targetEl.clientHeight - window.scrollY ) > ( 0 + padding ) && ( targetEl.offsetTop - window.scrollY ) < ( window.innerHeight - padding ) );
            // console.log(`Bottom Check: ${rect.bottom > ( 0 + padding )}`)
            // console.log(`Top Check: ${rect.top < ( window.innerHeight - padding )}`)
            setTimeout(() => console.log( visible ? "visible" : "not visible" ), 0)
        }
    }

    return {
        visible,
        visibleClass: visible ? "visible" : "notVisible"
    }



}