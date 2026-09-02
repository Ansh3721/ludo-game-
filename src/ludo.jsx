import {useState} from "react" ;
export default function LudoGame (){
    
    let [moves , setMoves] = useState({blue : 0 , red : 0 , green : 0 , yellow : 0}) ;

    function handleMoveBlue() {
        moves.blue = moves.blue + 1 ;
        setMoves( {...moves} ) ;
    }
    function handleMoveRed () {
        moves.red = moves.red + 1 ;
        setMoves( {...moves} ) ;
    }
    function handleMoveGreen () {
        moves.green = moves.green + 1 ;
        setMoves({...moves}) ;
    }
    function handleMoveYellow () {
        moves.yellow = moves.yellow + 1 ;
        setMoves({...moves}) ;
    }
    
    
    return (
        <div>
            <div>
                <p>blue moves = {moves.blue}</p>
                <button onClick = { handleMoveBlue } style={{backgroundColor : "blue"}}> +1 </button>
                <p>red moves = {moves.red}</p>
                <button onClick = { handleMoveRed } style = {{backgroundColor : "red"}}> +1 </button>
                <p>green moves = {moves.green}</p>
                <button onClick = { handleMoveGreen } style = {{backgroundColor : "green"}}> +1 </button>
                <p>yellow moves = {moves.yellow}</p>
                <button onClick = { handleMoveYellow } style = {{backgroundColor : "yellow" , color : "black"}}> +1 </button>
            </div>
        </div>
    )
}