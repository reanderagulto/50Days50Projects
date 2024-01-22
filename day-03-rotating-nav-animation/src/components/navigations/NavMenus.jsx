import React from 'react';

const NavMenus = ({
    menus
}) => {
  return (
    <nav className="navigation__menus">
      <ul>
        {menus && menus.map((item, index) => {
          return (
            <li
              key={index}
            >
              {item.icon}
              {item.label}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default NavMenus
