"use client";

import { useRouter, useSearchParams } from "next/navigation";
import Script from "next/script";
import React, { Suspense } from "react";


function SearchComponent({path, queryName}: {path: string, queryName: string}) {
    const router = useRouter();
    const searchParams = useSearchParams();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const q = e.currentTarget.elements.namedItem("q");
        if (q instanceof HTMLInputElement) {
            const params = new URLSearchParams();
            params.set(queryName, q.value.trim());
            router.push(`${path}?${params.toString()}`);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="q"
                    defaultValue={searchParams.get(queryName) ?? undefined}
                    placeholder="キーワードを入力"
                />
            </form>
        </>
    );
}

export default function component({path, queryName}: {path: string, queryName: string}) {
    return (
        <Suspense>
            <SearchComponent path={path} queryName={queryName}/>
        </Suspense>
    );
}
