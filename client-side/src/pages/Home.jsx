import { Link } from "react-router-dom";
import Nasa from "../img/nasa.jpeg"
import Metro from "../img/metro.png"
import Card from "../components/ui/Card";

const Home = () => {
    return (
        <>
        <h1>Home of the Mystery Educator</h1>
        <Card>
            <Link to="/nasa"><img src={Nasa} alt="Nasa" width={300} height={200}/></Link>
        </Card>
        <br/>
        <Card>
            <Link to="/metro"><img src={Metro} alt="Nasa" width={300} height={200}/></Link>
        </Card>
        </>
    )
}

export default Home;

