export default function App() {
    {/* motion-safe 
      : 동작 줄이기(Reduce Motion)" 옵션이 비활성화되어 있을 때만 스타일을 적용하겠다는 의미
    윈도우 설정 > 접근성 > 에니메이션효과 끔 => motion-safe 적용 => 애니메이션 효과 적용 안됨
    */}

  return (
    <>
      <div className="size-60 bg-red-500 hover:bg-blue-500 theme-transition"></div>
      {/* <div className="size-60 bg-red-500 hover:bg-blue-500 motion-safe:transition-colors motion-safe:duration-1000"></div> */}
      {/* 코드마다 motion-safe 적용하는 것은 비효율적  */}
    </>
  );
}
