import "./style.css"
import React, {useEffect, useState} from "react";
import axios from "axios";
import AuthorEdit from "./AuthorEdit";
import {useNavigate} from "react-router-dom";
import {Button} from "@mui/material";


const AuthorList = (props) => {


    const[name, setName] = useState("")
    const[position, setPosition] = useState("")
    const [loaded, setLoaded] = useState(false);
    const [players, setPlayers] = useState([]);

    let navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/authors')
            .then(res => {
                setPlayers(res.data.Players);
                setLoaded(true);
            })

            .catch(err => console.error("tototototooto"));

    }, [players]);


    const deletePerson = (author) => {
        const confirm = window.confirm(`Are you sure you want to delete ${author.name}?`);
        if (confirm){
            axios.delete('http://localhost:8000/author/delete/' + author._id)
            .then(res => {
                console.log("works!!")
            })
            .catch(err => console.error(err));
    }}


    return (
        <>
        <div className={"LA"}>
            <h3><a href="http://localhost:3000/players/list">List |</a></h3><h3><a href="http://localhost:3000/players/addplayer">| Add Player</a></h3>
        </div>
        <div>

            <table>
                <tr>
                    <th>Player Name</th>
                    <th>Preferred Position</th>
                    <th>Actions</th>
                </tr>
                {players.map(player => (
                    <tr key={player.id}>
                        <td>{player.name}</td>
                        <td>{player.position}</td>
                        <td>
                            <Button  variant="contained" color="error"  onClick={(e)=>  deletePerson(player)}>Delete</Button>
                        </td>
                    </tr>
                ))}
            </table>
        </div>
        </>
    );
};
export default AuthorList;