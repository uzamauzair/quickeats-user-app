import { Card, CardContent } from "./ui/card";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";

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

const ProductItem = ({ item }: { item: ItemType }) => {
  return (
    <div>
      <Card className="bg-gray-800 text-white">
        <CardContent>
          <figure className="pb-3 w-300 h-300 overflow-hidden">
            {" "}
            {/* Added w-300 and h-300 for fixed size */}
            <Link href={``}>
              <Image
                className="object-cover"
                src={item.images[0]}
                alt={item.name}
                width={300}
                height={300}
              />
            </Link>
          </figure>
          <div className="flex justify-between">
            <div>
              <h2>{item.name}</h2>
              <p>Price : {item.variants[1].price}</p>
            </div>
            <div>
              <Button>Add to Cart</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductItem;
