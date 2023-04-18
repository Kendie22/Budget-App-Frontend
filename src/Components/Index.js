import axios from "axios"
import { Link, useNavigate, } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Index() {
    const API = process.env.REACT_APP_API_URL;
    const navigate = useNavigate();
    const [allResources, setAllResources] = useState([]);

    useEffect(() => {
        axios
            .get(`${API}/transactions`)
            .then((response) => {
                console.log(response.data)
                setAllResources(response.data);
            })
            .catch(() => {
                navigate("/");
            });
    }, [navigate, API]);

    return (
        <div>
            <h1>  <Link to="/"><p>Home</p></Link></h1>
            {/* <h1>List of Resources</h1> */}
            <ul>
                {allResources.map(resource => (
                    <li key={resource.id}>
                        <a href={`/transactions/${resource.id}`}>{resource.item_name}</a>
                    </li>
                ))}
            </ul>
        </div>
    );

}


