import React from "react";
import Link from "next/link";
import { Logo, logos } from "../assets/Logo";

const Footer: React.FC = () => (
  <footer className="flex gap-8 items-center justify-center bg-black text-white p-20">
    <Logo d={logos.bolt} className="text-pink-500 w-6 h-6" />
    <Link href="/">Terms</Link>
    <Link href="/">Privacy Policy</Link>
  </footer>
);

export default Footer;
