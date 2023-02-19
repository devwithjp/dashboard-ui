import './Pagination.scss';

export default function Pagination(props){
    const pageBtns = (activated, content) => (
        <span id='pageBtns' style={{background: activated? '#EAEAEA': '#FFFFFF'}}>
            {typeof content === 'number' ? content : <img src={content} alt='' height={12} width={7.5}/> }
        </span> 
    );
    return(
        <div id='pageBtnsContainer'>
            {pageBtns(false, 'users/leftarrow.png')}
            {pageBtns(true, 1)}
            {pageBtns(false, 2)}
            {pageBtns(false, 3)}
            {pageBtns(false, 4)}
            {pageBtns(false, 5)}
            {pageBtns(false, 'users/rightarrow.png')}
        </div>
    );
}