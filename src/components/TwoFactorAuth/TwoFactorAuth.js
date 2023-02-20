import WhiteBox from '../HOC/WhiteBox/WhiteBox';
import ToggleBtn from '../ToggleBtn/ToggleBtn';
import './TwoFactorAuth.scss';

export default function TwoFactorAuth(props){
    return(
        <WhiteBox style={{padding:'30px 40px 40px', maxWidth: '500px', width:'100%'}}>
            <h3 id='twoFAtitle'>Security</h3>
            <div id='twoFAContainer'>
                <span>
                    2-Step Verification
                </span>
                <ToggleBtn/>
            </div>
        </WhiteBox>
    );
}