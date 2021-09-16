import Logo from "../Logo/Logo"
import Navigation from "./Navigation/Navigation"

const styles = {
  display: 'flex',
  justifyContent: 'space-between',
  background: '#f2f2f2',
  borderBottom: '4px solid #ccc'
}


function Toolbar() {
  return (
    <header className="toolbar" style={styles}>
      <Logo />
      <Navigation />
    </header>
  );
}

export default Toolbar
