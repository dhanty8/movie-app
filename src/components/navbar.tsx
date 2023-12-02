'use client';

import React, { useState } from 'react';

import Link from 'next/link';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="bg-black py-4 sticky top-0 z-10">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className='text-2xl cursor-pointer shadow-md'>DMovie</Link>
          <ul className="hidden md:flex ml-8 space-x-6 text-white">
            <Link href="/" className="cursor-pointer hover:text-gray-300">Home</Link>
            <Link href="/favorite" className="cursor-pointer hover:text-gray-300">Favorite</Link>
            <Link href="/movies?page=1" className="cursor-pointer hover:text-gray-300">Movies</Link>
            <Link href="/" className="cursor-pointer hover:text-gray-300">Login</Link>
          </ul>
        </div>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-gray-900 rounded-full px-4 py-2 focus:outline-none hidden md:block"
          />
          {/* Toggle button for mobile */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 fill-current text-white cursor-pointer ml-4 md:hidden"
            viewBox="0 0 20 20"
            onClick={toggleMenu}
          >
            {/* Replace with your icon for mobile navigation */}
            <path
              fillRule="evenodd"
              d="M3 3.5A.5.5 0 0 1 3.5 3h13a.5.5 0 0 1 0 1H3.5a.5.5 0 0 1-.5-.5zm0 6A.5.5 0 0 1 3.5 9h13a.5.5 0 0 1 0 1H3.5a.5.5 0 0 1-.5-.5zm0 6A.5.5 0 0 1 3.5 15h13a.5.5 0 0 1 0 1H3.5a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </div>
      </div>
      {/* Responsive Navigation for mobile */}
      <div
        className={`md:hidden bg-gray-800 px-4 py-2 text-white text-center absolute w-full ${
          showMenu ? 'block shadow-md' : 'hidden'
        } z-10`}
      >
        <ul className="flex flex-col space-y-2">
          <li className="cursor-pointer hover:text-gray-300">Home</li>
          <li className="cursor-pointer hover:text-gray-300">TV Shows</li>
          <li className="cursor-pointer hover:text-gray-300">Movies</li>
          <li className="cursor-pointer hover:text-gray-300">My List</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

