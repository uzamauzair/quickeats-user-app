import Link from "next/link";
import React from "react";
import Menu from "./Menu";

const Header = () => {
  return (
    <div>
      <nav>
        <div className="text-white p-4 bg-gray-800 flex justify-between">
          <Link href="/" className="text-2xl">
            Quick Eats
          </Link>
          <Menu />
        </div>
      </nav>
    </div>
  );
};

export default Header;
