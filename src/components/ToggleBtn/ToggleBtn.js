import './ToggleBtn.scss';

export default function ToggleBtn(props){
    return(
        <span id='toggleBtn'>
            <input type="checkbox" id="switch" />
            <label for="switch">Toggle</label>
        </span>

    );
}