import Header from '../../components/Header/Header';
import WhiteBox from '../../components/HOC/WhiteBox/WhiteBox';
import Pagination from '../../components/Pagination/Pagination';
import SideBar from '../../components/Side Bar/SideBar';
import UserInfo from '../../components/UserInfo/UserInfo';
import './Users.scss';

export default function Users(props){
    const usersObj = [
        {
            profilePic: '/users/profilepics/user1.png',
            name :'Robert Thomas',
            email:'robert.thomas@gmail.com',
            gender:'Male',
            userType:'Admin'
        },
        {
            profilePic: '/users/profilepics/user2.png',
            name :'Michelle Dan',
            email:'michelle@dan.co',
            gender:'Female',
            userType:'User'
        },
        {
            profilePic: '/users/profilepics/user3.png',
            name :'Tim Josh',
            email:'tim@josh.me',
            gender:'Male',
            userType:'User'
        },
        {
            profilePic: '/users/profilepics/user4.png',
            name :'Benedict Ray',
            email:'benedict@ray.net',
            gender:'Male',
            userType:'User'
        },
        {
            profilePic: '/users/profilepics/user5.png',
            name :'Anna Sthesia',
            email:'anna@gmail.com',
            gender:'Female',
            userType:'User'
        },
        {
            profilePic: '/users/profilepics/user6.png',
            name :'Gail Forcewind',
            email:'gail.force@wind.co',
            gender:'Male',
            userType:'User'
        },
        {
            profilePic: '/users/profilepics/user7.png',
            name :'Bob Frapples',
            email:'bob@frapp.les',
            gender:'Male',
            userType:'User'
        },
        {
            profilePic: '/users/profilepics/user8.png',
            name :'Paige Turner',
            email:'paige@turn.er',
            gender:'Male',
            userType:'User'
        },
    ];

    return(
        <div>
            <SideBar title='Users'/>
            <div style={{margin: '60px 60px 60px 380px'}}>
                <Header title='Users' type='main'/>
                <WhiteBox style={{padding: '40px 50px 35px', margin: '40px 0'}}>
                    <Header title='User Records' style={{fontSize: '18px', marginBottom: '30px'}} type='usr'/>
                   { usersObj.map( user => <UserInfo data={user}/>)}
                   <Pagination />
                </WhiteBox>
            </div>
        </div>

    );
}