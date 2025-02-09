import Border from "@/app/_components/window/border"

import FloatingWindowControl from "@/app/_client/floating_window_control"
import Image from "next/image"

import CloseButton from "./border/button/close"

export enum WindowTemplate {
    /**テンプレートを使用しない */
    none,
    /**画面上に固定されたウィンドウ */
    floating,
}

export enum WindowTemplateColor {
    default,
    monochrome
}

type WindowProps = {
    template: WindowTemplate
    templateColor: WindowTemplateColor


    id:string
    windowClass?: string
    label?: string
    children?: React.ReactNode
    customWindowStyle?: React.CSSProperties
    frameStyle?: React.CSSProperties
}

export default function component({template, id, windowClass, label, children, customWindowStyle}: WindowProps) {//position-fixed
    const windowStyle = customWindowStyle||{}
    windowStyle.display = "flex";
    windowStyle.flexDirection = "column";
    windowStyle.minWidth = "500px";
    windowStyle.minHeight = "300px";
    windowStyle.border = "3px solid black";
    windowStyle.borderRadius = "20px";
    windowStyle.overflow = "hidden"

    windowStyle.backgroundColor = "rgb(85, 85, 85)";
    windowStyle.color = "white";


    if (template == WindowTemplate.none) {

    } else if (template == WindowTemplate.floating) {
        return(
            <div id={id} className="position-fixed" style={windowStyle}>

                <Border id={id} label={label||"ウィンドウテキスト"} customStyle={{backgroundColor: "gray", height:"30px"}}>
                    <input type="hidden" name="floating_window"/>
                    <CloseButton></CloseButton>
                </Border>

                <div id={`${id}_window_content`} style={{flex:1, display:"flex"}}>
                    {children}
                </div>

                <FloatingWindowControl></FloatingWindowControl>
            </div>
        );
    }


    // return (
    //     <div id={id} className={windowClass} style={windowStyle}>

    //         <div id={`${id}_window_frame`} className="" style={frameStyle}>
    //             <label id={`${id}_window_label`} style={{paddingLeft: "10px"}}>{label}</label>
    //             <button name="floating_window">閉じる</button>
    //         </div>

    //         <div id={`${id}_window_content`} style={{flex:1}}>
    //             {children}
    //         </div>

    //         <FloatingWindowControl></FloatingWindowControl>
    //     </div>
    // )
}