import { Link, useLocation } from 'react-router-dom';
import AuthButtons from '../../components/AuthButtons/AuthButtons';
import Bluebox from '../../components/Bluebox/Bluebox';
import WhiteBox from '../../components/HOC/WhiteBox/WhiteBox';
import './Onboarding.scss'

export default function Onboarding(props){
    const location = useLocation();

    const loginForm = (
      <form action="" className='emailpwForm' autocomplete="off">
        <label for="email">Email address</label>
        <input type='email' id='email' name="email" required autocomplete="off"/>
        <label for="pw">Password</label>
        <input type="password" id="pw" name="pw" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 4 characters" required autocomplete="off"/>
        <p className='forgotPwBtn'>Forgot password?</p>
        <input type="submit" className='signBtn' value="Sign In"/>
      </form>
      
    );

    const signUpForm = (
      <form action="" className='emailpwForm' autocomplete="off">
          <div className='uNameContainer'>
            <span class='uName'>
              <div><label for="fName">First Name</label></div>
              <input type='text' id='fName' name="fName" required autocomplete="off"/>
            </span>
            <span class='uName'>
              <label for="lName">Last Name</label>
              <input type='text' id='lName' name="lName" required autocomplete="off"/>
            </span>
          </div>
          <label for="email">Email address</label>
          <input type='email' id='email' name="email" required autocomplete="off"/>
          <label for="pw">Password</label>
          <input type="password" id="pw" name="pw" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 4 characters" required autocomplete="off"/>
          <label for="confirm">Confirm Password</label>
          <input type="password" id="confirm" name="confirmed" required autocomplete="off"/>
          <p className='forgotPwBtn'>Forgot password?</p>
          <input type="submit" className='signBtn' value="Sign Up"/>
        </form>
    );

    const isLogin =  location.pathname === '/login';
    const heading = isLogin ? 'Sign In' : 'Create an account';
    const description = isLogin ? 'Sign in to your account' : 'Create an account to use dashboard';

    const regOrLoginPrompt = (<p className='registerQs'>
        {isLogin ? "Don't have an account? ":"Already have an account? "}
        <Link to={isLogin?'/signup': '/login'} style={{textDecoration:'none', color: 'inherit'}}>
          <span className='registerBtn'>{isLogin?"Register here": "Sign in here"}</span>
        </Link>
      </p>)
    

    return (
        <div className="loginAndSignUp">
          <Bluebox/>
          <span className='signContainer'>
              <div className='sign'>
                <h2 className='signHeading'>{heading}</h2>
                <p className='signDesc'>{description}</p>
                <AuthButtons isLogin={isLogin}/>
                <WhiteBox style={{padding: '30px', width: '385px'}}>
                  {isLogin ? loginForm : signUpForm}
                </WhiteBox>
                {regOrLoginPrompt}
              </div>
          </span>
        </div>
      );
}