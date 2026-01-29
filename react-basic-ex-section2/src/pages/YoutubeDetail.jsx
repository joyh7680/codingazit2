// rfc
/* useParams
URL에 들어있는 변수 값을 꺼내는 훅
*/
//
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";

export default function YoutubeDetail() {
  const { id } = useParams();
  // Layout = main 태그 역할
  return <Layout>유튜브 상세페이지 : {id} </Layout>;
}
