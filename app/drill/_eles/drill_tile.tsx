import { DrillData } from "@/app/_API_Modules/MicroCMS"
import { MicroCMSImage } from "microcms-js-sdk"
import Image from "next/image"

type Data = {
    createdAt: string
} & DrillData

export default function component({body, options, category, createdAt, image}: Data) {
    const img = image ? <Image width={image.height} height={image.height} src={image.url} alt=""/> : <></>
    return (
        <div>
            <>
                <p>{body}</p>
                {img}
                <ul>
                    {options.split("\n").map(option => (
                        <>
                            <li>{option}</li>
                        </>
                    ))}
                </ul>
                <p>{category}</p>
                <p>{createdAt}</p>
            </>
        </div>
    )
}