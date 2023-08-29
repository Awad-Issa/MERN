import React, { useEffect, useState } from "react";
import axios from "axios";
import {useParams, Link, useNavigate} from "react-router-dom";

const AuthorEdit = () => {
    const [name, setName] = useState("");
    const { id } = useParams();
    let navigate = useNavigate();
    const [errors, setErrors] = useState([]);


    useEffect(() => {
        // Fetch author data when the component mounts
        axios.get('http://localhost:8000/author/' + id)
            .then(res => {
                setName(res.data.author.name);
                console.log(res)
            })
            .catch(error => {
                console.error("Error fetching author data:", error);
            });
    }, [id]);

    const updateAuthor = e => {
        e.preventDefault();
        // Update author name
        axios.patch('http://localhost:8000/authors/edit/' + id, {
            name
        }
        )
            .then(res => {
            console.log("Author updated:", res);
                navigate ("/authors");
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

    return (
        <div>
            <h1>Favorite Authors</h1>
            <Link to="/authors">Home</Link> {/* Using Link component */}
            <h5>Update an Author</h5>

            <form onSubmit={updateAuthor}>
                {errors.map((err, index) => <p key={index}>{err}</p>)}

                <p>
                    <label>Name</label><br/>
                    <input type="text" onChange={(e) => setName(e.target.value)} value={name}  />
                </p>
                <input type="submit" value="Update"/>
            </form>
        </div>
    );
};

export default AuthorEdit;
