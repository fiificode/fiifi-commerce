"use client";

import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { ShoppingBagIcon, ShoppingBasketIcon } from "lucide-react";
import useCart from "@/hooks/use-cart";
import { useRouter } from "next/navigation";

const NavbarAction = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const router = useRouter();

  const cart = useCart();

  if (!isMounted) {
    return null;
  }

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button
        onClick={() => router.push("/cart")}
        className="flex items-center rounded-full"
      >
        <ShoppingBagIcon size={20} />
        <span className="ml-2 text-lg font-medium">{cart.items.length}</span>
      </Button>
    </div>
  );
};

export default NavbarAction;
