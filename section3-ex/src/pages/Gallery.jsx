import Layout from '../components/wrapper/Layout';

// 1. Gallery.jsx (부모): Layout이라는 상자를 꺼냅니다.
export default function Gallery() {
  return (
    // 2. 내용물 전달: <Layout> <section>...</section> </Layout> 처럼 상자 안에 내용을 집어넣습니다.
    <Layout title="Gallery">
      <section>갤러리 페이지 콘텐츠가 올 자리</section>
    </Layout>
  );
}
