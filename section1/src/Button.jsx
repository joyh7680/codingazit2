// rfc

// export default function Button() {
//   return <button>Button</button>;
// }

/*
props란?
부모(App)에서 자식(Button)에게 넘긴 데이터
*/
// export default function Button(props) {
//   console.log(props);
//   return <button>{props.text}</button>;
// }

// props도 객체
// 좀더 직관적으로 수정
export default function Button({ text, color }) {
  // 겉에 있는 준가로: style 표현식
  // 안에 있는 준가로: props로 받아온 객체값 준가로
  return <button style={{ color: color }}>{text}</button>;
}
