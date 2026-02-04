import React from 'react';
import { NavLink } from 'react-router-dom';
import { tw } from '../../globals';
import { twMerge } from 'tailwind-merge';

// { className = '' } props 객체 안에서 className이라는 값을 꺼내 쓰겠다
export default function Gnb({ className = '' }) {
  const gnb = ['Members', 'Notice', 'Gallery', 'Youtube', 'Contact'];

  const css = {
    ul: tw`flex items-center gap-17 text-sm font-semibold text-dark/70 opacity-70 max-xl:gap-12`,
    ul_li: tw`hover:text-point`
  };

  return (
    // {twMerge(css.ul_li, className)} 클래스명을 합치고 최적화
    <ul className={twMerge(css.ul, className)}>
      {gnb.map((el, idx) => (
        <li key={idx} className={css.ul_li}>
          <NavLink
            //  클릭 시 이동할 경로를 소문자로 생성
            to={'/' + el.toLowerCase()}
            //    삼항 연산자 (isActive ? 'text-point' : ''):
            // true일 때: 사용자가 현재 그 메뉴 페이지에 있다면 'text-point'라는 클래스를 적용합니다. (글자색을 강조하는 등의 용도)
            // false일 때: 다른 페이지에 있다면 빈 문자열('')을 적용하여 기본 스타일을 유지합니다.
            className={({ isActive }) => (isActive ? 'text-point' : '')}
          >
            {el}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
