import { NavLink, useLocation } from "react-router-dom";

export default function Menu() {
  const { pathname } = useLocation();
  console.log(pathname);

  const menu = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav style={{ backgroundColor: pathname === "/" ? "pink" : "lightgreen" }}>
      <ul>
        {menu.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul> */}

      {/* <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul> */}
    </nav>
  );
}
