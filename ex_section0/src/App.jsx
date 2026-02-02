export default function App() {
  return (
    <>
      <button className="bg-gray-300 p-4 hover:bg-blue-500 focus:bg-green-500 active:bg-red-500">상태별 반응 버튼</button>
      <br></br>
      {/* // group 박스에 호버시 h1, p 태그의 글자색 변경 */}
      <div className="group mt-10 border p-10">
        <h1 className="group-hover:text-blue-500">제목</h1>
        <p className="group-hover:text-red-500">내용</p>
      </div>
      <br></br>
      {/* // peer 체크박스가 체크되었을 때 라벨의 글자색 변경 */}
      <input type="checkbox" id="agree" className="peer" />
      <label htmlFor="agree" className="peer-checked:text-green-500">
        동의합니다
      </label>
      <br></br>
      <br></br>
      {/* article*2>h2+div>p  */}
      {/* 직계자식 : * / 자손 모두 : ** */}
      <section className="space-y-10">
        {/* 직계자식만 적용 : * */}
        <article className="border-4 p-4 *:border">
          <h2 className="mb-2 p-4">*직계자식만 적용</h2>
          <div className="mb-2 p-4">
            <p className="p-4">중첩된 p</p>
          </div>
          <p className="p-4">직계 자식 p</p>
        </article>

        {/* 자손 모두 적용  : ** */}
        <article className="border-4 p-4 **:border">
          <h2 className="mb-2 p-4">**자손 모두 적용</h2>
          <div className="mb-2 p-4">
            <p className="p-4">중첩된 p</p>
          </div>
          <p className="p-4">직계 자식 p</p>
        </article>
      </section>
      <br></br>

      {/* ul>li*4{list} */}
      {/* &는 “현재 요소 자신(부모)”을 가리키는 표시 */}
      <ul className="*:even:border">
        <li>list1</li>
        <li>list2</li>
        <li>list3</li>
        <li>list4</li>
      </ul>
      <br></br>

      {/* [&_p] = “이 요소 안에 있는 모든 p 태그”를 뜻함.
       & : 자기자신 === section
       _ : space */}
      <section className="flex gap-10 *:border-4 [&_p]:text-red-500">
        <article>
          <h2>첫번째 박스 타이틀</h2>
          <p> 첫번째 박스 본문</p>
        </article>

        <article>
          <h2>두번째 박스 타이틀</h2>
          <p> 두번째 박스 본문</p>
        </article>
      </section>
    </>
  );
}
