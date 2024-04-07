import {useLoaderData} from "react-router-dom"
const UserDetails = () => {
    const user = useLoaderData();
    const {name,email,username,address}=user;
    return (
        <div >
            <h1>Name:{name}</h1>
            <p>userName:{username}</p>
            <p>Email:{email}</p>
            <p>Address:{address.street}</p>
            
            
        </div>
    );
};

export default UserDetails;
