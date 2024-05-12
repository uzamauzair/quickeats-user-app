import ProductItem from "@/components/ProductItem";
import axios from "axios";

type ItemType = {
  _id: string;
  name: string;
  description: string;
  category: string;
  categoryId: string; // Add categoryId field
  images: string[];
  variants: {
    size: string;
    price: number;
    quantity: number;
  }[];
};

export default async function Home() {
  let items: ItemType[] = [];
  const data = await axios.get<ItemType[]>("http://localhost:3333/items");

  items = data.data;
  return (
    <>
      <div className="bg-black p-10">
        <h2 className="text-2xl py-4 pl-5 text-white">Latest Products</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {items.map((item) => (
            <ProductItem key={item._id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}
