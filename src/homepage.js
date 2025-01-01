import "../src/cssFiles/homePage.css"
import homePageImage from "./Images/HomePage.png";

const pageLoad = () => {
    const content = document.querySelector("#content");
    content.className = "homePageContent";
};

export default pageLoad;