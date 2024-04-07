
const User = ({user}) => {
    const {id, name, email, phone}= user;
    return (
        <div className="border-2 border-red-600 rounded-lg p-10">
            <h1 className="font-extrabold">Name:  {name}</h1>
            <p>Email:  {email}</p>
            <p className="font-bold">Phone:  {phone}</p>
        </div>
    );
};

export default User;