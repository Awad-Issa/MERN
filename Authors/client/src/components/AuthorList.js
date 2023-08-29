import "./style.css"
import React, {useEffect, useState} from "react";
import axios from "axios";
import AuthorEdit from "./AuthorEdit";
import {useNavigate} from "react-router-dom";
import {Button} from "@mui/material";


const AuthorList = (props) => {


    const [authors, setAuthors] = useState([]);
    const [loaded, setLoaded] = useState(false);

    let navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/authors')
            .then(res => {
                setAuthors(res.data.Authors);
                setLoaded(true);
            })

            .catch(err => console.error("tototototooto"));

    }, [authors]);


    const deletePerson = (personId) => {
        axios.delete('http://localhost:8000/author/delete/' + personId)
            .then(res => {
                console.log("works!!")
            })
            .catch(err => console.error(err));
    }


    return (
        <div>
            <h1>Favorite Authors</h1>
            <a href="http://localhost:3000/authors/new">Add an Author</a>
            <h5>We have quotes by:</h5>
            <table>
                <tr>
                    <th>Author</th>
                    <th>Actions available</th>
                </tr>
                {authors.map(author => (
                    <tr key={author.id}>
                        <td>{author.name}</td>
                        <td>
                            <Button variant="contained"  onClick={(e)=>navigate("/authors/edit/"+author._id)}>Edit</Button>
                            <Button  variant="contained" color="error"  onClick={(e)=>  deletePerson(author._id)}>Delete</Button>
                        </td>
                    </tr>
                ))}
            </table>
        </div>
    );
};
export default AuthorList;