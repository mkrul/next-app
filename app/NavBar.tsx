import React from "react";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="flex bg-slate-200 p-5">
      <Link className="mr-5" href="/">
        NextJS
      </Link>
      <Link className="mr-5" href="/users">
        Users
      </Link>
    </div>
  );
};

export default NavBar;
