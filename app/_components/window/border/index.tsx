import React from "react"

type BorderProp = {
    id: string
    label: string

    customStyle?: React.CSSProperties
    customLabelStyle?: React.CSSProperties

    children?: React.ReactNode
}


export default function component({id, label, customStyle, customLabelStyle, children}: BorderProp) {

    const style: React.CSSProperties = customStyle || {}
    style.display = "flex";
    style.paddingRight = "10px";
    style.alignItems = "center";

    const labelStyle: React.CSSProperties = customLabelStyle || {}
    labelStyle.paddingLeft = "10px";
    labelStyle.userSelect = "none";
    labelStyle.flex = "1"

    return (
        <div style={style} id={`${id}_border`}>
            <label id={`${id}_label`} style={labelStyle}>{label}</label>
            {children}
        </div>
    )
}