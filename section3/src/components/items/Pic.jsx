import { twMerge } from "tailwind-merge";
import { tw } from "../../globals";
import { Link } from "react-router-dom";

export default function Pic({ src, url = "#", alt = "alt text", shadow = true, className = "", h_auto = true, onClick = null }) {
  const css = {
    figure: tw`relative min-h-30 cursor-pointer`,
    link: tw`absolute top-0 left-0 block size-full`,
    img: tw`absolute top-0 left-0 z-10 inline-block size-full object-cover`,
    img_shadow: tw`z-0 translate-y-2 blur-md dark:opacity-20`
  };

  typeof src !== "string" && console.warn("src(string) : 이미지 src는 필수 입력값입니다.");

  return (
    <figure className={twMerge(css.figure, h_auto ? "w-full" : "size-full", className)} onClick={onClick}>
      {shadow && <img className={twMerge(css.img, css.img_shadow, h_auto && "relative! h-auto!")} src={src} alt={alt} />}
      <Link to={url} className={css.link}>
        <img className={twMerge(css.img, h_auto && "h-auto!")} src={src} alt={alt} />
      </Link>
    </figure>
  );
}
