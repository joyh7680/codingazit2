import footerData from "../../assets/data/footerData.json";
import Logo from "../items/Logo";
import Sns from "../items/Sns";
import { tw } from "../../globals";

export default function Footer() {
  const css = {
    footer: tw`mx-auto w-8/10 border-t border-dark/50 py-10 text-dark/80`,
    section: tw`flex flex-wrap items-center justify-between border-b border-dark/40 py-5 last:border-none`,
    article: tw`mb-14 w-1/4 max-xl:w-1/2`,
    article_h2: tw`mb-6 text-lg font-semibold text-dark/80`
  };

  return (
    <footer className={css.footer}>
      <section className={css.section}>
        {footerData.map((data, idx) => (
          <article key={idx} className={css.article}>
            <h2 className={css.article_h2}>{data.title}</h2>

            {data.description && <p>{data.description}</p>}

            {data.items && (
              <ul>
                {data.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}

            {idx === footerData.length - 1 && <Sns className="mt-6" />}
          </article>
        ))}
      </section>

      <section className={css.section}>
        <Logo />
        <p>2024 dcodelab &copy; All Rights reserved.</p>
      </section>
    </footer>
  );
}
