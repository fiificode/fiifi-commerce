"use client";

import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { ShoppingBagIcon, ShoppingBasketIcon } from "lucide-react";

const NavbarAction = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button className="flex items-center rounded-full">
        <ShoppingBagIcon size={20} />
        <span className="ml-2 text-lg font-medium">0</span>
      </Button>
    </div>
  );
};

export default NavbarAction;
