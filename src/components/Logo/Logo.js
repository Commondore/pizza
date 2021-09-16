import logo from './logo.png';
import './Logo.css';

function Logo() {
  return (
    <div className="logo">
      <img className="logo__img" src={logo} alt="My pizza" />
    </div>
  )
}

export default Logo
