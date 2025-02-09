import React from "react"

type genOption = {
    id?: string
    src?: string
    style?: React.CSSProperties
    customClass?: string
}
export default function component({id, src, style, customClass}: genOption) {
    return (
        <iframe src={src} id={id} className={customClass} style={style}></iframe>
    )
}