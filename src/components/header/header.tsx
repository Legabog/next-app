import { FC } from "react";
import Link from "next/link";

import { Pages } from "@/constants";

const { main, performance, reliability, scale } = Pages;
const HEADER_SKELETON = [
  { href: main, text: "Home" },
  { href: performance, text: "Performance" },
  { href: reliability, text: "Reliability" },
  { href: scale, text: "Scale" },
];

export const Header: FC = () => {
  return (
    <div className="w-full absolute text-white z-10">
      <nav className="relative flex flex-wrap items-center justify-between max-auto p-8">
        <Link className="font-bond text-3xl" href={HEADER_SKELETON[0].href}>
          {HEADER_SKELETON[0].text}
        </Link>

        <div className="space-x-4 text-xl">
          {HEADER_SKELETON.slice(1).map(({ href, text }) => (
            <Link key={href} href={href}>
              {text}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
};
