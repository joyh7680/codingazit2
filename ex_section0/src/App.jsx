export default function App() {
  return (
    <>
      <button className="bg-pink-500 p-4 text-white transition hover:bg-blue-500">hover me</button>
      <div className="bg-green-500 p-4 transition-colors duration-1000 hover:bg-pink-500">마우스를 올려보세요</div>
      <section className="group flex h-100 w-full flex-col flex-wrap items-center justify-center border">
        <article className="size-20 cursor-pointer bg-sky-500 transition-transform ease-in-out group-hover:translate-x-100"></article>
        <article className="size-20 cursor-pointer bg-pink-500 transition-transform delay-500 ease-in-out group-hover:translate-x-100"></article>
      </section>
    </>
  );
}
