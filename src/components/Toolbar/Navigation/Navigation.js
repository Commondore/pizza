import {NavLink} from 'react-router-dom'
import './Naviation.css';

function Navigation() {
  return (
    <nav className="toolbar-nav">
      <NavLink to="/" exact className="toolbar-nav__link">
        <span>Pizza Builder</span>
      </NavLink>
      <NavLink to="/orders" className="toolbar-nav__link">
        <span>Orders</span>
      </NavLink>
    </nav>
  );
}

export default Navigation
