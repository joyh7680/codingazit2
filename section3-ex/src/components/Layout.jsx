import { useLocation } from "react-router-dom";
import Breadcrumb from "./Breadcrumb";

export default function Layout({ children, title, isHome = false }) {
  const { pathname } = useLocation();

  return (
    <main>
      {/* {!isHome && <h3>{title}</h3>} */}
      {isHome ? <figure>모션효과</figure> : <h3>{title}</h3>}

      {/* <Breadcrumb /> */}
      {/* 현재 경로가 메인('/')이 아닐 때만 브레드크럼을 보여줘! */}
      {pathname !== "/" && <Breadcrumb />}
      {/*Members  <section>멤버소개 페이지 콘텐츠가 들어올 자리</section> */}
      {children}
    </main>
  );
}
