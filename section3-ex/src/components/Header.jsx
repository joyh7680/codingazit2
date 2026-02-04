import Logo from './items/Logo';
import Gnb from './items/Gnb';
import Sns from './items/Sns';

export default function Header() {
  return (
    <header>
      <Logo />

      <nav>
        <Gnb />
        <Sns />
      </nav>
    </header>
  );
}
