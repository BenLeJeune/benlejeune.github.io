import React, {useEffect, useState} from 'react';

type BouncingLetterProps = {
    text:string,
    floats:boolean
}

const PIXEL_BLACKLETTER = 'jacquard'
const BLACKLETTER = 'rocker'
const SERIF = 'baskerville'
const PIXEL = 'handjet'
const SCRIPT = 'playwrite'

export default function BouncingLetters(props: BouncingLetterProps) {

    const [fontRotating, setFontRotating] = useState(true)
    const [floating, setFloating] = useState(false)
    const [currentFont, setCurrentFont] = useState(SCRIPT)

    useEffect(() => {
        const get_next_font = () => {
            switch (currentFont) {
                case SCRIPT:
                    return PIXEL
                case PIXEL:
                    return SERIF
                case SERIF:
                    return BLACKLETTER
                case BLACKLETTER:
                    return PIXEL_BLACKLETTER
                case PIXEL_BLACKLETTER:
                default:
                    return SCRIPT
            }
        }
        let active_timer_id: NodeJS.Timeout

        function rotate_font() {
            if (fontRotating) {
                const next_font = get_next_font()
                setCurrentFont(next_font)
                active_timer_id = setTimeout(rotate_font, 500)
            }
        }

        active_timer_id = setTimeout(rotate_font, 750)

        const el = document.getElementById('ScrollableContainer')
        if (el && props.floats) el.addEventListener('scroll', scroll_listener)

        return () => {
            clearTimeout(active_timer_id)
            if (el && props.floats) el.removeEventListener('scroll', scroll_listener)

        }

    })

    useEffect(() => {
        if (props.floats) {
            props.text.split('').map(
                (letter, i) => {
                    const el = document.getElementById(`${letter}-${i}-char`)
                    if (el) {
                        let x_disp, y_disp = 0
                        console.log(floating)
                        if (floating) {
                            x_disp = (Math.random() - 0.5) * 100
                            y_disp = -150 - Math.random() * 50
                            el.style.transform = `translate(${x_disp}px, ${y_disp}px)`
                            el.style.clipPath = 'polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)'
                        } else {
                            el.style.transform = ''
                            el.style.clipPath = 'polygon(-50% -50%, 150% -50%, 150% 150%, -50% 150%)'
                        }
                    }
                }
            )
        }
    }, [floating])

    const scroll_listener = () => {
        const el = document.getElementById('ScrollableContainer')
        if (!el) return

        console.log('scrolled!')
        console.log(el.scrollTop)

        if (el.scrollTop > 0) {
            setFontRotating(false)
            setFloating(true)
        }
        else {
            setFontRotating(true)
            setFloating(false)
        }
    }

    return <>
        {
            props.text.split('').map(
                (letter, i) => <span key={i} id={`${letter}-${i}-char`} className={currentFont}>{letter}</span>
            )
        }
    </>
}