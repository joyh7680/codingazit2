import footerData from '../../assets/data/footerData.json';
import { tw } from '../../globals';
import Logo from '../items/Logo';
import Sns from '../items/Sns';

export default function Footer() {
  const css = {
    // w-8/10: 80%
    footer: tw`mx-auto w-8/10 border-t border-dark/50 py-10 text-dark/80`,
    section: tw`flex flex-wrap items-center justify-between border-b border-dark/40 py-5 last:border-none`,
    // w-1/4 넓이의 4등분
    // max-xl:w-1/2 작아질때 1/2 2등분으로 보이게
    article: tw`mb-14 w-1/4 max-xl:w-1/2`,
    article_h2: tw`mb-6 text-lg font-semibold text-dark/80`
  };
  return (
    <footer className={css.footer}>
      <section className={css.section}>
        {footerData.map((data, idx) => (
          <article key={idx} className={css.article}>
            <h2 className={css.article_h2}>{data.title}</h2>

            {/* footerData 배열의 마지막은 items 배열이 아니라 description 이기 때문에 분기처리를 해야함  */}
            {/* data.items 항목이 있을때에만(&&) 내부 반복 처리  */}
            {data.items && (
              <ul>
                {data.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              //  <ul>
              //   {data.items.map((item, i) => (
              //     <li key={i}>{item}</li>
              //   ))}
              // </ul>
            )}

            {/* data.description 항목이 있을때에만(&&) 요소 출력  */}
            {data.description && <p>{data.description}</p>}

            {/* idx값이 마지막 순번일때에만 <Sns /> 호출  */}
            {/* 논리 연산자 && (AND)**를 사용하여 특정 조건이 참(true)일 때만 뒷부분의 UI를 화면에 그립니다. */}
            {/* footerData.length는 프로그래밍(JavaScript)에서 배열(Array) 속에 담긴 아이템의 총 개수 =4 
            4-1 =3
            0,1,2,3   3이마지막 번째  */}
            {idx === footerData.length - 1 && <Sns />}
          </article>
        ))}
      </section>

      <section className={css.section}>
        <Logo />
        <p>2026 dcodelab &copy; All Rights Reserved. </p>
      </section>
    </footer>
  );
}
