import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Gnb() {

  const gnb = ["Members", "Notice", "Gallery", "Youtube", "Contact"];

  return (
    <ul>
      {gnb.map((el, idx) => (
        <li key={idx}>
          <NavLink to={"/" + el.toLowerCase()}>{el}</NavLink>
        </li>
      ))}
    </ul>
  )
}
