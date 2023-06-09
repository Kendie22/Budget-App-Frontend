import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

function Create() {

    const [userInput, setUserInput] = useState({
        id: uuidv4(),
        item_name: '',
        amount: '',
        date: '',
        from: '',
        category: '',
    });

    const [submitStatus, setSubmitStatus] = useState('');

    const API = process.env.REACT_APP_API_URL;
    const navigate = useNavigate();

    const handleInputChange = (event) => {
        setUserInput({ ...userInput, [event.target.id]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios
            .post(`${API}/transactions`, userInput)
            .then((response) => {
                setSubmitStatus(response.data);
                navigate('/transactions');
            })
            .catch((error) => {
                console.log(error);
                setSubmitStatus('error');
            });
    };

    return (
        <div className='form'>
            {submitStatus === 'success' && (
                <div>Transaction successfully created!</div>
            )}
            {submitStatus === 'error' && (
                <div>There was an error creating the transaction.</div>
            )}
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        id="item_name"
                        value={userInput.item_name}
                        placeholder='Name'
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    Amount:
                    <input
                        type="number"
                        id="amount"
                        value={userInput.amount}
                        placeholder='Amount'
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    Date:
                    <input
                        type="text"
                        id="date"
                        value={userInput.date}
                        placeholder='Date'
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    From:
                    <input
                        type="text"
                        id="from"
                        value={userInput.from}
                        placeholder='From'
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    Category:
                    <input
                        type="text"
                        id="category"
                        value={userInput.category}
                        placeholder='Category'
                        onChange={handleInputChange}
                    />
                </label>
                <button type="submit">Create New Item</button>
            </form>
        </div>
    );
}

export default Create;
