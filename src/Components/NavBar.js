import axios from "axios"
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <nav>
            <h1>Budget App</h1>

            <h1>  <Link to="/"><p>Home</p></Link></h1><button>
                <Link to="/transactions">All Transactions</Link>
            </button>
            <button>
                <Link to="/transactions/new">New Transactions</Link>
            </button>

        </nav>
    )

};