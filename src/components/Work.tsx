import { type FC, type ReactNode } from "react";
import Link from "next/link";

type Props = {
  children: ReactNode
}

export const WorkContainer: FC<Props> = ({ children }) => (
  <div className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-screen">
    {children}
  </div>
);

export const WorkBackground: FC = () => (
  <div className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-screen top-0 sticky">
    <div className="bg-black h-[30vh] lg:h-auto"></div>
    <div className="bg-white h-[70vh] lg:min-h-screen"></div>
  </div>
);

export const WorkLeft: FC<{ progress: number, children: ReactNode }> = ({
  children,
  progress,
}) => {
  let translateY = Math.max(0, 50 - progress * 3 * 50);
  if (progress > 0.85) translateY - Math.max(-50, -(progress - 0.85) * 2 * 50);
  return (
    <div
      className="flex flex-col items-center justify-center text-3xl lg:text-3xl h-[30vh] lg:h-auto"
      style={{ transform: `translateY(${translateY}px)` }}
    >
      <div className="leading-10">{children}</div>
    </div>
  );
};

export const WorkRight: FC<{ progress: number, children: ReactNode }> = ({
  children,
  progress,
}) => {
  let translateY = Math.max(-50, -(progress - 0.5) * 50);
  return (
    <div
      className="flex flex-1 lg:items-center justify-center h-screen"
      style={{ transform: `translateY(${translateY}px)` }}
    >
      <div className="w-full max-w-md pt-10 lg:pt-10 px-10 md:px-0">
        {children}
      </div>
    </div>
  );
};

type LinkProps = {
  to: string;
  children?: ReactNode
}

export const WorkLink: FC<LinkProps> = ({ children, to = "_blank" }) => (
  <Link href={to}>
    {children}
  </Link>
);
