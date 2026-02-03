export default function App() {
  return (
    <>
      <section className="space-y-10 *:size-60">
        <div className="bg-components bg-black"></div>
        {/* bg-utility 는 덮어씌우기 불가  */}
        <div className="bg-black bg-utility"></div>
        <div className="my-gradient"></div>
      </section>
    </>
  );
}
