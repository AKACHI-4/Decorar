import React, { useState } from "react";

function Header() {
  return (
    <nav className="w-screen py-2 left-0 border-b-2 border-gray-300 border-dashed">
      <div className="flex items-center justify-between p-2">
        {/* Left */}
        <div className="ml-10 self-center text-2xl whitespace-nowrap font-bold">
          <a href="/">Decorar</a>
        </div>
      </div>
    </nav>
  );
}

export default Header;
