import Layout from '../components/wrapper/Layout';

export default function Members() {
  return (
    // Layout을 감싸는 구조로 쓰고 있음
    <Layout title="Members">
      {/* 👇 이게 children */}
      <section>멤버소개 페이지 콘텐츠가 들어올 자리</section>
    </Layout>
  );
}
