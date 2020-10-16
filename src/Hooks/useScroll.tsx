import React, {useEffect} from 'react';

export default function useScroll( scrollFunc:(scrollY:number)=>void ) {

    useEffect(() => {
        window.addEventListener("scroll", scrollFunction);
        return () => window.removeEventListener("scroll", scrollFunction);
    }, [])

    const scrollFunction = () => {
        const scroll = window.scrollY;
        scrollFunc( scroll );
    }

}