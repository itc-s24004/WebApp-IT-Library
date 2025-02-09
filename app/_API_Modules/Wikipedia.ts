// export type WikiSearchResponse = {
//     query: {
//         pages: {
//             [key:string]: {
//                 title: string,
//                 fullurl: string
//             }
//         }
//     }
// }

export type WikiSearchResponse = {
    query: {
        search: {
            title: string,
            pageid: number
        }[]
    }
}
/**
 * Qiitaで検索
 * @param text 
 */
export const wikiSearch = async (text: string, limit: number): Promise<WikiSearchResponse> => {
    console.log("wiki search")
    const old = `https://ja.wikipedia.org/w/api.php?action=query&format=json&list=search&prop=info&inprop=url&srsearch=${text}`
    const newu = "https://en.wikipedia.org/w/api.php?action=query&format=json&prop=info&generator=allpages&inprop=url&gapfrom=Apple&gaplimit=5"
    try {
        const res = await fetch(`https://ja.wikipedia.org/w/api.php?action=query&format=json&list=search&prop=info&inprop=url&srsearch=${text}&srlimit=${limit}`);
        if (res.status == 200) {
            return await res.json();
        } else {
            // return {
            //     query: {
            //         pages: {}
            //     }
            // };
            return {
                query: {
                    search: []
                }
            }
        }
    } catch {
        // return {
        //     query: {
        //         pages: {}
        //     }
        // };
        return {
            query: {
                search: []
            }
        }
    }
}
