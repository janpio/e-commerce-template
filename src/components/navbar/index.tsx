"use client";

import React, { useState } from "react";
import PopOver from "./popOver";
import NavHeader from "./navHeader";
import categories from "./categories";
import ListBackDrop from "../globals/listBrackdrop";
import Search from "./search";
import Burguer from "./burguer";
import ShoppingCart from "./shoppingCart";

const NavBar = () => {
  const topNavHeight = 48 as number;
  const [categorySelected, setCategorySelected] = useState("none");

  return (
    <>
      <NavHeader topNavHeight={topNavHeight} />
      <nav aria-label="primary" className=" sticky top-0 bg-white w-full  ">
        <ul className="flex justify-between items-center navBar max-w-screen-2xl h-16 mx-auto md:pl-4">
          <div className=" md:hidden flex items-center h-full space-x-5 flex-grow basis-0">
            <li>
              <Burguer />
            </li>
          </div>
          <div className=" flex items-center">
            <li>
              <img
                className="w-40 md:w-48"
                alt="logo"
                src="/logo.png"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </li>
            {categories.map((item) => {
              return (
                <li
                  onMouseEnter={() => setCategorySelected(item.name)}
                  onMouseLeave={() => setCategorySelected("none")}
                  key={item.name}
                  className="relative hidden px-5 md:block"
                  id={`${item.name}`}
                >
                  <a>{item.name}</a>
                  <PopOver
                    categoryToOpen={item.name}
                    categorySelected={categorySelected}
                    setCategorySelected={setCategorySelected}
                  />
                </li>
              );
            })}
          </div>

          <div className="flex items-center h-full  md:space-x-10 justify-end flex-grow basis-0">
            <li>
              <Search />
            </li>
            <li className="hidden md:block">
              <img
                alt="Canada Flag"
                src="/assets/canada.svg"
                className="w-7 cursor-pointer"
              />
            </li>
            <li>
              <ShoppingCart />
            </li>
          </div>
        </ul>
        <ListBackDrop open={categorySelected} />
      </nav>
    </>
  );
};

export default NavBar;
