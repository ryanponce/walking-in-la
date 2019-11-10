import React from "react";
import Link from 'next/link'

const Nav = () => (
  <nav className="flex items-center justify-between">
    <h1 className="font-bold text-2xl">Walking in LA</h1>

    <Link href="/about">
      <a>About</a>
    </Link>
  </nav>
);

export default Nav;
