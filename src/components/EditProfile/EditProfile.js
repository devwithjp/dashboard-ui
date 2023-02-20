import './EditProfile.scss';
import WhiteBox from '../HOC/WhiteBox/WhiteBox';
import { confirmPw, uName, userInfo } from '../../common/common';


export default function EditProfile(props){
  //Pass props.type = Account for change password box | props.type = Profile for edit user info box
    const saveBtn = <input type="submit" className='saveBtn formBtns' value="Save"/>;

    const editUserInfoForm = (
      <form action="" className='emailpwForm' autocomplete="off">
          {uName()}
          {userInfo()}
          {saveBtn}
      </form>
    );

    const changePwForm = (
      <form action="" className='emailpwForm' autocomplete="off">
        {confirmPw()}
        {saveBtn}
      </form>
    );

    return(
        <WhiteBox style={{padding:'30px 40px',minWidth: props.type === 'Account' ?'300px' : '530px',width:'100%'}}>
            <h3 id='editProfileTitle'>{props.type}</h3>
            {props.type === 'Account' ? changePwForm
            :
            <div id='editProfileContainer'>
              <div id='changePic'>
                <img src='/settings/profilePic.png' alt='' width={100} height={100}/>
                <button id='changePicBtn'>Change</button>
              </div>
              {editUserInfoForm}
            </div>}

        </WhiteBox>

    );
}