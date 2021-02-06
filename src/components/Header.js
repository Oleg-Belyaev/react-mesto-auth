import headerLogoPath from '../images/header-logo.svg';

function Header() {
  return (
    <header className="header page__section">
        <img src={headerLogoPath} alt="Логотип" className="header__logo" />
    </header>
  )
}

export default Header;