import "../styles/main.css";
import smartPersonalizationIcon from "../img/smartPersonalizationIcon.png";
import AIIcon from "../img/AIIcon.png";
import resumeScannerIcon from "../img/resumeScannerIcon.png";
import mailIcon from "../img/mail.png";
import gitPullRequestIcon from "../img/git-pull-request.png";
import sendIcon from "../img/send.png";
import gridIcon from "../img/grid.png";
import sandboxIcon from "../img/codesandbox.png";
import sectionFirstImage from "../img/section-first.png";
import sectionSecondImage from "../img/section-second.png";
import resumeDesignImage from "../img/resume-design-image.png";
function Main() {
  return (
    <main className="main">
      <div className="job-container">
        <h2 className="job-title">Win your dream job</h2>
        <h2 className="postjob-title">with PostJob</h2>
      </div>
      <div className="postjob-description">
        <p>
          Submit better job app - 10x faster. AI cover letter <br /> generator
          resume keyword checker, outsearch message <br />
          writer, and more. Powered by GPT
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
            The AI Cover Letter Generator is a tool
            <br /> that users artificial intelligence
            <br /> algorithms to create personalized cover
            <br /> letters for job applications.
          </p>
        </div>
        <div className="services-item">
          <p className="service-image">
            <img src={smartPersonalizationIcon} />
          </p>
          <p className="service-head">Smart Personalization</p>
          <p>
            Smart personalization refers to use
            <br /> of data and technology to deliver
            <br /> tailored experiences and content to
            <br /> individual customers or users.
          </p>
        </div>
        <div className="services-item">
          <p className="service-image">
            <img src={resumeScannerIcon} />
          </p>
          <p className="service-head">Resume Scanner</p>
          <p>
            A resume scanner is a software
            <br /> application that users optical character
            <br /> recognition (OCR) technology to
            <br /> extract and analyze data from resumes.
          </p>
        </div>
      </div>
      <div className="submit-better-job-container">
        <div className="submit-bett-job-inner">
          <p className="submit-better-job-head1">
            Submit Better job <br />
            <br />
            <br /> applications
          </p>
          <p className="submit-better-job-head2">10x faster</p>
          <p className="submit-better-job-description">
            AI cover letter generator, resume keyword checker, outsearch <br />{" "}
            message writer, and more. Powered by GPT.
          </p>
        </div>
        <div className="softwareUi-image"></div>
      </div>
      <div className="spend-less-time-container">
        <div
          className="spend-less-time-inner"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "32px",
          }}
        >
          <p className="spend-less-time-header">
            Spend less time
            <br />
            <br />
            <br /> looking for work
          </p>
          <p className="help-you">We'll help you through the hardest part of</p>
          <p className="job-search">your job search</p>
          <div className="create-account-button">Create an account</div>
        </div>
        <div
          className="spend-less-time-content"
          style={{ flexDirection: "column" }}
        >
          <div style={{ display: "flex", marginBottom: "32px" }}>
            <div className="services-item">
              <p className="service-image">
                <img src={AIIcon} />
              </p>
              <p className="service-head">Cover letter</p>
              <p>
                A cover letter is a document that
                <br /> accompanies a job application and is
                <br /> written to introduce the applicant to the
                <br /> employer.
              </p>
            </div>
            <div className="services-item">
              <p className="services-image">
                <img src={mailIcon} />
              </p>
              <p className="service-head">Resignation Letters</p>
              <p>
                A resignation letter is a formal
                <br /> document that an employee writes to
                <br /> inform their employer of their decision
                <br /> to leave the company.
              </p>
            </div>
            <div className="services-item">
              <p className="services-image">
                <img src={gitPullRequestIcon} />
              </p>
              <p className="service-head">Connection Request</p>
              <p>
                A connection request is a message sent
                <br /> on a social networking site, such as
                <br /> LinkedIn, requesting to connect with <br /> another user.
              </p>
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <div className="services-item">
              <p className="services-image">
                <img src={sendIcon} />
              </p>
              <p className="service-head">Outreach Emails</p>
              <p>
                Outreach emails are messages sent by <br /> individuals or
                businesses to introduce
                <br /> themselves, establish a connection, or
                <br /> propose a collaboration.
              </p>
            </div>
            <div className="services-item">
              <p className="services-image">
                <img src={gridIcon} />
              </p>
              <p className="service-head">Resume Optimization</p>
              <p>
                Smart Personalization refers to the use
                <br /> of data and technology to deliver
                <br /> tailored experiences and content to
                <br /> individual customers or users.
              </p>
            </div>
            <div className="services-item">
              <p className="services-image">
                <img src={sandboxIcon} />
              </p>
              <p className="service-head">Resume Design</p>
              <p>
                A resume scanner is a software
                <br /> application that uses optical character
                <br /> recognition (OCR) technology to
                <br /> extract and analyze data from resumes.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="AIOptimize-container">
        <div className="AIOPtimize-section-first">
          <div className="optimize-section-first-inner">
            <p className="section-first-header">
              Free AI cover letter
              <br />
              <br />
              <br /> generator powered
              <br />
              <br />
              <br /> by GPT
            </p>
            <p
              style={{
                color: "#000000",
                fontWeight: "400",
                marginTop: "24px",
                textAlign: "left",
              }}
            >
              A free AI cover letter generator powered by GPT is a tool
              <br /> that uses artificial intelligence and natural language
              <br /> processing to help job seekers create customized and
              <br /> effective cover letters.
            </p>
            <div className="try-free-button">Try For Free Now</div>
          </div>
          <div style={{ marginTop: "56px" }}>
            <img
              className="optimize-section-first-image"
              src={sectionFirstImage}
            />
          </div>
        </div>
        <div className="AIOptimize-section-second">
          <div className="section-second-image">
            <img src={sectionSecondImage} />
          </div>
          <div style={{ marginTop: "107px" }}>
            <p
              style={{
                fontSize: "48px",
                color: "#000000",
                textAlign: "left",
                fontWeight: "600",
              }}
            >
              Optimize the
              <br />
              <br />
              <br />
              keywords in your <br />
              <br />
              <br />
              resume
            </p>
            <p
              style={{
                color: "#000000",
                fontWeight: "400",
                marginTop: "24px",
                marginBottom: "24px",
                textAlign: "left",
              }}
            >
              By optimizing keywords in your resume, you can increase <br />
              your chances of getting noticed by recruiters and landing
              <br /> interviews for the jobs you want.
            </p>
            <div className="optimize-resume-button">Optimize your resume</div>
          </div>
        </div>
      </div>
      <div className="resume-design-container">
        <div className="resume-design-content">
          <div style={{ marginRight: "55px" }}>
            <p className="resume-design-header">
              Free resume design <br />
              <br />
              <br />
              templates
            </p>
            <p className="resume-design-description">
              By following these design tips, you can create a<br />{" "}
              professional and effective resume that will help you stand
              <br /> out to recruiters and hiring managers.
            </p>
            <div className="resume-design-button">Create an account</div>
          </div>
          <div>
            <img style={{ marginTop: "7px" }} src={resumeDesignImage} />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
