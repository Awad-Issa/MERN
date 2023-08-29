import React, {useState} from 'react';

const Hello = (props) => {

    const [age, setAge] = useState(props.age);
    const encreaceAge = () =>{setAge(age+1)}


    return (
        <div className={"bigDiv"}>
            <h2>{props.firstName} {props.lastName}</h2>
            <p>Age: {age}</p>
            <button onClick={ encreaceAge}>Birthday Button for Mr.{props.lastName} </button>
            <br/> ====================
        </div>
    );
};

export default Hello;
