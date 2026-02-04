import { Link } from 'react-router-dom';
import Layout from '../components/wrapper/Layout';

export default function Youtube() {
  return (
    <Layout title="Youtube">
      <section>
        <h1>유튜브 목록</h1>
        {/* URL = /youtube/1 
        /youtube/:id 와 패턴 매칭 성공*/}
        <Link to="/youtube/1">유튜브 상세페이지 1 </Link>
        <Link to="/youtube/abc">유튜브 상세페이지 abc </Link>
      </section>
    </Layout>
  );
}
