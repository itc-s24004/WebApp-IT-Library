

import { getDrillData } from "@/app/_API_Modules/MicroCMS";
import Search from "../_eles/search";
import Tile from "../_eles/tile"


type searchQuery = {
    searchParams: {
        tag?: string,     //タグ => microcms
        category?: string,//カテゴリー => qiita
        q?: string        //検索文字列 => wiki qiita
    };
}


export default async function page({searchParams}: searchQuery) {
    const data = await getDrillData({q:searchParams.q});
    console.log(data);
    return(
        <>
            <h1>search123</h1>
            <Search></Search>
            {data.contents.map(d => (
                <>
                    <Tile
                        body={d.body}
                        options={d.options}
                        createdAt={d.createdAt}
                        category={d.category}
                    />
                </>
            ))}
        </>
    )
}