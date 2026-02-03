import { twMerge } from 'tailwind-merge';

// 받아온 props를 이용해 버튼을 화면에 그립니다. 여기서 핵심은 twMerge의 활용

/* twMerge의 역할
Tailwind CSS는 뒤에 오는 클래스가 앞에 적힌 클래스를 자동으로 덮어쓰지 못하는 경우가 많습니다 (예: bg-gray-500과 bg-red-500이 동시에 있으면 충돌 발생). twMerge는 이를 지능적으로 판단하여 나중에 들어온 스타일을 우선 적용
*/

export default function Button({ text, customStyle, idx }) {
  return (
    <>
      {/* twMerge()를 함수형태로 호출 */}
      <button className={twMerge('inline-block bg-gray-500 px-4 py-2 text-white', customStyle, idx === 0 && 'bg-red-500')}>{text}</button>
    </>
  );
}
