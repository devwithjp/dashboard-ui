import { Link } from 'react-router-dom';
import './SideBar.scss';


export default function SideBar(props){
    const menuItems = [
        {
            iconUrl : "/sidebar/dashboard.png",
            title : "Dashboard",
            path: "/dashboard",
        },
        {
            iconUrl : "/sidebar/transactions.png",
            title : "Transactions",
        },
        {
            iconUrl : "/sidebar/schedules.png",
            title : "Schedules",
        },
        {
            iconUrl : "/sidebar/users.png",
            title : "Users",
            path: "/users"
        },
        {
            iconUrl : "/sidebar/settings.png",
            title : "Settings",
            path: "/settings"
        },
    ];

    const menuBarItem = (menuItem) =>
        (<div className='sideBarItem'>
            <img src={menuItem.iconUrl} alt=""/>
            <span className='sideBarItemTitle' style={{fontWeight:menuItem.title === props.title ?700:400}}>{menuItem.title}</span>
        </div>)
    return(
        <div className='sideBar'>                
                <div className='sideBarList'>
                    <h2 className='sideBarTitle'>Dash.</h2>
                    {menuItems.map((menuItem)=>
                        menuItem.path?
                            (<Link to={menuItem.path} style={{ color: 'inherit',textDecoration: 'none' }} >
                                {menuBarItem(menuItem)}
                            </Link>)
                        :
                            menuBarItem(menuItem)
                    )}
                </div>
                <div className='sideBarInfo'>
                    <p>Help</p>
                    <p>Contact Us</p>
                </div>
        </div>
    );
}