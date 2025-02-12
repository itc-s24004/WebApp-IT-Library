
import { NextResponse } from 'next/server'
import { wikiSearch } from '../../_API_Modules/Wikipedia'


 
export async function GET(request: Request) {
    const url = new URL(request.url);
    const params = url.searchParams;
    console.log(params.get("q"))
    const json = await wikiSearch(params.get("q") ?? "", 5);
    // console.log(JSON.stringify(json, null, "    "));
    return NextResponse.json(json, { status: 200 });
}