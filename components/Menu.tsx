"use client";
import Link from "next/link";
import { Button } from "./ui/button";

const Menu = () => {
  return (
    <div className="pr-5">
      <ul className="flex space-x-10 ">
        <li>
          <Button variant={"default"}>
            <Link className="text-xl" href="/cart">
              Cart
            </Link>
          </Button>
        </li>
        <li>
          <Button variant={"default"}>
            <Link className="text-xl" href="/">
              Sign In
            </Link>
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
