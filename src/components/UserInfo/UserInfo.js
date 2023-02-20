import './UserInfo.scss';

export default function UserInfo(props){
    const {profilePic, name, email, gender, userType} = props.data;
    return(
        props.data ? <div className='usrInfoContainer'>
            <span><img src={profilePic} alt=''/></span>
            <span>{name}</span>
            <span>{email}</span>
            <span>{gender}</span>
            <span>{userType}</span>
        </div> : <></>
    );
}