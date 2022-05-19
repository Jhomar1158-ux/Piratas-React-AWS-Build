import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div>
            <h4>No encontramos al pirata, debe haber escapado!</h4>
            <Link to="/nuevo" className="btn btn-success">Crea un nuevo pirata!</Link>
        </div>

    )
}

export default Error;