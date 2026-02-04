import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Notice from "./Notice";
import NoticeDetail from "./NoticeDetail";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/notice" element={<Notice />} />
        {/* :id는 URL 파라미터(동적 세그먼트) 라고 부르고,
        /notice/1, /notice/2 처럼 들어오는 값에서 1, 2가 id로 매칭돼.
        그래서 NoticeDetail 컴포넌트 안에서 useParams()로 꺼내 쓸 수 있음. */}
        <Route path="/notice/:id" element={<NoticeDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
