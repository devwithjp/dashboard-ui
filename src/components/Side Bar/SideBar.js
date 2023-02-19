import './SideBar.scss';


export default function SideBar(){
    const menuItems = [
        {
            iconUrl : "sidebar/dashboard.png",
            title : "Dashboard"
        },
        {
            iconUrl : "sidebar/transactions.png",
            title : "Transactions"
        },
        {
            iconUrl : "sidebar/schedules.png",
            title : "Schedules"
        },
        {
            iconUrl : "sidebar/users.png",
            title : "Users"
        },
        {
            iconUrl : "sidebar/settings.png",
            title : "Settings"
        },
    ];
    return(
        <div className='sideBar'>                
                <div className='sideBarList'>
                    <h2 className='sideBarTitle'>Dash.</h2>
                    {menuItems.map((menuItem, idx)=>
                        (<div className='sideBarItem'>
                            <img src={menuItem.iconUrl} alt=""/>
                            <span className='sideBarItemTitle' style={{fontWeight:idx === 0 ?700:400}}>{menuItem.title}</span>
                        </div>)
                    )}
                </div>
                <div className='sideBarInfo'>
                    <p>Help</p>
                    <p>Contact Us</p>
                </div>
        </div>
    );
}