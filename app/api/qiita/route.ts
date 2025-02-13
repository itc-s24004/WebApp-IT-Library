
import { NextResponse } from 'next/server'
import { qiitaSearch } from '@/app/_API_Modules/Qiita';


 
export async function GET(request: Request) {
    const url = new URL(request.url);
    const params = url.searchParams;
    const json = await qiitaSearch(params.get("q") ?? "");
    // console.log(JSON.stringify(json, null, "    "));
    return NextResponse.json(json, { status: 200 });
}