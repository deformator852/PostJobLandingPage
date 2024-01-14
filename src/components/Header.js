import "../styles/header.css";
import logoImage from "../img/logo.png";
import Navigation from "./Navigation";
import HeaderContent from "./HeaderContent";
function Header() {
  return (
    <header className="header">
      <Navigation /> 
    </header>
  );
}

export default Header;
