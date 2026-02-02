export default function App() {
  const info = {
    name: "david",
    age: 20,
    gender: "male"
  };

  return (
    <div>
      <h1 className="text-4xl text-pink-500" onClick={() => console.log("test")}>
        tailwindcss 4
      </h1>
      <ul>
        <li>test1</li>
        <li>test2</li>
        <li>test3</li>
      </ul>
    </div>
  );
}
