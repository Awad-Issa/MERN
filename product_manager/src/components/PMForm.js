import React, {useState} from "react";
import axios from "axios";

const PMForm = (props) => {

    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState("")

    // let navigate = useNavigate();

    const [errors, setErrors] = useState([]);
    const onSubmitHandler = e => {
        e.preventDefault();

        axios.post('http://localhost:8000/product/new', {
            title,
            price,
            description
        })
            .then(res => {
                console.log(res);

                // Check if 'data' property exists in the response
                if (res.data) {
                    if (res.data.title) {
                        console.log(res.data.title);
                    } else {
                        console.log("Product title not found in response.");
                    }
                    // Do something with the response if needed
                    // navigate("/")
                } else {
                    console.log("Data not found in response.");
                }
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

            <h1>Product Manger</h1>

            <form onSubmit={onSubmitHandler}>
                {errors.map((err, index) => <p key={index}>{err}</p>)}

                <label>Title: </label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
                <br/>
                <br/>
                <label>Price: </label>
                <input type="number" value={price} onChange={(e) => setPrice(e.target.value)}/>
                <br/>
                <br/>
                <label>Description: </label>
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)}/>

                <br/>
                <br/>
                <input type="submit" value="Create"/>
            </form>
        </div>

    )
}
export default PMForm;