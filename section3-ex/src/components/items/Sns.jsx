import React from 'react'
import {  NavLink } from 'react-router-dom';
import { FaFacebookSquare, FaEnvelope, FaYoutube } from "react-icons/fa";

export default function Sns() {
   const sns = [
    { ico: FaFacebookSquare, path: "/facebook" },
    { ico: FaEnvelope, path: "/mail" },
    { ico: FaYoutube, path: "/youtube" },
  ];

  return (
    <div>
       {sns.map((el, idx) => (
            <NavLink key={idx} to={el.path}>
              <el.ico />
            </NavLink>
          ))}
    </div>
  )
}
