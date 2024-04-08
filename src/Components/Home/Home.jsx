import { Outlet } from "react-router-dom"
import Header from "./Header/Header";
import Footer from "../Footer/Footer";
import {useNavigation} from "react-router-dom";
const Home = () => {
     const navigation = useNavigation();
    return (
        <div >
            <Header></Header>
            {
                navigation.state ==="loading" ? 
                <p>Loading......</p> :
                <Outlet></Outlet>
            }
           
            <Footer></Footer>
        </div>
    );
};

export default Home;