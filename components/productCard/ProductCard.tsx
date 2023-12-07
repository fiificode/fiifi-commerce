"use client";

import { Product } from "@/types";
import Image from "next/image";
import { Button } from "../ui/button";
import { ExpandIcon, ShoppingCart } from "lucide-react";
import Currency from "../currency/Currency";
import { useRouter } from "next/navigation";

interface ProductCardProps {
  data: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/product/${data?.id}`);
  };
  return (
    <div
      onClick={handleClick}
      className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4"
    >
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          src={data?.images?.[0].url}
          alt="image"
          priority
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="aspect-square object-cover rounded-md"
        />
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full p-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <Button
              className="bg-white rounded-full"
              size={"icon"}
              onClick={() => {}}
            >
              <ExpandIcon size={20} className="text-gray-600" />
            </Button>
            <Button
              className="bg-white rounded-full"
              size={"icon"}
              onClick={() => {}}
            >
              <ShoppingCart size={20} className="text-gray-600" />
            </Button>
          </div>
        </div>
      </div>
      {/**Description */}
      <div>
        <p className="font-semibold text-lg">{data?.name}</p>
        <p className="tex-sm text-gray-500">{data?.category?.name}</p>
      </div>
      {/**Price */}
      <div className="flex items-center justify-between">
        <Currency value={data?.price} />
      </div>
    </div>
  );
};

export default ProductCard;
