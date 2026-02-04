import Logo from './items/Logo';
import Gnb from './items/Gnb';
import Sns from './items/Sns';
import { tw } from '../globals';

// 손이 많이 가는 단점이 있지만 유지보수, 재사용에 있어 리액트의 장점이 있다.

export default function Header() {
  const css = {
    // px-[10vw] 좌우에 화면 전체 너비의 10% 여백을 주겠다
    header: tw`fixed top-0 left-0 z-50 flex w-full items-center justify-between px-[10vw] py-5 shadow-sm shadow-dark/10 backdrop-blur-md`,
    nav: tw`flex items-center gap-10`,
    div: tw`flex gap-30 max-xl:hidden`
  };

  return (
    <header className={css.header}>
      <Logo className="text-point" />

      <nav className={css.nav}>
        <div className={css.div}>
          <Gnb />
          <Sns />
        </div>
      </nav>
    </header>
  );
}
