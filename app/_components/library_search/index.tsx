"use client";

import { useRouter, useSearchParams } from "next/navigation";
import Script from "next/script";
import React, { Suspense } from "react";


function SearchComponent() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const q = e.currentTarget.elements.namedItem("q");
        if (q instanceof HTMLInputElement) {
            const params = new URLSearchParams();
            params.set("search", q.value.trim());
            router.push(`/library?${params.toString()}`);
        }
    };

    return (
        <>
            <Script src="/test.js"></Script>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="q"
                    defaultValue={searchParams.get("search") ?? undefined}
                    placeholder="キーワードを入力"
                />
            </form>
        </>
    );
}

export default function component() {
    return (
        <Suspense>
            <SearchComponent />
        </Suspense>
    );
}
