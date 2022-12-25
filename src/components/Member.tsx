import React from "react";
import Link from "next/link";

interface Props {
  id: string;
  name: string;
  link: string;
  socialId?: string;
}

const Member: React.FC<Props> = ({ id, name, link, socialId }) => (
  <div>
        <div className='text-2xl xl:text-3xl'>{name}</div>
    <div className='text-xl'>
        <Link href={link} />
    </div>
  </div>
);

export default Member;
