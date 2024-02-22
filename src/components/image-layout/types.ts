import { StaticImageData } from "next/image";

export interface Props {
  imgUrl: StaticImageData;
  imgAlt: string;
  title: string;
}