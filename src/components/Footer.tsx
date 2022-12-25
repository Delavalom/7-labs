import React from "react";
import Link from "next/link";

const Footer: React.FC = () => (
  <footer className="flex gap-8 items-center justify-center bg-black text-white p-20">
    <Link href="/">Terms</Link>
    <Link href="/">Privacy Policy</Link>
  </footer>
);

export default Footer;
