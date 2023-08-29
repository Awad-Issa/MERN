import React, {useState} from 'react';

const UserForm = (props) => {

    const [name, setName] = useState("");
    const [nameError, setNameError] = useState();

    const handleName = (e) =>
    {
        setName(e.target.value)
        if (e.target.value.length < 1){
            setNameError("Name is required");
        }
        else if (e.target.value.length < 2) {
            setNameError("Name shoud be More Than 2 Charcters");
        }

        else {
            setNameError("");
        }

    }


    const createName = (e) =>{

        e.preventDefault();

    console.log("Welcome", name)

        setName("");

    }
    return(
        <form onSubmit={createName}>

            <div>
                <label>Name:</label>
                <input type="text" value={name} onChange={(e) => setName((e.target.value))} onChange={handleName}/>
                {
                    nameError ?
                        <p>{(nameError)}</p> :
                            ''
                }
            </div>

            <h2>Name: {name}</h2>

        </form>
    )

};
export default UserForm;
