import quickNavData from "../../assets/data/quickNavData.json";
import FoldingBox from "../wrapper/FoldingBox";
import Card from "../items/Card";
import { twMerge } from "tailwind-merge";
import { tw } from "../../globals";

export default function QuickNav({ className }) {
  const css = {
    nav: tw`absolute bottom-14 z-20 grid w-8/10 grid-cols-4 items-end gap-10 max-xl:grid-cols-2 max-md:grid-cols-1 max-md:gap-3`
  };

  return (
    <nav className={twMerge(css.nav, className)}>
      {quickNavData.map((el, idx) => (
        <FoldingBox title={el.title} key={idx}>
          <Card imgSrc={"/" + el.pic} url={"/" + el.title.toLowerCase()} content={el.content} className="[&>figure]:h-30" btn />
        </FoldingBox>
      ))}
    </nav>
  );
}
