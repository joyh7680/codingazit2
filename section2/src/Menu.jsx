import React from "react";
import { Link, NavLink } from "react-router-dom";

// 컴포넌트 안에 변수, 스타일 설정을 해주는게 제일 best

export default function Menu() {
  // menu 변수설정
  // 메뉴 이름 + 이동 경로를 하나로 묶은 데이터 => 나중에 메뉴가 늘어나도 배열만 수정하면 끝

  const menu = [
    { name: "home", path: "/" }, // => item
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav>
      <ul>
        {/* map으로 메뉴 반복 렌더링 
        menu 배열을 하나씩 반복
        item : { name: "home", path: "/" }
         */}
        {menu.map((item) => (
          // React에서 리스트 렌더링 시 key 필수
          // path는 고유값이므로 key로 적합
          <li key={item.path}>
            <NavLink
              to={item.path}
              //일일이 index.css에서 설정해줄 필요 x
              //   구조분해할당 -
              // NavLink가 자동으로 넘겨주는 객체: { isActive: true/false }
              style={({ isActive }) => ({
                color: isActive ? "red" : "black",
              })}
            >
              {item.name}
            </NavLink>
          </li>
        ))}

        {/* 구조분해할당 */}
        {/* (item) => {
        const path = item.path;
        const name = item.name;
        } */}

        {/* {menu.map(({ path, name }) => {
          return (
            <li key={path}>
              <NavLink to={path}>{name}</NavLink>
            </li>
          );
        })} */}

        {/* <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Home</NavLink>
        </li> */}

        {/* <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Home</Link></li> */}

        {/* a태그로 작업시 깜빡거리는 오류 나타남  */}
        {/* <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li> */}
      </ul>
    </nav>
  );
}
