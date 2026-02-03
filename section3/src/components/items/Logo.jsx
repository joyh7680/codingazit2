import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { tw } from "../../globals";

export default function Logo({ className = "" }) {
  const css = {
    h1: tw`font-orbitron text-xl font-semibold drop-shadow-md`
  };

  return (
    <h1 className={twMerge(css.h1, className)}>
      <Link to="/">CODING AZIT</Link>
    </h1>
  );
}
