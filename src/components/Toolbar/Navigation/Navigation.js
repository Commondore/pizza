import {NavLink} from 'react-router-dom'
import {FaPizzaSlice} from 'react-icons/fa'
import {RiInboxArchiveFill} from 'react-icons/ri';

import './Naviation.css';

function Navigation() {
  return (
    <nav className="toolbar-nav">
      <NavLink to="/" exact className="toolbar-nav__link">
        <FaPizzaSlice />
        <span>Pizza Builder</span>
      </NavLink>
      <NavLink to="/orders" className="toolbar-nav__link">
        <RiInboxArchiveFill />
        <span>Orders</span>
      </NavLink>
    </nav>
  );
}

export default Navigation
