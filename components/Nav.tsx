import React, { FC } from "react";
import Link from "next/link";

const Nav = () => (
  <nav className="flex items-center justify-between">
    <Link href="/">
      <h1 className="font-bold text-2xl">Walking in LA</h1>
    </Link>

<div>
    <Link href="/">
      <a className="ml-4">Home</a>
    </Link>

    <Link href="/about">
      <a className="ml-4">About</a>
    </Link>
    </div>
  </nav>
);

export default Nav;
