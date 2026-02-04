import { tw } from '../../../ex_section3/src/globals';

export default function Home() {
  
  const css = {
    main: tw`relative flex h-screen w-full flex-wrap items-center justify-center overflow-hidden`,
    video: tw`absolute top-0 left-0 size-full scale-110 object-cover opacity-60 saturate-50`
  };

  return (
    <main className={css.main}>
      <video className={css.video} loop muted autoPlay src="/vidBg.mp4"></video>
    </main>
  );
}
