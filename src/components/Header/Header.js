import './Header.scss';


export default function Header(props){
    return(
        <div className='headerContainer'>
            <h1>{props.title || 'Dashboard'}</h1>
            <div className='headerRight'>
                <span className='search'>
                    <span className='searchIcon'>
                        <img alt='' src='header/search.png' width={12} height={12}/>
                    </span>
                    <input placeholder="Search..." className='searchIP'/>
                </span>
                <span id='bellIcon'><img src='header/bell.png' alt='' height={20} width={18}/></span>
                <span id='usrPic'><img src='header/profile.png' alt='' height={30} width={30}/></span>
            </div>
        </div>
    );
}