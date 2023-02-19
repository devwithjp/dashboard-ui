import './TotalCard.scss';

export default function TotalCard(props){
    return(
        <div className='cardContainer' style={{backgroundColor: props.backgoundClr}}>
            <div>
                <span id='totalIcon'><img src={props.img} alt=''/></span>
                <p id='totalTitle'>{props.title}</p>
                <p id='totalVal'>{props.val}</p>
            </div>

        </div>
    );
}