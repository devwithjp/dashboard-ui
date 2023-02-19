import './WhiteBox.scss'

export default function WhiteBox(props){
    return(
        <div className='whiteBox' style={props.style}>
            {props.children}
        </div>
    );
}