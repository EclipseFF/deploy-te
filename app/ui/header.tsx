import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header className="flex bg-white shadow text-black h-32 p-4 justify-center items-center w-[1080px] mx-auto rounded-t-2xl mt-6">
            <Link href="/">
            <Image src="/next.svg" alt="Next.js Logo" width={60} height={60} className="mr-3"></Image>
            </Link>
            <select defaultValue="Региональный" className="select select-bordered w-[200px] max-w-xs mr-3">
                <option value="Региональный">Региональный</option>
                <option value="Межрегиональынй">Межрегиональный</option>
            </select>
            <Image src="/profile.svg" alt="Корзина" height={22} width={22} className="ml-3"></Image>
            <h1 className="mr-3">Профиль</h1>
            <Image src="/heart.svg" alt="Корзина" height={22} width={22} className="ml-3"></Image>
            <h1 className="mr-3">Закладки</h1>
            <Image src="/cart.svg" alt="Корзина" height={22} width={22} className="ml-3"></Image>
            <h1 className="mr-3">Корзина</h1>
        </header>
    );
}