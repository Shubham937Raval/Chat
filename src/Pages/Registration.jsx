import './Registration.css'
import { GrGithub } from 'react-icons/gr'
import { FcGoogle } from 'react-icons/fc'
import { Footer } from './Footer'
import { Background } from '../Components/Background'
import { GoMail } from 'react-icons/go'
import { RiLockPasswordLine } from 'react-icons/ri'
import { FaGithub, FaGoogle } from 'react-icons/fa6'
export const Registration = () => {
  return (
    <>
        <div className="registerdesktop">
      <section className="registerlogo-parent">
        <div className="registerlogo">
          <b className="registerlogo1">Logo</b>
        </div>
        <div className="registercreate-account-btn-parent">
          <div className="registercreate-account-btn">
            <div className="registerwelcome-to-our">Welcome To Our Platform</div>
          </div>
          <div className="registerframe-wrapper">
            <form className="registericoutline-email-parent">
              <img
                className="registericoutline-email-icon"
                loading="lazy"
                alt=""
                src="./public/icoutlineemail.svg"
              />

              <img
                className="registermdipassword-outline-icon"
                loading="lazy"
                alt=""
                src="./public/mdipasswordoutline.svg"
              />

              <div className="registerlabel-parent">
                <div className="registerlabel">
                  <div className="registercreate-your-account">Create Your Account</div>
                </div>
                <div className="registertitle-parent">
                  <input
                    className="registertitle"
                    placeholder="Enter Your Email"
                    type="text"
                  />

                  <div className="registerbackground-rect"></div>
                </div>
              </div>
              <div className="registeralready-member">
                <div className="registercontinue-btn">
                  <input
                    className="registerenter-your-password"
                    placeholder="Enter Your Password "
                    type="text"
                  />

                  <div className="registeremail-field"></div>
                </div>
                <div className="registercontinue-btn1">
                  <div className="registerconfirm-password">Confirm Password</div>
                  <div className="registercontinue-btn-child"></div>
                </div>
              </div>
              <div className="registerpassword-field"></div>
              <div className="registeralready-have-an-account-wrapper">
                <div className="registeralready-have-an">Already have an account?</div>
              </div>
              <div className="registercontinue-container">
                <button className="registerrectangle-parent">
                  <div className="registerframe-child"></div>
                  <b className="registercontinue">Continue</b>
                </button>
              </div>
              <div className="registergoogle-sign-up">
                <div className="registergithub-sign-up">
                  <div className="registeror-sign-up">OR Sign up With</div>
                  <div className="registero-r-label">
                    <div className="registergoogle-logo">
                      <div className="registergithub-logo">
                        <div className="registerrectangle-group">
                          <div className="registerframe-item"></div>
                          <img
                            className="registergoogle-icon"
                            loading="lazy"
                            alt=""
                            src="./public/google@2x.png"
                          />
                        </div>
                      </div>
                      <div className="registerrectangle-container">
                        <div className="registerframe-inner"></div>
                        <img
                          className="registergithub-icon"
                          loading="lazy"
                          alt=""
                          src="./public/github@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      <div className="registerdesktop-child"></div>
      <div className="registerdesktop-item"></div>
      <section className="registerby-creating-an-account-you-ag-wrapper">
        <div className="registerby-creating-an-container">
          <span className="registerby-creating-an"
            >By creating an account, you agree to the</span
          >
          <span> </span>
          <span>
            <span className="registerterms-of-service">Terms of Service</span>
          </span>
          <span className="registerand">and </span>
          <span className="registerprivacy-statement">Privacy Statement</span>
          <span className="registerwell-occasionally-send"
            >. We'll occasionally send you account-related emails.</span
          >
        </div>
      </section>
    </div>
    </>
  )
}
