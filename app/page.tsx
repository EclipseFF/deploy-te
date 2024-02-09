import Header from "@/app/ui/header";
import {data} from "@/app/lib/data";
import Item from "@/app/ui/item";

export default function Home() {
    return (
    <main className="bg-bg_marketplace text-black">
      <Header />
        <div className="flex justify-center">
            <div className="w-[1080px] flex items-center justify-center bg-white rounded-b-2xl">
                <div className="grid grid-cols-4 gap-4 place-items-center p-4">
                    {data.map((item, index) => (
                        <Item key={index} name={item.name} logo={item.logo} price={item.price} chosen={item.chosen} />
                    ))}
                </div>
            </div>
        </div>
    </main>
  );
}
