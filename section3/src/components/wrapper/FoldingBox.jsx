import { FaPlus } from "react-icons/fa";
import { twMerge } from "tailwind-merge";
import { tw } from "../../globals";

export default function FoldingBox({ className, title, children, tag = "article" }) {
  const css = {
    article: tw`group w-full cursor-pointer rounded border border-t-white/30 border-r-black/10 border-b-black/10 border-l-white/30 bg-light/20 backdrop-blur`,
    h1: tw`flex w-full items-center justify-between px-8 py-3 font-raleway text-sm font-semibold`,
    icon: tw`inline-block rotate-0 text-dark/40 transition-all delay-200 duration-400`,
    icon_hover: tw`group-hover:scale-130 group-hover:rotate-135 group-hover:text-point/60`,
    div: tw`h-0 w-full overflow-hidden px-8 py-0 transition-all *:opacity-0`,
    div_hover: tw`group-hover:h-auto group-hover:py-3 group-hover:*:opacity-100`
  };
  const Tag = tag;

  return (
    <Tag className={twMerge(css.article, className)}>
      <h1 className={css.h1}>
        {title} <FaPlus className={twMerge(css.icon, css.icon_hover)} />
      </h1>
      <div className={twMerge(css.div, css.div_hover)}>{children}</div>
    </Tag>
  );
}
