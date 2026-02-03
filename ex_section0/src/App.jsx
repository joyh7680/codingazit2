import React from 'react';
const tw = str => str;

export default function App() {
  const css = {
    article: tw`w-1/3 rounded-lg bg-white p-4 shadow-lg`,
    h2: tw`mb-4 text-4xl font-bold`,
    p: tw`mb-6 text-justify text-sm leading-5`,
    span: tw`text-xs font-bold text-pink-500`
  };

  return (
    <article className={css.article}>
      <h2 className={css.h2}>title</h2>
      <p className={css.p}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, vitae ad laudantium assumenda tenetur qui dolorum totam, ipsum
        voluptate maiores officiis non rem exercitationem consequuntur impedit earum nam mollitia minima!
      </p>
      <span className={css.span}>2026.02.03</span>
    </article>

    // <article className="w-1/3 rounded-lg bg-white p-4 shadow-lg">
    //   <h2 className="mb-4 text-4xl font-bold">title</h2>
    //   <p className="mb-6 text-justify text-sm leading-5">
    //     Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, vitae ad laudantium assumenda tenetur qui dolorum totam, ipsum
    //     voluptate maiores officiis non rem exercitationem consequuntur impedit earum nam mollitia minima!
    //   </p>
    //   <span className="text-xs font-bold text-pink-500">2026.02.03</span>
    // </article>
  );
}
