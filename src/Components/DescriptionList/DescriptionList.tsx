import React from 'react';

type DescriptionList_Props = {
    pairs: [string, string][],
    title?: string
}

export default function DescriptionList(props: DescriptionList_Props) {
    return <dl className="row">
        {props.title ? <h5><strong>{props.title}</strong></h5> : <></>}
        {
            props.pairs.map(
                ([title, description]) => <>
                    <dt className="col-sm-4">{title}</dt>
                    <dd className="col-sm-8">{description}</dd>
                </>
            )
        }
    </dl>
}