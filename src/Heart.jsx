import { useState } from "react";

function Heart(){
    let[isLiked, setIsLiked] = useState(false);
    let changeLike = ()=>{
        setIsLiked(!isLiked);
    }
    return(
        <p onClick={changeLike}>
        {isLiked ?
          (<i className="fa-solid fa-heart"></i>) :
          (<i className="fa-regular fa-heart"></i>)
        } 
        </p>    
    )
}

export default Heart;