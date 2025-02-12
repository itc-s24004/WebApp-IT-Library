
import Link from "next/link";

import Search from "@/app/_components/search"
import { qiitaSearch } from "../_API_Modules/Qiita";
import { wikiSearch } from "../_API_Modules/Wikipedia";


export default async function Page(q: {searchParams: {search?:string}}) {
    
    const res = await qiitaSearch(q.searchParams.search||"next.js");
    const res2 = await wikiSearch(q.searchParams.search||"next.js", 3);
    const pages = res2.query.search;

    return(
        <>
            <Search path="/library" queryName="search"></Search>
            <h1>Qitta</h1>
            {res.map((e) => (
                <>
                    <a href={e.url}>{e.title}</a>
                    <br />
                </>
            ))}
            <h1>Wikipedia</h1>
            {
                Object.values(pages).map(wiki => (
                    <>
                        <Link href={`https://ja.wikipedia.org/w/index.php?curid=${wiki.pageid}`}>{wiki.title}</Link>
                        <br />
                    </>
                ))
            }
        </>
    );
}