import { FaFacebookSquare, FaEnvelope, FaYoutube } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  //gnb index == 1: members, 2: notice, 3: gallery, 4: youtube, 5: contact
  const gnb = ["Members", "Notice", "Gallery", "Youtube", "Contact"];
  const sns = [
    { ico: FaFacebookSquare, path: "/facebook" },
    { ico: FaEnvelope, path: "/mail" },
    { ico: FaYoutube, path: "/youtube" },
  ];

  return (
    <header>
      <h1>
        {/* <a href="/">CODING AZIT</a> */}
        <Link to="/"> CODING AZIT </Link>
      </h1>

      <nav>
        {/* gnb */}
        <ul>
          {/*  gnb  map : gnb 배열을 하나씩 꺼내서 JSX 요소로 바꿔줌 
          el : 배열의 값 (예: "Members")    */}

          {gnb.map((el, idx) => (
            <li key={idx}>
              <NavLink to={"/" + el.toLowerCase()}>{el}</NavLink>
            </li>
          ))}
        </ul>

        {/* sns */}
        <span>
          {/* 아이콘 컴포넌트를 배열에 저장해두고
          map으로 돌면서 Link + 아이콘을 자동 생성하는 코드 */}
          {sns.map((el, idx) => (
            <Link key={idx} to={el.path}>
              {/* <FaFacebook /> */}
              <el.ico />
            </Link>
          ))}
        </span>
      </nav>
    </header>
  );
}
