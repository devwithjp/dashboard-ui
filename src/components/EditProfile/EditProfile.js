import './EditProfile.scss';
import WhiteBox from '../HOC/WhiteBox/WhiteBox';


export default function EditProfile(props){
    return(
        <WhiteBox style={{padding:'30px 40px', maxWidth: '0%'}}>
            <h3 id='editProfileTitle'>Profile</h3>
            <div id='editProfileContainer'>

            </div>

        </WhiteBox>
    );
}