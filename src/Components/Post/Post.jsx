import { Link, useNavigate } from "react-router-dom";

const Post = ({post}) => {
    const {id, title,body}=post;

    const navigate = useNavigate()


    const handleShowDetail=()=>{
        navigate(`/post/${id}`)
    }

    return (
        <div className="border-2 border-red-600 rounded-lg p-10">
            <h4>{id}</h4>
            <p>{title}</p>
            <p>{body}</p>
            <Link to={`/post/${id}`}>Post Detail</Link>
            <Link className="ml-2" to={`/post/${id}`}><button className="bg-red-600 text-white p-2 rounded-lg font-bold">Post Detail</button></Link>
            <button onClick={handleShowDetail}>Click Naw</button>
        </div>
    );
};

export default Post;