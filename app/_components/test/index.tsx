import { Button } from "react-bootstrap";

export default function component() {
    return (
        <>
            <button type="button" className="btn btn-info" data-toggle="collapse" data-target="#demo">click me</button>
            <div id="demo" className="collapse">hello</div>

        </>
    )
}