import { NavLink } from "react-router"

function Movies (){
    return <div>
        <h2 style={{ color: "#662222" }}> Movie Page</h2>
        <NavLink to="/add-movie"style={{ backgroundColor: "#EE6983", borderColor: "#ff0a54" }} className="btn btn-primary">Add Movie</NavLink>
    </div>
}
export default Movies
