import './Login.css'
import googlelogo from '../assets/googlelogo_clr_74x24px.svg'
export const Login = () => {
  return (
    <div className="logintaskpage">
      <div className="logintaskpage-child"></div>
      <div className="loginwelcome-to-my-chat-app-parent">
        <h1 className="loginwelcome-to-my">Welcome to my chat app !!!</h1>
        <div className="loginframe-wrapper">
          <div className="loginlogin-parent">
            <b className="loginlogin">Login</b>
            <div className="loginno-account-container">
              No Account ?
                <a href="/register">
                    <span className="loginsign-up">Sign up</span>
                </a>
            </div>
          </div>
        </div>
      </div>
      <section className="logintaskpage-inner">
        <form className="loginframe-parent">
          <input className="loginframe-child" placeholder="Email *" type="text" />

          <input className="loginframe-item" placeholder="Password *" type="text" />

          <div className="logingoogle-sign-in-button-parent">
            <div className="logingoogle-sign-in-button"></div>
            <div className="logindivider">
              <div className="loginframe-group">
                <button className="loginrectangle-parent">
                  <div className="loginframe-inner"></div>
                  <div className="loginlogin1">Login</div>
                </button>
                <div className="loginor-wrapper">
                  <b className="loginor">OR</b>
                </div>
                <button className="loginrectangle-group">
                  <div className="loginrectangle-div"></div>
                  <div className="loginflat-color-iconsgoogle-wrapper">
                    <img
                      className="loginflat-color-iconsgoogle"
                      alt="Login with Google"
                      src={googlelogo}
                    />
                  </div>
                  <div className="loginsign-in-with">Sign in with Goggle</div>
                </button>
              </div>
            </div>
          </div>
        </form>
      </section>
    </div>
  )
}
