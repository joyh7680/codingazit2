import React from "react";
// useLocation = 현재 URL 정보 가져오는 훅
import { Link, useLocation } from "react-router-dom";

export default function Breadcrumb() {
  const { pathname } = useLocation();
  // split : 문자열을 기준 문자로 쪼개서 배열로 만들어주는 메서드
  /*
  .filter(Boolean)은 자바스크립트의 깔끔하고 똑똑한 **"청소 기법"**입니다. 결론부터 말씀드리면, 배열 안에서 쓸모없는 값(빈 문자열, null, undefined 등)을 한 번에 제거하기 위해 사용
  자바스크립트에서 Boolean은 어떤 값을 true 또는 false로 변환하는 함수입니다.
  Falsy (거짓 같은 값): ""(빈 문자열), 0, false, null, undefined, NaN
  */
  const pathArr = pathname.split("/").filter(Boolean);
  console.log(pathArr);

  return (
    <nav>
      {/* 브레드크럼(Breadcrumb, 경로 탐색 바) 기능을 구현한 부분 */}
      {/* 브레드크럼의 시작점입니다. 어떤 페이지에 있든 항상 최상위 경로(/)인 "HOME"으로 이동할 수 있는 링크를 렌더링 */}
      <Link to="/">home</Link>

      {/* pathArr은 현재 URL 경로를 / 기준으로 쪼갠 배열
      이 배열을 순회하며 각 경로 조각(path)을 화면에 뿌려줍니다. */}
      {pathArr.map((path, idx) => {
        return (
          <React.Fragment key={idx}>
            <span>/</span>
            {/* 마지막 패스가 아닐시 (링크 연결 ) / 마지막 (굵게처리)
            현재 순서가 마지막 아이템이 아닌가? 
              pathArr.length: 배열 안에 든 아이템의 전체 개수 
            배열이 ['home', 'products', 'shoes']라고 가정해 봅시다. pathArr.length는 3입니다. 
            그러면 pathArr.length - 1은 항상 2가 됩니다.
            */}
            {idx !== pathArr.length - 1 ? (
              // true값 : 마지막이 아닌 경우 (Link 생성):아직 하위 경로가 더 남아있으므로, 클릭하면 해당 상위 카테고리로 이동할 수 있게 링크를 걸어줍니다.
              <Link to={"/" + path}>{path}</Link>
            ) : (
              // false 값 : 마지막인 경우 (strong 태그):현재 사용자가 머물고 있는 최종 페이지입니다. 굳이 자기 자신을 다시 클릭할 필요가 없으므로 링크 대신 굵은 글씨(strong)로 강조만 해줍니다.
              <strong>{path}</strong>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
