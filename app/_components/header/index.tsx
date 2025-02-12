import Image from "next/image";
import Link from "next/link";

import styles from "./page.module.css"

export default function component() {
    return (
        <header className={styles.header}>
            <Link href="/">
                <Image
                    className={styles.bgimg}
                    src="/img-mv.jpg"
                    width={4000}
                    height={1200}
                    priority
                    sizes="100vw"
                    alt=""
                />
            </Link>
        </header>
    )
}