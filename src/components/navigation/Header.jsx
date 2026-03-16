import { NavLink } from "react-router-dom";
import { mainNavLinks } from "../../data/navigation";
import "./Header_css/Header.scss";
import MobileMenu from "./MobileMenu";
import placeholderImgLogo from "../../assets/images/logo/karpathLogo.png";

function Header() {
  return (
    <header className="header">
      <div className="header__inner container">
        <div className="header__logo">
          <img
            src={placeholderImgLogo}
            alt="Studio logo"
            className="header__logo-img"
          />
          <span>Karpath Games</span>
        </div>

        <nav className="header__nav">
          {mainNavLinks.map((link) => (
            <NavLink key={link.to} to={link.to} className="header__nav-link">
              {link.label}
            </NavLink>
          ))}
        </nav>

        <MobileMenu />
      </div>
    </header>
  );
}

export default Header;
