import React from "react";
import { Logo, logos } from "../assets/Logo";
import Link from "next/link";

interface Props {
  id: string;
  name: string;
  socialId: string;
  link: string;
}

const Member: React.FC<Props> = ({ id, name, socialId, link }) => (
  <div>
    <Logo d={logos.user} className="w-10 h-10" />
        <div className='text-2xl xl:text-3xl'>{name}</div>
    <div className='text-xl'>
        <Link href={link}>
            <a target="_blank">{socialId}</a>
        </Link>
    </div>
  </div>
);

export default Member;
