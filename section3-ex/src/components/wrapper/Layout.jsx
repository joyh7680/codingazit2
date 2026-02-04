import Breadcrumb from '../items/Breadcrumb';
import { tw } from '../../globals';
import { twMerge } from 'tailwind-merge';
import { useLocation } from 'react-router-dom';

// font-raleway : 폰트 패밀리를 **'Raleway'**로 설정
// text-[7vmax]  글자 크기를 **브라우저의 가로/세로 중 긴 쪽 길이의 7%*
// leading-none 줄 간격(Line Height)을 1로 설정
// tracking-tight 자간(Letter Spacing)을 좁게 설정

export default function Layout({ children, title, className = '' }) {
  const css = {
    main: tw`flex flex-wrap justify-between px-[10vw] pt-[20vh] pb-[5vh] max-md:pt-[15vh]`,
    // prettier-ignore
    main_h1: tw`
    font-raleway text-[7vmax] leading-none font-thin tracking-tight text-black 
    after:content-[''] after:w-18 after:h-0.5 after:bg-dark after:block after:mt-5 after:mb-8 after:ml-2
    `,
    main_div: tw`mt-10 mb-20 flex min-h-[40vh] w-full flex-wrap justify-between`
  };

  const { pathname } = useLocation();

  return (
    <main className={twMerge(css.main, className)}>
      <h1 className={css.main_h1}>{title}</h1>

      {pathname !== '/' && <Breadcrumb />}

      {/* children 나중에 부모가 주는 걸 이 자리에 끼워 넣겠다
      ex ) Gallery 가 부모 
      */}

      {/* 3. Layout.jsx (자식): 부모가 보낸 <section>...</section>을 children이라는 이름의 변수로 받아서 원하는 위치(여기서는 main_div)에 렌더링합니다. */}
      <div className={css.main_div}>{children}</div>
    </main>
  );
}
