import { FaFacebookSquare, FaEnvelope, FaYoutube } from "react-icons/fa";

export default function Header() {
  const gnb = ["Members", "Notice", "Gallery", "Youtube", "Contact"];
  const sns = [
    { ico: FaFacebookSquare, path: "/facebook" },
    { ico: FaEnvelope, path: "/mail" },
    { ico: FaYoutube, path: "/youtube" },
  ];

  return (
    <header>
      <h1>
        <a href="/">CODING AZIT</a>
      </h1>

      <nav>
        {/* gnb */}
        <ul>
          {gnb.map((el, idx) => (
            <li key={idx}>
              <a href={"/" + el.toLowerCase()}>{el}</a>
            </li>
          ))}
        </ul>

        {/* sns */}
        <span>
          {sns.map((el, idx) => (
            <a key={idx} href={el.path}>
              {/* <FaFacebook /> */}
              <el.ico />
            </a>
          ))}
        </span>
      </nav>
    </header>
  );
}
