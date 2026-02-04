import { NavLink } from 'react-router-dom';
import { FaFacebookSquare, FaEnvelope, FaYoutube } from 'react-icons/fa';
import { twMerge } from 'tailwind-merge';
import { tw } from '../../globals';

// props로 classname 전달하게 해주기 @?
// => { className = '' } === props라는 상자 안에서 className이라는 물건을 꺼내고, 없으면 빈 값을 씀.
// 외부 스타일 수용: 이 컴포넌트를 호출하는 부모가 "여기는 마진을 좀 더 줘!" 혹은 "여기는 색깔을 바꿔줘!"라고 요청할 때 className이라는 통로로 값을 보냅니다.
export default function Sns({ className = '' }) {
  // 기본 스타일 정의: Sns 컴포넌트 내부에서 css.span으로 기본적인 디자인(간격, 투명도 등)을 미리 정해둡니다.
  const css = {
    span: tw`flex gap-4 text-base opacity-70`
  };

  const sns = [
    { ico: FaFacebookSquare, path: '/facebook' },
    { ico: FaEnvelope, path: '/mail' },
    { ico: FaYoutube, path: '/youtube' }
  ];

  return (
    // 병합 (twMerge): 내부 스타일(css.span)과 외부에서 온 스타일(className)을 하나로 합쳐서 최종적으로 태그에 입힙니다.
    <span className={twMerge(css.span, className)}>
      {sns.map((el, idx) => (
        <NavLink key={idx} to={el.path}>
          <el.ico />
        </NavLink>
      ))}
    </span>
  );
}
