import InforBox from '../components/wrapper/InforBox';
import Layout from '../components/wrapper/Layout';
import memberInfo from '../assets/data/memberInfo.json';

export default function Members() {
  return (
    // Layout을 감싸는 구조로 쓰고 있음
    <Layout title="Members">
      {/* 👇 이게 children */}
      {/* <section>멤버소개 페이지 콘텐츠가 들어올 자리</section> */}
      <InforBox className="w-100" title={memberInfo.title} subTitle="subTitle" content={memberInfo.content} />

      <InforBox className="w-100" title="box1" content="box1 desc">
        <button>click me</button>
      </InforBox>
    </Layout>
  );
}
