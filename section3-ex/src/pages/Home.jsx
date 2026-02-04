import { tw } from '../globals';

export default function Home() {
  // scale-110은 요소를 원래 크기보다 **110% (1.1배)**로 키우겠다
  // saturate는 **채도(색의 선명도)**를 의미, 원래 영상이 가진 색의 선명도를 50%로 낮추겠다

  const css = {
    main: tw`relative flex h-screen w-full flex-wrap items-center justify-center overflow-hidden bg-light`,
    video: tw`absolute top-0 left-0 size-full scale-110 object-cover opacity-60 saturate-50 dark:opacity-50`
  };

  return <main className={css.main}>{<video className={css.video} loop muted autoPlay src="/vidBg.mp4"></video>}</main>;
}
