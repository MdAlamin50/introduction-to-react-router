import {useLoaderData} from "react-router-dom"
import User from "../User/User";
const Users = () => {

     const users = useLoaderData();
    console.log(users)
    return (
        <div>
            <h2>Our Users: {users.length}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, in.</p>
            
             <div className="grid lg:grid-cols-3 gap-4 grid-cols-1 m-5">
               {
                users.map(user => <User key={user.id} user={user}></User>)
               }
             </div>

        </div>
    );
};

export default Users; 