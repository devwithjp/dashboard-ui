import WhiteBox from '../../components/HOC/WhiteBox/WhiteBox';
import './Login.scss'

export default function Login(props){
    return (
        <div className="login">
          <span className='bluebox'>
            <h1>Dash.</h1>
          </span>
          <span className='form-container'>
              <div className='sign'>
                <h2 className='signHeading'>Sign In</h2>
                <p className='signDesc'>Sign in to your account</p>
                <div className='authButtonsContainer'>
                  <button className='authButton'>
                    <img src='./google-icon 1.png' alt='google' width='14' height='14'></img>
                    <span className='authText'>Sign in with Google</span>
                  </button>
                  <button className='authButton'>
                    <img src='./apple 1.png' alt='apple' width='11.5' height='14'></img>
                    <span className='authText'>Sign in with Apple</span>
                  </button>
                </div>
                <WhiteBox style={{padding: '30px', width: '385px'}}>
                  <form action="" className='emailpwForm' autocomplete="off">
                    <label for="email">Email address</label>
                    <input type='email' id='email' name="email" required autocomplete="off"/>
                    <label for="pw">Password</label>
                    <input type="password" id="pw" name="pw" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 4 characters" required autocomplete="off"/>
                    <p className='forgotPwBtn'>Forgot password?</p>
                    <input type="submit" className='signBtn' value="Sign In"/>
                  </form>
                </WhiteBox>
                <p className='registerQs'>Don't have an account? <span className='registerBtn'>Register here</span></p>
              </div>
          </span>
        </div>
      );
}