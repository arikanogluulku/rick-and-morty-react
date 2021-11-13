import React from 'react';
import { Link } from 'react-router-dom';
import SidebarData from './menuItem';
import sidebarLogo from '../../assets/sidebar.gif';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <Link to="/">
          <img src={sidebarLogo} alt="logo" />
        </Link>
      </div>
      <ul className="sidebar__menu">
        {
        SidebarData.map((item) => (
          <Link to={item.path} key={item.id} className="sidebar__menu__item">
            <img src={item.icon} alt="icon" className="sidebar__menu__item-icon" />
            <span className="sidebar__menu__item-title">{item.title}</span>
          </Link>
        ))
      }
      </ul>
    </div>
  );
}

export default Sidebar;
