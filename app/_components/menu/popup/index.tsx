import { Button } from "react-bootstrap";

export default function component() {
    return(
        <Button variant="primary" id="popup_search" className="position-fixed" style={{opacity: 0, transition: "opacity 0.5s", pointerEvents: "none"}}>
        🔍  選択した範囲を検索
            <p id="popup_search_text"></p>
        </Button>
    )
}