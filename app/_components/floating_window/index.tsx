import React from "react";

import FloatingWindowControl from "@/app/_client/window_control"


type WindowProps = {
    id:string
    label: string
    children: React.ReactNode
    windowStyle?: React.CSSProperties
    frameStyle?: React.CSSProperties
}

export default function component({id, label, children, windowStyle, frameStyle,}: WindowProps) {
    return (
        <div id={id} className="position-fixed" style={windowStyle}>

            <div id={`${id}_window_frame`} className="" style={frameStyle}>
                <label id={`${id}_window_label`} style={{paddingLeft: "10px"}}>{label}</label>
                <button name="floating_window">閉じる</button>
            </div>

            <div id={`${id}_window_content`} style={{flex:1}}>
                {children}
            </div>

            <FloatingWindowControl></FloatingWindowControl>
        </div>
    );
}