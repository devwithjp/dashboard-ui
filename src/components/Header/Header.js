import './Header.scss';


export default function Header(props){
    // props.type = 'main' for main header | props.type = 'usr' for users sub header on users page
    const {type} = props;

    const search = (searchType, style, iconWidth, iconHeight, placeholderTxt) => (
        //search input in main header and users search in users header
        <span className='search' style={{...style}}>
            <span className='searchIcon'>
                <img alt='' src='header/search.png' width={iconWidth} height={iconHeight}/>
            </span>
            <input placeholder={placeholderTxt} className={`searchIP ${searchType === 'main' ? 'searchMain' : 'searchUsr'}`}/>
        </span>
    );
    const notificationIcon = <span id='bellIcon'><img src='header/bell.png' alt='' height={20} width={18}/></span>;
    const profPic = <span id='usrPic'><img src='header/profile.png' alt='' height={30} width={30}/></span>;
    
    const iconBtns =  (type, iconHeight, iconWidth, imageUrl, text) => (
        <span className={`iconBtns ${type}`}><img src={imageUrl} alt='' height={iconHeight} width={iconWidth}/>{text}</span>
    );

    const rightBtns = () => (
        type === 'main' ? 
        <>
            {search(props.type, {}, 12,12, 'Search...' )}
            {notificationIcon}
            {profPic}
        </>:
        <>
            {search(props.type, {width: '173px'},10 ,10, "Search in table..." )}
            {iconBtns('filter', 10, 12, 'users/filter.png', 'Filter') }
            {iconBtns('add', 12, 12, 'users/add.png', 'Add')} 
        </>
    );
        


    return(
        <div className='headerContainer'>
            <h1 style={props.style}>{props.title || 'Dashboard'}</h1>
            <div className='headerRight'>
                {rightBtns()}
            </div>      
        </div>
    );
}