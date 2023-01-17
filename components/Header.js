import React, { useState } from "react";
import Link from "next/link";
import { HiMenuAlt3 } from "react-icons/hi";
import { menu } from "../db";

export default function Header() {
  const [offEl, setoffEl] = useState("offEl");
  return (
    <header>
      <nav id="nav">
        <ul id="menus">
          <li className="logo">
            <Link href="/">HEALTHBRIM.</Link>
          </li>
          <li
            className="menu-icon"
            onClick={() => {
              offEl ? setoffEl("") : setoffEl("offEl");
            }}
          >
            <HiMenuAlt3 className="fa-solid fa-bars" />
          </li>
          <ul className={`secondary ${offEl}`}>
            {menu.map((menuItem, i) => (
              <li key={i}>
                <Link
                  href={menuItem.path}
                  onClick={() => {
                    window.screen.width <= 800
                      ? setoffEl("offEl")
                      : setoffEl(" ");
                  }}
                >
                  {menuItem.name}
                </Link>
              </li>
            ))}
          </ul>
        </ul>
      </nav>
    </header>
  );
}
