import play from '../Assets/play.png';
import plus from '../Assets/plus.png';

export default function Poster(){
    return(
        <div class="Poster">
        <div class="blackLayer">
        <div class="posterElements">
            <span class="Nseries" ><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Netflix_2015_N_logo.svg/1200px-Netflix_2015_N_logo.svg.png" style={{ height : '38px' , width : '22px' }} />
            <span>S E R I E S</span>
            </span>
            <span class="posterTitle" ><img src="https://images.stream.osn.com/images/OSN_Production_-_Main/414/924/8125_TT125739456.png" style={{ height : '180px' }} /></span>
            <span class="Description">Trapped in adolescent bodies, feuding vampire brothers Stefan and Damon vie for the affection of captivating teenager Elena.</span>
            <span class="posterButtons"><button class="Play" ><img src={play} />Play</button><button class="myList" ><img src={plus} />My List</button></span>
        </div>
        </div>
        </div>
    )
}