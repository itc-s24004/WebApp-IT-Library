
import { getDrillData } from "../_API_Modules/MicroCMS";
import Search from "@/app/_components/search";

import Tile from "./_eles/tile"

type searchQuery = {
    searchParams: {
        tag?: string,     //タグ => microcms
        category?: string,//カテゴリー => qiita
        q?: string        //検索文字列 => wiki qiita
    };
}
export default async function Page({searchParams}: searchQuery) {
    const data = await getDrillData({q:searchParams.q});
    // console.log(data);
    return(
        <>
            <h1 className="text-center">drill search</h1>
            <Search path="/drill" queryName="q"></Search>
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