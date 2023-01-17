import React from "react";
import { menu } from "../db";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <ul className="footer-menu">
        {menu.map((menuItem, i) => (
          <li key={i}>
            <Link href={menuItem.path}>{menuItem.name}</Link>
          </li>
        ))}
      </ul>
      <p>All rights reserved © Copyright 2023, HealthBrim. </p>
    </footer>
  );
}
