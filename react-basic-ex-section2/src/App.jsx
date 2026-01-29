import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Members from "./pages/Members";
import Notice from "./pages/Notice";
import Youtube from "./pages/Youtube";
import YoutubeDetail from "./pages/YoutubeDetail";

export default function App() {
  return (
    <>
      <Header />
      {/* //컨텐츠 들어오는곳 */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/members" element={<Members />} />
        <Route path="/notice" element={<Notice />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/youtube" element={<Youtube />} />
        {/* 여기서 :id는 **“변수 자리”**야. */}
        <Route path="/youtube/:id" element={<YoutubeDetail />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* 컨텐츠 들어오는곳// */}
      <Footer />
    </>
  );
}
