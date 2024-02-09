import Header from "@/app/ui/header";
import Item from "@/app/ui/item";
import {data} from "@/app/lib/data";
import Image from "next/image";

export default function Page() {
    const example = data[0]
    return (
        <div className="bg-bg_marketplace text-black">
            <Header/>
            <div className="grid justify-center items-center place-items-center content-center">
                <div className="w-[1080px] flex items-center justify-center bg-white">
                    <div className="flex columns-2 gap-4 place-items-center p-4 w-[1080px]">
                        <h1 className="text-center text-4xl">{example.name}</h1>
                        <Image src="/icons/bricks.svg" alt={example.name} width={500} height={500}/>
                    </div>
                    <div className="grid grid-cols-2 gap-4 place-items-center p-4">
                        <h1 className="text-center text-3xl">{example.price + " тг"}</h1>
                    </div>

                </div>
                <div className="w-[1080px] flex items-center justify-center bg-white rounded-b-2xl">
                <h1 className="text-center text-3xl">Описание</h1>
                <p className="ml-4">{example.info}</p>
                </div>
            </div>
        </div>
    )
}