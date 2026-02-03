import instructorData from "../../assets/data/instructorData.json";
import instructorInfo from "../../assets/data/instructorInfo.json";
import InfoBox from "../wrapper/InfoBox";
import Table from "../items/Table";
import { tw } from "../../globals";

export default function Instructor() {
  const css = {
    sec: tw`flex w-full flex-wrap justify-between py-20`,
    intro: tw`w-3/10 max-lg:mb-10 max-lg:w-full`,
    table_box: tw`flex w-6/10 flex-wrap justify-between max-lg:w-full`,
    table: tw`w-[46%] border-t-2 max-md:mb-10 max-md:w-full`
  };

  return (
    <section className={css.sec}>
      <InfoBox title={instructorInfo.title} content={instructorInfo.content} className={css.intro} />

      <article className={css.table_box}>
        {instructorData.map((data, i) => (
          <Table key={i} data={data} direction="vertical" className={css.table} />
        ))}
      </article>
    </section>
  );
}
