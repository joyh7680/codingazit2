
import { Link, NavLink } from "react-router-dom";
import Logo from "./items/Logo";
import Gnb from "./items/Gnb";
import Sns from "./items/Sns";

export default function Header() {

  // const gnb = ["Members", "Notice", "Gallery", "Youtube", "Contact"];
  // const sns = [
  //   { ico: FaFacebookSquare, path: "/facebook" },
  //   { ico: FaEnvelope, path: "/mail" },
  //   { ico: FaYoutube, path: "/youtube" },
  // ];

  return (
    <header>
      {/* logo로 이동  */}
      {/* <h1>
        <Link to="/"> CODING AZIT </Link>
      </h1> */}
      <Logo />

      <nav>
        {/* Gnb.jsx 로 이동  */}
        <Gnb />
        {/* gnb  */}
        {/* <ul>
          {gnb.map((el, idx) => (
            <li key={idx}>
              <NavLink to={"/" + el.toLowerCase()}>{el}</NavLink>
            </li>
          ))}
        </ul> */}

        <span>
          <Sns />
          {/* sns */}
          {/* {sns.map((el, idx) => (
            <Link key={idx} to={el.path}>
              <el.ico />
            </Link>
          ))} */}
        </span>
      </nav>
    </header>
  );
}
