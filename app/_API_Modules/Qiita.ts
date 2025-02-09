type QiitaSearchResponse = {
    body: string,
    id: string,
    title: string,
    url: string
}[]
/**
 * Qiitaで検索
 * @param text 
 */
export const qiitaSearch = async (text: string): Promise<QiitaSearchResponse> => {
    const res = await fetch(`https://qiita.com/api/v2/items?query=title:${text}+tag:${""}&per_page=10`);
    if (res.status == 200) {
        return await res.json();
    } else {
        return [];
    }
}
