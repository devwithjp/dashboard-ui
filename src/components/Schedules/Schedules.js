import Schedule from './Schedule/Schedule';
import './Schedules.scss';

export default function Schedules(){
    const schedules = [
        {
            lineClr: "#9BDD7C",
            firstLine: "Meeting with suppliers from Kuta Bali",
            time: "14.00-15.00",
            venue: "at Sunset Road, Kuta, Bali"
        },
        {
            lineClr: "#6972C3",
            firstLine: "Check operation at Giga Factory 1",
            time: "18.00-20.00",
            venue: "at Central Jakarta "
        }
    ];
    return(
    <div id='schedulesContainer'>
        <div id='schedulesHeader'>
            <span id='title'>Today's schedule</span>
            <span id='seeAllBtn'>See All <img src='/schedules/rightarrow.png' alt='' height={8} width={5}/></span>
        </div>
        <Schedule  lineClr={schedules[0].lineClr} firstLine={schedules[0].firstLine} time={schedules[0].time} venue={schedules[0].venue}  />
        <Schedule  lineClr={schedules[1].lineClr} firstLine={schedules[1].firstLine} time={schedules[1].time} venue={schedules[1].venue}  />

    </div>);
}