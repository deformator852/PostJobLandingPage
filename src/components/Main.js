import "../styles/main.css";
import smartPersonalizationIcon from "../img/smartPersonalizationIcon.png";
import AIIcon from "../img/AIIcon.png";
import resumeScannerIcon from "../img/resumeScannerIcon.png";
function Main() {
  return (
    <main className="main">
      <div className="job-container">
        <h2 className="job-title">Win your dream job</h2>
        <h2 className="postjob-title">with PostJob</h2>
      </div>
      <div className="postjob-description">
        <p>
          Submit better job app - 10x faster. AI cover letter <br />{" "}
          generator resume keyword checker, outsearch message{" "}
          <br />writer, and more. Powered by GPT
        </p>
      </div>
      <div className="email">
        <div className="email-inner">
          <input
            type="email"
            placeholder="Your Email"
            className="email-input"
          />
          <div className="start-free">Start For Free</div>
        </div>
      </div>
      <div className="postjob-services">
        <div className="services-item">
          <p className="service-image">
            <img src={AIIcon} />
          </p>
          <p className="service-head">AI Cover Letter Generator</p>
          <p>
            The AI Cover Letter Generator is a tool<br />{" "}
            that users artificial intelligence<br />{" "}
            algorithms to create personalized cover<br />{" "}
            letters for job applications.
          </p>
        </div>
        <div className="services-item">
          <p className="service-image">
            <img src={smartPersonalizationIcon} />
          </p>
          <p className="service-head">Smart Personalization</p>
          <p>
            Smart personalization refers to use<br />{" "}
            of data and technology to deliver<br />{" "}
            tailored experiences and content to<br />{" "}
            individual customers or users.
          </p>
        </div>
        <div className="services-item">
          <p className="service-image">
            <img src={resumeScannerIcon} />
          </p>
          <p className="service-head">Resume Scanner</p>
          <p>
            A resume scanner is a software<br />{" "}
            application that users optical character<br />{" "}
            recognition (OCR) technology to<br />{" "}
            extract and analyze data from resumes.
          </p>
        </div>
      </div>
      <div className="submit-better-job-container">
        <div className="submit-bett-job-inner">
          <p className="submit-better-job-head1">
            Submit Better job <br /><br/><br/> applications
          </p>
          <p className="submit-better-job-head2">10x faster</p>
          <p className="submit-better-job-description">
            AI cover letter generator, resume keyword checker, outsearch <br />
            {" "}
            message writer, and more. Powered by GPT.
          </p>
        </div>
        <div className="softwareUi-image">
        </div>
      </div>
    </main>
  );
}

export default Main;
