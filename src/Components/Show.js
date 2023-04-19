import axios from "axios"
import Index from "./Index";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";


export default function Show() {
    const [editResources, setEditResources] = useState([]);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const API = process.env.REACT_APP_API_URL;
    const navigate = useNavigate();


    const updateTransactions = () => {
        axios
            .put(`${API}/transactions/edit`, editResources)
            .then((response) => {
                setEditResources(response.data);
                navigate(`/transactions/edit`);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        updateTransactions()
    }
    return (
        <div>

            <div className="show">
                <h2>Show</h2>
                <Index />
            </div>

            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />

                <label htmlFor="description">Description:</label>
                <textarea
                    id="description"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                />

                <button type="submit">Edit Resource</button>
            </form>
        </div>
    );
};




