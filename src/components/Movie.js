import {BsFillShareFill,BsFillHeartFill} from "react-icons/bs";
import{FaCommentAlt} from 'react-icons/fa';

const Movie = (props)=>{
    return(
     <div className="cards">
        <div className="left">
            <div className="upper">
            <div className="innerLeft">
                <img src={props.smallImg} alt="not found"/>
            </div>
            <div className="innerRight">
                <h1>{props.title}</h1>
                <p style={{color:"skyblue",fontWeight:"600"}}>{props.subtitle}</p>
                <div className="minutes"><p>{props.dur}</p></div>
                <p style={{marginTop:"5px"}}>{props.action}</p>
            </div>
            </div>
            <div className="lower">
                <p>{props.dis}</p>
            </div>
            <div className="icon">
                <span><BsFillShareFill/></span>
            <span><BsFillHeartFill/></span>
            <span><FaCommentAlt/></span>
            
            </div>
        </div>

        <div className="right">
            <img src={props.bigImg} alt="not found"/>
        </div>
     </div>
    )
}
export default Movie;