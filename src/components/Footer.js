import "../styles/footer.css";
import instagramIcon from "../img/instagram.png";
import facebookIcon from "../img/facebook.png";
import linkedinIcon from "../img/linkedin.png";
import telegramIcon from "../img/telegram.png";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-header">What’s next</p>
        <p className="footer-description">
          Submit better job app — 10x faster. AI cover letter <br />
          generator, resume keyword checker, outreach message
          <br /> writer, and more. Powered by GPT
        </p>
        <div
          className="try-free-button"
          style={{ marginBottom: "40px", fontWeight: "600" }}
        >
          Try For Free
        </div>
        <div className="expanded-menu">
          <div>
            <ul>
              <li className="expanded-list-header">Platform</li>
              <li className="expanded-list-item">Plans and Prices</li>
              <li className="expanded-list-item">AI Create Letters</li>
              <li className="expanded-list-item">AI Resume Checker</li>
              <li className="expanded-list-item">Resume Templates</li>
              <li className="expanded-list-item">Sell Templates</li>
              <li className="expanded-list-item">Blog</li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="expanded-list-header">Features</li>
              <li className="expanded-list-item">AI Cover Letter Creator</li>
              <li className="expanded-list-item">Resume Keywords Optimizer</li>
              <li>ATS Resume Checker</li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="expanded-list-header">Resources</li>
              <li className="expanded-list-item">
                4 AI Tools for Aplying a job
              </li>
              <li className="expanded-list-item">
                How to optimize Resume keywords
              </li>
              <li className="expanded-list-item">
                Why you should use Chat GPT for <br /> create Resume
              </li>
              <li className="expanded-list-item">
                What should you include in a Cover Letter
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="expanded-list-header">Support </li>
              <li className="expanded-list-item">support@gmail.com</li>
              <li className="expanded-list-item">
                <img className="social-icon" src={instagramIcon} />
                <img className="social-icon" src={facebookIcon} />
                <img className="social-icon" src={linkedinIcon} />
                <img className="social-icon" src={telegramIcon} />
              </li>
            </ul>
          </div>
        </div>
        <div className="separator"></div>
        <div className="privacy">
          <p>© Copywriting</p>
          <p>|</p>
          <p>All Rights Reserved</p>
          <p>|</p>
          <p>Term os use</p>
          <p>|</p>
          <p>Privacy</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
