import WhiteBox from '../HOC/WhiteBox/WhiteBox';
import './DeleteAccount.scss';

export default function DeleteAccount(props){
    return(
        <WhiteBox style={{padding: '30px 40px 40px', width: '100%', minWidth: '300px',marginTop: '40px'}}>
            <div id='deleteAccContainer'>
                <h3>Danger Zone</h3>
                <button>Delete My Account</button>
            </div> 
        </WhiteBox>
    );
}