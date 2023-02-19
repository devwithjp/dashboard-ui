import './Schedule.scss';

export default function Schedule(props){
    const {lineClr, firstLine, time, venue } = props;
    return(
        <div id='scheduleContainer' style={{borderColor: lineClr}}>
            <p id='line1'>{firstLine}</p>
            <p className='timeAndVenue'>{time}</p>
            <p className='timeAndVenue'>{venue}</p>
        </div>
    );
}