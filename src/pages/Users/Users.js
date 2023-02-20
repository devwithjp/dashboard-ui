import { useEffect, useState } from 'react';
import axios from 'axios';
import { usersObj } from '../../common/constants';
import Header from '../../components/Header/Header';
import WhiteBox from '../../components/HOC/WhiteBox/WhiteBox';
import Pagination from '../../components/Pagination/Pagination';
import SideBar from '../../components/Side Bar/SideBar';
import UserInfo from '../../components/UserInfo/UserInfo';
import './Users.scss';

export default function Users(props){
    const [userData, setUserData] = useState()
    useEffect(()=>{
        axios.get('https://raw.githubusercontent.com/fistus/user-info/master/user.json')
        .then((res)=> setUserData(res.data))
    },[])
    

    return(
        <div>
            <SideBar title='Users'/>
            <div style={{margin: '60px 60px 60px 25%',  maxWidth: '1094px'}}>
                <Header title='Users' type='main'/>
                <WhiteBox style={{padding: '40px 50px 35px', margin: '40px 0'}}>
                    <Header title='User Records' style={{fontSize: '18px', marginBottom: '30px'}} type='usr'/>
                   { userData?.map( user => <UserInfo data={user}/>)}
                   <Pagination />
                </WhiteBox>
            </div>
        </div>

    );
}