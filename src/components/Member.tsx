import { type FC } from "react";
import Link from "next/link";

interface Props {
  id: string;
  name: string;
  link: string;
  socialId?: string;
}

const Member: FC<Props> = ({ name, link }) => (
  <div>
        <div className='text-2xl xl:text-3xl'>{name}</div>
    <div className='text-xl'>
        <Link href={link} />
    </div>
  </div>
);

export default Member;
