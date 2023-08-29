import "./style.css"
import React, {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
const AuthorForm = () => {

    const [name, setName] = useState("");
    const [position, setPosition] = useState("");


        let navigate = useNavigate();
    const [errors, setErrors] = useState([]);
    const onSubmitHandler = e => {
        e.preventDefault();

        axios.post('http://localhost:8000/authors/new', {
            name, position
        })
            .then(res => {
                console.log(res);
                if (res.data && res.data.author && res.data.author.name) {
                    console.log(res.data.author.name); // Access the author's name from the response
                } else {
                    console.log("Author name not found in response.");
                }
                // Do something with the response if needed
                    navigate("/")
            })
            .catch(err => {
                console.log(err.response.data.errors);
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message);
                }
                setErrors(errorArr);

            });
    }


    return(
<>
        <div className={"LA"}>
            <h3><a href="http://localhost:3000/players/list">List |</a></h3><h3><a href="http://localhost:3000/players/addplayer">| Add Player</a></h3>
        </div>
        <div>


            <form onSubmit={onSubmitHandler}>
                {errors.map((err, index) => <p key={index}>{err}</p>)}

                <p>
                    <label>Name</label><br/>
                    <input type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
                </p>

                <p>
                    <label>Position</label><br/>
                    <input type="text" onChange={(e)=>setPosition(e.target.value)} value={position}/>
                </p>
                <input type="submit"/>
            </form>

        </div>

</>
    );
};
export default AuthorForm;