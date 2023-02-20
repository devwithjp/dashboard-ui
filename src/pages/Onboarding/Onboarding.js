import { Link, useLocation } from 'react-router-dom';
import { confirmPw, uName, userInfo } from '../../common/common';
import AuthButtons from '../../components/AuthButtons/AuthButtons';
import Bluebox from '../../components/Bluebox/Bluebox';
import WhiteBox from '../../components/HOC/WhiteBox/WhiteBox';
import './Onboarding.scss'

export default function Onboarding(props){
    const location = useLocation();

    const loginForm = (
      <>
        <label for="email">Email address</label>
        <input type='email' id='email' name="email" required autocomplete="off"/>
        <label for="pw">Password</label>
        <input type="password" id="pw" name="pw" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 4 characters" required autocomplete="off"/>
        <p className='forgotPwBtn'>Forgot password?</p>
        <input type="submit" className='signBtn formBtns' value="Sign In"/>
      </>
    );

    const signUpForm = (
      <>
        {uName()}
        {confirmPw()}
        <span id="agreeTermsContainer">
          <input type="checkbox" id="agreeTerms" name="agreeTerms"/>
          <label for="agreeTerms">I agree the <span className='forgotPwBtn'>terms and conditions</span></label>
        </span>
        <input type="submit" className='signBtn formBtns' value="Sign Up"/>
      </>  
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
                  <form action="" className='emailpwForm' autocomplete="off"> 
                    {isLogin ? loginForm : signUpForm}
                  </form>
                </WhiteBox>
                {regOrLoginPrompt}
              </div>
          </span>
        </div>
      );
}