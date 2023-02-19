
import SideBar from '../../components/Side Bar/SideBar';
import Header from '../../components/Header/Header'
import TotalCard from '../../components/TotalCard/TotalCard';
import WhiteBox from '../../components/HOC/WhiteBox/WhiteBox';
import Chart from '../../components/Chart/Chart';
import Schedules from '../../components/Schedules/Schedules';
import './Dashboard.scss';

export default function Dashboard(props){
    return (
        <div>
          <SideBar/>
          <div style={{margin: '60px 60px 60px 380px'}}>
            <Header/>
            <div className='totalCards'>
              <TotalCard backgoundClr="#DDEFE0" title="Total Revenues" val="$2,129,430" img='total card/revenue.png'/>
              <TotalCard backgoundClr="#F4ECDD" title="Total Transactions" val="1,520" img='total card/transactions.png'/>
              <TotalCard backgoundClr="#EFDADA" title="Total Likes" val="9,721" img='total card/likes.png'/>
              <TotalCard backgoundClr="#DEE0EF" title="Total Users" val="892" img='total card/users.png'/>
            </div>
            <WhiteBox style={{padding:'30px 40px 25px'}}>
              <Chart type='line'/>
            </WhiteBox>
            <div className='chartScheduleContainer'>
              <WhiteBox style={{padding:'30px 40px', minWidth:'450px', maxWidth:'530px',width:'48%', marginTop: '40px'}}>
                <Chart type='pie'/>
              </WhiteBox>
              <WhiteBox style={{padding:'30px 40px', minWidth:'450px',maxWidth:'530px', width:'48%' ,marginTop: '40px'}}>
                <Schedules/> 
              </WhiteBox>
            </div>
          </div>
        </div>
    );
}