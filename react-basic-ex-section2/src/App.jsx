import Home from "./pages/Home";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Members from "./pages/Members";
import Notice from "./pages/Notice";
import Youtube from "./pages/Youtube";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/members" element={<Members />} />
        <Route path="/notice" element={<Notice />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/youtube" element={<Youtube />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}
