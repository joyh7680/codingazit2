import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/blocks/Footer';
import Header from './components/blocks/Header';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Members from './pages/Members';
import Notice from './pages/Notice';
import Youtube from './pages/Youtube';
import YoutubeDetail from './pages/YoutubeDetail';

export default function App() {
  // 현재 브라우저의 URL 경로 정보를 담고 있는 객체를 가져옵니다.
  const location = useLocation();
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/members" element={<Members />} />
        <Route path="/notice" element={<Notice />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/youtube" element={<Youtube />} />
        <Route path="/youtube/:id" element={<YoutubeDetail />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* 
      특정 페이지에서만 푸터(Footer)를 숨기기 위한 조건부 렌더링 로직
      location.pathname: 현재 접속한 주소를 의미
      !== '/': "현재 주소가 /(메인 페이지)가 아니라면"이라는 조건
      && (논리곱 연산자):
      앞의 조건이 true일 때만 뒤에 있는 <Footer />를 화면에 그립니다.
       */}
      {location.pathname !== '/' && <Footer />}
    </>
  );
}
