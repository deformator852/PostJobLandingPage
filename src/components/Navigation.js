import logoImage from "../img/logo.png";
import "../styles/navigation.css";
function Navigation() {
  return (
    <>
      <div className="navigation">
        <p className="nav-item logo">
          <img src={logoImage} className="logo-image" />
        </p>
        <p className="nav-item logo-text">
          PostJob
        </p>
        <p className="nav-item AI-cover">AI Cover Latter Generator</p>
        <p className="nav-item">Resume Template</p>
        <p className="nav-item">Pricing</p>
      </div>
      <div className="authorization">
        <div className="sign-in-button">Sign In</div>
        <div className="get-started-button">Get Started</div>
      </div>
    </>
  );
}

export default Navigation;
