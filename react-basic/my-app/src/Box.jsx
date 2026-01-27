import React from "react";

// Box({ children }) : props 객체에서 children만 꺼내 쓰는 구조분해
export default function Box({ children }) {
  // {children}: 부모에서 넘겨준 JSX 덩어리를 그 자리에 그대로 렌더링
  return <div className="box">{children}</div>;
}
