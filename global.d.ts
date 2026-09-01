declare module "*.css";

declare module "*.ico" {
  import { StaticImageData } from "next/image";
  const content: StaticImageData;
  export default content;
}
