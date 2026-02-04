// import Header from "./Header.jsx";
import Header from "./Header"; //jsx 확장자 생략 가능

// ./Button, ./Header 파일에서 default export된 컴포넌트를 가져옴
import Button from "./Button";
import Box from "./Box";

export default function App() {
  return (
    <div>
      <Header />
      {/* text라는 props를 Button 컴포넌트에 전달 */}
      {/* 부모 컴포넌트에서 자식 컴포넌트에게 “재료값” 내려준다고 생각하면 됨  */}
      <Button text="저장하기" color="blue" />
      {/* Button({ text: "저장하기" }) 이렇게 호출됨 */}
      <Button text="취소하기" color="red" />
      <Button text="수정하기" color="green" />

      {/* children
      - 안쪽의 내용이 children props로 전달됨 
      - props와 다르게 안쪽에 많은 데이터를 주고싶을때 - 페이지별 내용을 children으로 전달하기위해 많이 사용 */}
      <Box>
        <h2>공지사항</h2>
        <p>이번 주 서버 점검은 토요일입니다. </p>
      </Box>

      <Box>
        <h2>이벤트</h2>
        <p>신규 가입자에게 20% 할인 쿠폰을 드립니다.</p>
      </Box>

      {/* 실제로는 이렇게 호출 
      Box({
        children: (
          <>
            <h2>공지사항</h2>
            <p>이번 주 서버 점검은 토요일입니다.</p>
          </>
        )
      }) */}

      {/* props : 컴포넌트 안쪽에 간단한 데이터를 전달할때
      children : 컴포넌트를 랩핑형태로 감싸서 그 안쪽에 있는 jsx같은 복잡한 데이터를 바로 특정틀안에 넣어줄때
      많이 예제를 타이핑하면서 파악 가능  */}
    </div>
  );
}
