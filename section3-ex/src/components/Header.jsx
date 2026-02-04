import Logo from './items/Logo';
import Gnb from './items/Gnb';
import Sns from './items/Sns';

export default function Header() {
  return (
    <header>
      <Logo className="text-point" />

      <nav>
        <Gnb />
        <Sns />
      </nav>
    </header>
  );
}
