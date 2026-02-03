import { twMerge } from "tailwind-merge";
import { tw } from "../../globals";

export default function Table({ data = null, direction = "horizontal", className = "" }) {
  const css = {
    table: tw`w-full border-b-2`,
    th: tw`border-b-2 px-2 py-4 text-left`,
    td: tw`border-b border-dark/20 px-2 py-4 text-left text-xs`
  };

  if (direction === "vertical") {
    // data가 배열이면 첫 번째 객체만, 객체면 그대로 사용
    const obj = Array.isArray(data) ? (data[0] ?? {}) : (data ?? {});
    const keys = Object.keys(obj);
    if (!keys.length) return <p>데이터가 없습니다</p>;

    return (
      <table className={twMerge(css.table, className)}>
        <tbody>
          {keys.map(key => (
            <tr key={key}>
              <th className={css.td}>{key}</th>
              <td className={css.td}>{obj[key]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  } else {
    if (!data.length && direction === "horizontal") return <p>데이터가 없습니다</p>;
    const keys = Object.keys(data[0] || {});

    return (
      <table className={twMerge(css.table, className)}>
        <thead>
          <tr>
            {keys.map(key => (
              <th key={key} className={css.th}>
                {key}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className={css.tr}>
              {keys.map(key => (
                <td key={key} className={css.td}>
                  {String(row[key] ?? "")}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
