import noticeData from "../../assets/data/noticeData.json";
import classInfo from "../../assets/data/classInfo.json";
import InfoBox from "../wrapper/InfoBox";
import Table from "../items/Table";
import { tw } from "../../globals";

export default function Class() {
  const css = {
    sec: tw`flex w-full flex-wrap justify-between py-20`,
    intro: tw`w-3/10 max-lg:mb-10 max-lg:w-full`,
    table: tw`w-6/10 max-lg:w-full`
  };

  return (
    <section className={css.sec}>
      <InfoBox title={classInfo.title} content={classInfo.content} className={css.intro} />
      <Table data={noticeData} className={css.table} />
    </section>
  );
}
