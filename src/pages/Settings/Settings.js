import './Settings.scss';
import Header from '../../components/Header/Header';
import SideBar from '../../components/Side Bar/SideBar';
import DeleteAccount from '../../components/DeleteAccount/DeleteAccount';
import TwoFactorAuth from '../../components/TwoFactorAuth/TwoFactorAuth';
import EditProfile from '../../components/EditProfile/EditProfile';

export default function Settings(props){
    return(
        <div>
          <SideBar title='Settings'/>
          <div style={{margin: '60px 60px 60px 380px'}}>
            <Header title='Settings' type='main'/>
            <div id='settingsContainer'>
              <EditProfile type="Profile"/>
              <div style={{width: '100%'}}>
                <EditProfile type="Account"/>
                <DeleteAccount />
                <TwoFactorAuth/> 
              </div>
            </div>
          </div>
        </div>
    );
}