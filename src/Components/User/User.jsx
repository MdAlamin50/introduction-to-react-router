import { Link } from "react-router-dom";

const User = ({user}) => {
    const {id, name, email, phone}= user;
    return (
        <div className="border-2 border-red-600 rounded-lg p-10">
            <h1 className="font-extrabold">Name:  {name}</h1>
            <p>Email:  {email}</p>
            <p className="font-bold">Phone:  {phone}</p>
            <Link to={`/user/${id}`}>Show Details</Link>
            <Link className="ml-2" to={`/user/${id}`}><button>Click Me</button> </Link>
            

        </div>
    );
};

export default User;