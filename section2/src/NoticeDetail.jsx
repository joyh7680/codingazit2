import { useParams } from "react-router-dom";

export default function NoticeDetail() {
  /* 
    구조분해할당
    const params = useParams();
    const id = params.id;
    즉 { id }는 params.id를 바로 꺼내서 id 변수로 만드는 문법.
  */
  const { id } = useParams();
  // `useParams()`는 현재 URL에서 `:id` 같은 **파라미터 값들을 객체로 반환**
  // 예: `/notice/3`으로 들어오면 `useParams()` 결과는 `{ id: "3" }`

  return (
    <div>
      <h1>공지사항 상세페이지</h1>
      {/* JSX에서 {id}는 자바스크립트 표현식 삽입
        그래서 화면에 실제로 /notice/2로 들어오면 2가 출력됨 */}
      <p>현재 보고 있는 글 번호 : {id} </p>
    </div>
  );
}
