import axios from "axios"
import { Link } from "react-router-dom";

export default function NavBar() {
    const mystyle = {
        color: "cream",
        backgroundColor: "turquoise",
        padding: "10px",
    }
    return (
        <nav style={mystyle}>
            <h1>Budget App</h1>

            <button>
                <Link to="/"><p>Home</p></Link></button>

            <button>
                <Link to="/transactions">All Transactions</Link>
            </button>
            <button>
                <Link to="/transactions/new">New Transactions</Link>
            </button>

        </nav>
    )

};