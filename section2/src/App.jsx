import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Notice from "./Notice";
import NoticeDetail from "./NoticeDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* 공지사항 목록 */}
        <Route path="/notice" element={<Notice />} />
        {/* 공지사항 상세 (id는 변수처럼 동작) */}
        <Route path="/notice/:id" element={<NoticeDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
