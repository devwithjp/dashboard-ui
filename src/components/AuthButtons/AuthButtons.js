import './AuthButtons.scss';


export default function AuthButtons(props) {
    // props.isLogin is true if sign in page false if sign up
    const {isLogin} = props;
    
    const authBtn = (imgUrl, width, height, authProvider) => (
        <button className='authButton'>
            <img src={imgUrl} alt={authProvider} width={width} height={height}></img>
            <span className='authText'>Sign {isLogin? 'in' : 'up'} with {authProvider}</span>
        </button>
    )
    return(
        <div className='authButtonsContainer'>
            {authBtn('./google-icon 1.png', 14, 14,'Google')}
            {authBtn('./apple 1.png', 11.5, 14,'Apple')}
        </div>
        
    )
}