import axios from "axios"
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <nav>
            <h1>
                <Link to="/transactions">Budget App</Link>
            </h1>
            <button>
                <Link to="/transactions/new"> New Transactions</Link>
            </button>

        </nav>
    )

};