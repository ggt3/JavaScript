//renders the score object date and score properties
export default function Score(props) {
    // console.log("in score: ",props)
return (
    <div id="score">
   {/* {props.scores.map((score,index)=> (
        <p>{score.date} grade: {score.score}</p>
    ))} */}
    <p>{props.date} grade: {props.score}</p>
    </div>
);
};