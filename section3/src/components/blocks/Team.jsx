import memberData from "../../assets/data/memberData.json";
import memberInfo from "../../assets/data/memberInfo.json";
import teamInfo from "../../assets/data/teamInfo.json";
import InfoBox from "../wrapper/InfoBox";
import GridList from "../wrapper/GridList";
import Card from "../items/Card";
import { tw } from "../../globals";

export default function Team() {
  const css = {
    sec: tw`mt-10 flex flex-wrap justify-between`,
    team_info: tw`mb-20 [&>h1]:text-4xl [&>p]:text-lg`,
    member_info: tw`w-3/10 content-start pt-20 max-lg:mb-20 max-lg:w-full max-lg:pt-0`,
    grid: tw`w-6/10 max-lg:w-full`,
    card: tw`pb-0 [&>figure]:h-[14vmax] [&>h2]:text-base`
  };

  return (
    <section className={css.sec}>
      <InfoBox className={css.team_info} title={teamInfo.title} content={teamInfo.content} />

      <GridList data={memberData} className={css.grid}>
        {el => <Card imgSrc={"/" + el.pic} className={css.card} title={el.name} content={el.position} />}
      </GridList>

      <InfoBox className={css.member_info} title={memberInfo.title} content={memberInfo.content} />
    </section>
  );
}
