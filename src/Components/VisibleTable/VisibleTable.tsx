import React, {useEffect, useState} from 'react';

type VisibleTable_Props = {
    records: [string, number][]
}

export default function VisibleTable(props: VisibleTable_Props) {

    const [visible, setVisible] = useState(false)
    const [timeElapsed, setTimeElapsed] = useState(0.5)

    useEffect(() => {
        const scroll_el = document.getElementById('ScrollableContainer')
        if (!scroll_el) return

        // @ts-ignore
        scroll_el.addEventListener('scroll', check_visibility)
        return () => {
            scroll_el.removeEventListener('scroll', check_visibility)
        }

    }, [])

    useEffect(() => {
        if (!visible) return

        const interval = setInterval(() => setTimeElapsed(t => Math.min(t + 0.01, 1.0)), 10)

        return () => clearInterval(interval)
    }, [visible])

    const check_visibility = () => {
        console.log('checking')
        const top_el = document.getElementById(props.records[0][0] + '-record')
        if (!top_el) return
        const {top, bottom} = top_el.getBoundingClientRect()
        if (top < window.innerHeight - 100) {
            setVisible(true)
        }

        if (top > window.innerHeight + 100) {
            setVisible(false)
            setTimeElapsed(0)
        }
    }


    return <>
        {props.records.map(
            (item, i) =>
                <dl key={i} id={item[0] + '-record'} className={`anim_in_table row ${visible ? 'shown' : ''}`}
                    style={{
                        transitionDelay: `${0.1 * i}s`
                    }}

                >
                    <dt className="col-10">{item[0]}</dt>
                    <dd className="col-2">{(item[1] * Math.sin(timeElapsed * Math.PI / 2)).toFixed(2)}</dd>
                </dl>
        )}
    </>
}