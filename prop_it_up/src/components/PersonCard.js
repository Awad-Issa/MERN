import './style.css'
import {useState} from "react";

const PersonCard = (props) => {

    const [age, setAge] = useState(props.age);
    const encreaceAge = () =>{setAge(age+1)}


    return (
        <div className={"bigDiv"}>
            <h1>{props.firstName}, {props.lastName}</h1>
            <p>Age: {age}</p>
            <p>Hair Color: {props.hairColor}</p>
            <button onClick={ encreaceAge}>Birthday Button for Mr.{props.lastName} </button>
        </div>
    );
};

export default PersonCard;