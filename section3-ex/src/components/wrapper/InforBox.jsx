import { twMerge } from 'tailwind-merge';
import { tw } from '../../globals';

// 1) 어떤데이터를 전달할건지 미리정한다(className, title, subTitle, content, children)

// { className = '' } (기본값 빈 문자열)부모가 아무것도 안 줬을 때 "아무것도 없는 문자열('')"을 기본으로 쓰겠다고 명시하는 것
export default function InforBox({ className = '', title, subTitle, content, children }) {
  // 3) CSS 변수 만들기, style작업하기
  const css = {
    article: tw`mb-14 w-full text-left`,
    strong: tw`block font-orbitron text-dark/40`,
    h1: tw`font-orbitron text-2xl font-semibold text-dark/80`,
    // 재사용하기 위해서 line을 따로 만들어주는게 좋음
    line: tw`mb-6 after:inline-block after:h-px after:w-14 after:bg-dark/60`,
    // break-all 영문한개단위로 쪼개짐
    //  whitespace-pre-line : 자동줄바꿈
    p: tw`break-all whitespace-pre-line text-dark/60`
  };

  return (
    // 2) jsx 구현
    <article className={twMerge(css.article, className)}>
      {/* subTitle이 있을때에만 strong으로 출력하겠다  */}
      {subTitle && <strong className={css.strong}>{subTitle}</strong>}
      <h1 className={css.h1}>{title}</h1>
      <div className={css.line} />
      {/* content 가 있을때에만 p로 출력하겠다  */}
      {content && <p className={css.p}>{content}</p>}
      {children}
    </article>
  );
}

//@ 왜 article에만 twMerge를 쓰는거? 어쩔때 twMerge를 쓰면 좋은건지?
