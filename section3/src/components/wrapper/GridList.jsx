import { twMerge } from "tailwind-merge";
import { tw } from "../../globals";

export default function GridList({ data = [], children, className = "", tags = "ul>li" }) {
  const css = {
    container: tw`grid grid-cols-3 gap-10 max-lg:grid-cols-2 max-md:grid-cols-1`,
    item: tw`relative mb-12 *:w-full [&>h2]:text-lg`
  };

  const [Container, Item] = tags.split(">").map(tag => tag.trim());

  typeof children !== "function" && console.warn("children으로 (item, index) => JSX 형태의 함수가 와야 합니다.");
  !tags.includes(">") && console.warn("tags에는 '부모태그 > 자식태그' 문자열 형태로 입력하세요.");

  return (
    <Container className={twMerge(css.container, className)}>
      {data.map((el, idx) => (
        <Item key={idx} className={css.item}>
          {children(el, idx)}
        </Item>
      ))}
    </Container>
  );
}
