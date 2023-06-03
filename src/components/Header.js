import React from "react";
import Image from "next/image";
import Navbar from "./Navbar";
import Link from "next/link";

export default function Header() {
  return (
    <div className="header">
      <div className="centered-image">
        <Link href="/">
          <Image
            className="header-img"
            src="/Logo.png"
            alt="logo"
            width={400}
            height={100}
          />
        </Link>
        <p className="header-undertitle">
          Reiseblog & Outdoor-Abenteuer aus NRW
        </p>
      </div>
      <Navbar />
    </div>
  );
}
