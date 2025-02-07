
import Qs from "../_components/qs";


export default function Page(q: {searchParams: {search?:string}}) {
    console.log(q)
    console.log(q.searchParams.search)
    return(
        <>
            <Qs searchText={q.searchParams.search ? q.searchParams.search : ""}></Qs>
        </>
    );
}