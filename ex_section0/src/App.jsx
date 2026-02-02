export default function App() {
  return (
    <>
      {/* <div className="size-50 bg-pink-500"></div> */}
      {/* bg-black/50 : 투명도50  */}
      {/* <div className="h-screen w-screen bg-black/50 bg-[url('/visionboard.jpg')] bg-cover bg-center bg-no-repeat"></div> */}

      <div className="m-5 inline-block size-20 bg-linear-to-b from-blue-500 via-green-500 to-pink-500"></div>
      <div className="m-5 inline-block size-20 bg-linear-to-r from-blue-500 to-pink-500"></div>
      <div className="m-5 inline-block size-20 bg-linear-45 from-blue-500 to-pink-500"></div>
      <div className="m-5 inline-block size-20 bg-radial from-blue-500 to-pink-500"></div>
    </>
  );
}
