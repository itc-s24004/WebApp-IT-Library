import { qiitaSearch } from "@/app/_API_Modules/Qiita";
import { wikiSearch } from "@/app/_API_Modules/Wikipedia";
import Library_search from "../library_search";
import Link from "next/link";


export default async function module({searchText}: {searchText: string}) {

    const res = await qiitaSearch(searchText);
    const res2 = await wikiSearch(searchText, 3);
    // console.log(JSON.stringify(res2, null, "    "))
    const pages = res2.query.pages;
    return(
        <>
            <Library_search />
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
                        <Link href={wiki.fullurl}>{wiki.title}</Link>
                        <a href={wiki.fullurl}>{wiki.title}</a>
                        <br />
                    </>
                ))
            }
        </>
    )
}