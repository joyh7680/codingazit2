import { Link } from "react-router-dom";
import Layout from "../components/wrapper/Layout";

export default function Youtube() {
  return (
    <Layout title="Youtube">
      <section>
        <ul>
          <li>
            <Link to="/youtube/1">유튜브 상세 페이지1</Link>
          </li>
          <li>
            <Link to="/youtube/2">유튜브 상세 페이지2</Link>
          </li>
          <li>
            <Link to="/youtube/3">유튜브 상세 페이지3</Link>
          </li>
        </ul>
      </section>
    </Layout>
  );
}
