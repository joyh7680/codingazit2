import { useParams } from "react-router-dom";
import Layout from "../components/wrapper/Layout";

export default function YoutubeDetail() {
  const { id } = useParams();
  return <Layout>유튜브 상세페이지: {id}</Layout>;
}
