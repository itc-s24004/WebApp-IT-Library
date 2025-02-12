import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function page() {
    return (
        <div>
            <h1>ホーム</h1>
            <Link href="/library">library</Link>
            <br />
            <Link href="/drill">drill</Link>
        </div>


        // <div className="container">
        //     <div className="row justify-content-center">
        //         <div className="col-md-10 col-md-offset-1">col-md-10 col-md-offset-1</div>
        //     </div>
        //     <div className="row justify-content-center">
        //         <div className="col-md-8 col-md-offset-2">col-md-8 col-md-offset-2</div>
        //     </div>
        //     <div className="row justify-content-center">
        //         <div className="col-md-6 col-md-offset-3">col-md-6 col-md-offset-3</div>
        //     </div>
        //     <div className="row justify-content-center">
        //         <div className="col-md-4 col-md-offset-4">col-md-4 col-md-offset-4</div>
        //     </div>
        //     <div className="row justify-content-center">
        //         <div className="col-md-2 col-md-offset-5">col-md-2 col-md-offset-5</div>
        //     </div>
        //     <iframe src="https://ja.wikipedia.org/" width={500} height={300}></iframe>
        // </div>
    );
}
