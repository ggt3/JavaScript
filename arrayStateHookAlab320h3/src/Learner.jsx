import Score from "./Score.jsx"

//Returns the learner's name and bio 
//Renders a Score component 
export default function Learner(props) {
//    console.log("Learner props:", props);
    return (
       <div>
        <h1>{props.name}</h1>
        <h3>{props.bio}</h3>
        {props.scores.map((score,index)=> (
         <Score key = {index} {...score}/>    
        ))}
        {/* <Score scores={props.scores}/>  */}
        </div>
    );
};
//passing the whole array as scores variable