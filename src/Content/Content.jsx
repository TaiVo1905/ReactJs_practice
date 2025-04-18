import ShowCard from "./ShowCard/ShowCard";
import Header from "./Header";
import Footer from "./Footer";
import { getData } from "./data.js";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";
function Content () {
    const products = getData();
    return (
        <div id="container">
            <Header></Header>
            <div id="content">
                <LeftContent/>
                <RightContent/>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Content;