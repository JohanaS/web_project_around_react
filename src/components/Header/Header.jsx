import logo from '../../images/Vector.png';
function Header() {
  return (
    <header className="header">
      <img
      src={logo}
      className="header__logo"
      alt="logo-aroundUS"/>
    </header>
  );
}

export default Header;