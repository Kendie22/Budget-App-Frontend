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
            <ul>
                {allResources.map(resource => (
                    <ul key={resource.id}>
                        <Link to={`/transactions/${resource.id}`}>{resource.item_name}</Link>
                    </ul>
                ))}
            </ul>
        </div>
    );

}


