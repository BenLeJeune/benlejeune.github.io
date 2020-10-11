import React, {useEffect, useState} from 'react';

export default function useWindowSize() {

    const [ height, setHeight ] = useState(0);
    const [ width, setWidth ] = useState(0);

    useEffect(() => {
        resizeListener();
        window.addEventListener("resize", resizeListener)
        return () => window.removeEventListener("resize", resizeListener);
    })

    const resizeListener = () => {
        const { innerHeight, innerWidth } = window;
        setHeight(innerHeight);
        setWidth(innerWidth);
    }

    return {
        height,
        width
    }

}