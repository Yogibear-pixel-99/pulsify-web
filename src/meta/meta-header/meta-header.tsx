'use client'

import { baseRefHelper } from "@/utils/baseRefHelper"

export function MetaHeader ({title, descr}: {title:string, descr:string}) {
return (
      <>
        <title>{title}</title>
        <meta name="description" content={descr} />
        <link rel="icon" href={baseRefHelper("/favicon.png")}></link>
    </>
);
}