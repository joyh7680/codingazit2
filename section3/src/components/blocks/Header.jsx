import { tw } from "../../globals";
import Gnb from "../items/Gnb";
import Logo from "../items/Logo";
import Sns from "../items/Sns";

export default function Header() {
  const css = {
    header: tw`fixed top-0 left-0 z-50 flex w-full items-center justify-between px-[10vw] py-5 shadow-sm shadow-dark/10 backdrop-blur-md`,
    nav: tw`flex items-center gap-10`,
    div: tw`flex gap-30 max-xl:hidden`
  };

  return (
    <header className={css.header}>
      <Logo />

      <nav className={css.nav}>
        <div className={css.div}>
          <Gnb />
          <Sns />
        </div>
      </nav>
    </header>
  );
}
