import React from 'react';
import { Link, useLocation } from 'react-router-dom';

// 부품	Breadcrumb	현재 경로 표시	Layout 안에서 현재 URL을 읽어 자동으로 생성

export default function Breadcrumb() {
  const { pathname } = useLocation();
  // "/youtube/detail" -> ["", "youtube", "detail"] -> ["youtube","detail"]
  const pathArr = pathname.split('/').filter(Boolean);

  return (
    <nav>
      <Link to="/">HOME</Link>

      {pathArr.map((path, idx) => {
        return (
          <React.Fragment key={idx}>
            <span>/</span>

            {/* 마지막 패스 아닐시 (링크연결) / 마지막  (굵게 처리) */}
            {idx !== pathArr.length - 1 ? <Link to={'/' + path}>{path.toUpperCase()}</Link> : <strong>{path.toUpperCase()}</strong>}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
