import Button from './assets/Button';

export default function App() {
  const btnArr = ['Menu1', 'Menu2', 'Menu3'];

  return (
    <>
      {/* 각 버튼에 직접 text와 customStyle을 전달합니다. 개별적으로 스타일을 제어하고 싶을 때 사용 */}
      <section className="mb-4 flex gap-4">
        <Button text="button1" />
        <Button text="button2" customStyle="bg-blue-500" />
        <Button text="button3" customStyle="bg-blue-200 text-black" />
      </section>

      <section className="flex gap-4">
        {/* btnArr.map()을 사용하여 배열 데이터를 순회하며 버튼을 생성 */}
        {btnArr.map((el, idx) => {
          return <Button key={idx} text={el} idx={idx} />;
        })}
      </section>
    </>
  );
}
