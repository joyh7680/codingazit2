import { Link } from "react-router-dom";

export default function Notice() {
  const notices = [
    { id: 1, title: "1번째 공지" },
    { id: 2, title: "2번째 공지" },
    { id: 3, title: "3번째 공지" },
  ];
  return (
    <ul>
      {notices.map((notice) => (
        <li key={notice.id}>
          {/* Link가 id를  URL에 포함시켜 전달 */}
          <Link to={`/notice/${notice.id}`}> {notice.title} </Link>
        </li>
      ))}
    </ul>
  );
}
