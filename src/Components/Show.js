import axios from "axios"
import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";


export default function Show() {
    const [editResources, setEditResources] = useState([]);
    const [userEdit, setUserEdit] = useState({
        item_name: '',
        amount: '',
        date: '',
        from: '',
        category: '',
    });

    const { id } = useParams();
    const API = process.env.REACT_APP_API_URL;
    const navigate = useNavigate();


    const updateTransactions = () => {
        axios
            .put(`${API}/transactions/${id}`, editResources)
            .then((response) => {
                setEditResources(response.data);
                navigate(`/transactions`);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleInputChange = (event) => {
        setUserEdit({ ...userEdit, [event.target.id]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        updateTransactions()
    }
    return (
        <div>

            <div className="show">
                <h2>Show</h2>
            </div>

            <form onSubmit={handleSubmit}>
                <label>
                    Item Name:
                    <input
                        type="text"
                        id="item_name"
                        value={userEdit.item_name}
                        placeholder='Name'
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    Amount:
                    <input
                        type="number"
                        id="amount"
                        value={userEdit.amount}
                        placeholder='Amount'
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    Date:
                    <input
                        type="text"
                        id="date"
                        value={userEdit.date}
                        placeholder='Date'
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    From:
                    <input
                        type="text"
                        id="from"
                        value={userEdit.from}
                        placeholder='From'
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    Category:
                    <input
                        type="text"
                        id="category"
                        value={userEdit.category}
                        placeholder='Category'
                        onChange={handleInputChange}
                    />
                </label>

                <button type="submit">Edit Resource</button>
            </form>
        </div>
    );
};




