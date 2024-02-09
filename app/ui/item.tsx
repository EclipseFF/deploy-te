import Image from "next/image";
import Link from "next/link";

type Props = {
    name: string,
    logo: string
    price: number,
    chosen: boolean
}
export default function Item(props: Props) {
    return (
        <div className="w-[210px] h-[260px] rounded-2xl shadow-lg bg-white border-2 hover:scale-105 transition duration-300">
            <Image src="/icons/like.svg" alt="add to cart" width={30} height={30} />
            <h1 className="text-center text-l pt-2">{props.name}</h1>
            <div className="h-[120px]">
                <Link href="/item">
                    <Image className="mx-auto"  src={props.logo} alt={props.name} width={101} height={132} />
                </Link>
            </div>
            <div className="flex">
                <div className=" items-start p-2">
                    <h1 className="text-left opacity-20">Цена:</h1>
                    <h1 className=" text-3xl">{props.price +" тг"}</h1>
                </div>

                <div className="flex justify-end pl-10">

                    {props.chosen ? <Image src="/icons/chosen.svg" alt="add to cart" width={32} height={32} /> :
                        <Image src="/icons/add.svg" alt="add to cart" width={32} height={32} />}

                </div>

            </div>
        </div>
    )
}